import type React from "react"
import { cn } from "../lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      {children}
    </section>
  )
}

// Export alias for backward compatibility
export const SectionWrapper = Section
