"use client"

import * as React from "react"
import { Button } from "./button"
import { Input } from "./input"
import { Label } from "./label"
import { Switch } from "./switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Github, Dribbble, Mail, Phone, MapPin } from "lucide-react"
import { ThemeSwitcher } from "../theme-switcher"

function FooterDemo() {
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <footer className="relative border-t bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950 text-foreground transition-colors duration-300">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5" />
      <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />
      
      <div className="container relative mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Stay Connected
            </h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-12 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
                disabled={isSubmitting}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <nav className="space-y-2 text-sm">
              <a href="/" className="block transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Home
              </a>
              <a href="/about" className="block transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                About Us
              </a>
              <a href="/services" className="block transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Services
              </a>
              <a href="/portfolio" className="block transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Portfolio
              </a>
              <a href="/contact" className="block transition-colors hover:text-blue-600 dark:hover:text-blue-400">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <address className="space-y-2 text-sm not-italic">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                <p>Delhi NCR, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <p>+91 (123) 456-7890</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <p>hello@pixeledgelabs.com</p>
              </div>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:border-blue-500 dark:hover:bg-blue-950/20" asChild>
                      <a href="https://linkedin.com/company/pixeledgelabs" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:border-blue-500 dark:hover:bg-blue-950/20" asChild>
                      <a href="https://twitter.com/pixeledgelabs" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:border-blue-500 dark:hover:bg-blue-950/20" asChild>
                      <a href="https://github.com/pixeledgelabs" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Check out our GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:border-blue-500 dark:hover:bg-blue-950/20" asChild>
                      <a href="https://dribbble.com/pixeledgelabs" target="_blank" rel="noopener noreferrer">
                        <Dribbble className="h-4 w-4" />
                        <span className="sr-only">Dribbble</span>
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View our designs on Dribbble</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-orange-500" />
              <ThemeSwitcher />
              <Moon className="h-4 w-4 text-blue-500" />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700 pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 PixelEdgeLabs. All rights reserved. Crafted with ❤️ in Delhi NCR, India.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="/privacy" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              Terms of Service
            </a>
            <a href="/cookies" className="transition-colors hover:text-blue-600 dark:hover:text-blue-400">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { FooterDemo } 