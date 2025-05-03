"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="w-full md:w-2/5 flex justify-center md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/0 blur-lg" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src="/static/profil.jpg"
                  alt="Jocelyn Sainson"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I&apos;m Jocelyn Sainson, a passionate Full-Stack
                Developer with expertise in building modern web applications. I
                specialize in creating responsive, high-performance solutions
                that solve real-world problems.
              </p>
              <p>
                With a strong foundation in both front-end and back-end
                technologies, I enjoy working across the entire development
                stack to deliver seamless user experiences and robust
                application architectures.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                my knowledge with the developer community.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Download size={16} />
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  Download CV
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <a
                  href="https://github.com/jos34000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/jocelyn-sainson-42305920b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="gap-2">
                <a
                  href="mailto:jocelynsainson@icloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex gap-2 items-center"
                >
                  <Mail size={16} />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
