"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check, Code, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface LibraryItemProps {
  title: string
  description: string
  category: string
  preview: () => JSX.Element
  code: string
  usage: string
}

export function LibraryItem({ title, description, category, preview, code, usage }: LibraryItemProps) {
  const [copied, setCopied] = useState<"code" | "usage" | null>(null)

  const handleCopy = (type: "code" | "usage", text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="bg-muted/40 rounded-lg p-4 flex items-center justify-center min-h-[100px]">{preview()}</div>

          <Tabs defaultValue="code" className="mt-4">
            <TabsList className="w-full">
              <TabsTrigger value="code" className="flex-1">
                <Code className="h-4 w-4 mr-2" />
                Code
              </TabsTrigger>
              <TabsTrigger value="usage" className="flex-1">
                <ExternalLink className="h-4 w-4 mr-2" />
                Usage
              </TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="mt-2">
              <div className="relative">
                <pre className="bg-muted/40 p-4 rounded-lg text-xs overflow-x-auto max-h-[200px]">{code}</pre>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => handleCopy("code", code)}
                >
                  {copied === "code" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="usage" className="mt-2">
              <div className="relative">
                <pre className="bg-muted/40 p-4 rounded-lg text-xs overflow-x-auto max-h-[200px]">{usage}</pre>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8"
                  onClick={() => handleCopy("usage", usage)}
                >
                  {copied === "usage" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="pt-2 flex justify-end">
          <Button variant="outline" size="sm" onClick={() => handleCopy("code", code)}>
            {copied === "code" ? <Check className="h-4 w-4 mr-2" /> : <Copy className="h-4 w-4 mr-2" />}
            Copier
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
