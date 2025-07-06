"use client"

import type React from "react"

import { useState } from "react"
import { SectionWrapper } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Button } from "../../../common/button"
import { Input } from "../../../components/ui/input"
import { Badge } from "../../../components/ui/badge"
import { CheckIcon, MailIcon, TrendingUpIcon, BookOpenIcon, BellIcon } from "lucide-react"

interface NewsletterProps {
  newsletter: {
    title: string
    subtitle: string
    placeholder: string
    buttonText: string
  }
}

const benefits = [
  {
    icon: TrendingUpIcon,
    title: "Industry Insights",
    description: "Latest trends in web development and design",
  },
  {
    icon: BookOpenIcon,
    title: "Expert Tips",
    description: "Practical advice from our development team",
  },
  {
    icon: BellIcon,
    title: "Project Updates",
    description: "Behind-the-scenes look at our latest work",
  },
]

export function Newsletter({ newsletter }: NewsletterProps) {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setEmail("")
    setIsSubmitting(false)
  }

  if (isSubscribed) {
    return (
      <SectionWrapper className="py-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckIcon className="h-8 w-8" />
          </div>
          <Heading as="h2" className="mb-4 text-white">
            Welcome to Our Community!
          </Heading>
          <p className="text-xl opacity-90 mb-6">
            Thank you for subscribing! You'll receive our latest insights and updates directly in your inbox.
          </p>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Subscription Confirmed
          </Badge>
        </div>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MailIcon className="h-6 w-6" />
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Newsletter
              </Badge>
            </div>
            <Heading as="h2" className="mb-4 text-white">
              {newsletter.title}
            </Heading>
            <p className="text-xl opacity-90 mb-8">{newsletter.subtitle}</p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-white/20 rounded">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm opacity-80">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/70 focus:bg-white/20"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-white/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : newsletter.buttonText}
              </Button>
            </form>

            <p className="text-sm opacity-70 mt-4 text-center">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
