"use client"
import { cn } from "@/lib/utils"
import {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { createNoise3D } from "simplex-noise"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
}) => {
  const noise = createNoise3D()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const contextRef = useRef<{
    w: number
    h: number
    nt: number
    ctx: CanvasRenderingContext2D | null
  }>({
    w: 0,
    h: 0,
    nt: 0,
    ctx: null,
  })

  const waveColors = useMemo(
    () => colors ?? ["#0ea5e9", "#8b5cf6", "#06b6d4", "#6366f1", "#3b82f6"],
    [colors]
  )

  const render = useCallback(() => {
    const { ctx, w, h } = contextRef.current
    if (!ctx) return

    ctx.fillStyle = backgroundFill ?? "black"
    ctx.globalAlpha = waveOpacity || 0.5
    ctx.fillRect(0, 0, w, h)

    const drawWave = (n: number) => {
      contextRef.current.nt += speed === "fast" ? 0.002 : 0.001
      for (let i = 0; i < n; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth ?? 50
        ctx.strokeStyle = waveColors[i % waveColors.length]
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, contextRef.current.nt) * 100
          ctx.lineTo(x, y + h * 0.5)
        }
        ctx.stroke()
        ctx.closePath()
      }
    }

    drawWave(5)
    requestAnimationFrame(render)
  }, [backgroundFill, waveOpacity, waveWidth, noise, speed, waveColors])

  const init = useCallback(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    contextRef.current = {
      w: window.innerWidth,
      h: window.innerHeight,
      nt: 0,
      ctx,
    }

    ctx.canvas.width = contextRef.current.w
    ctx.canvas.height = contextRef.current.h
    ctx.filter = `blur(${blur}px)`

    render()
  }, [blur, render])

  useEffect(() => {
    init()
    const handleResize = () => {
      if (!contextRef.current.ctx) return
      contextRef.current.w = window.innerWidth
      contextRef.current.h = window.innerHeight
      contextRef.current.ctx.canvas.width = contextRef.current.w
      contextRef.current.ctx.canvas.height = contextRef.current.h
      contextRef.current.ctx.filter = `blur(${blur}px)`
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [init, blur])

  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    )
  }, [])

  return (
    <div
      id="home"
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  )
}
