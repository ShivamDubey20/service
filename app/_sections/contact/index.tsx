"use client"

import type React from "react"

import { useState } from "react"
import { SectionWrapper } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Button } from "../../../common/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../../components/ui/accordion"
import { TypewriterEffectSmooth } from "../../../components/ui/typewriter-effect"
import {
  MessageCircleIcon,
  ArrowRightIcon,
} from "lucide-react"

const faqs = [
  {
    question: "What types of projects do you work on?",
    answer:
      "We work on a wide range of digital projects including web applications, mobile apps, e-commerce platforms, SaaS solutions, and custom software development. From startups to enterprise-level solutions, we adapt our approach to meet your specific needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We believe in long-term partnerships with our clients.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular client communication. Our process includes discovery, planning, design, development, testing, and deployment phases. You'll receive regular updates and have opportunities to provide feedback throughout.",
  },
  {
    question: "Can you work with our existing team?",
    answer:
      "We're experienced in collaborating with in-house teams, other agencies, and stakeholders. We can integrate seamlessly into your existing workflow and communication processes.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with a 50% upfront payment and 50% upon completion for smaller projects. For larger projects, we can arrange milestone-based payments. We accept various payment methods and can discuss terms that work for your budget.",
  },
]

export function Contact() {

  const words = [
    {
      text: "Let's",
    },
    {
      text: "build",
    },
    {
      text: "something",
    },
    {
      text: "amazing",
    },
    {
      text: "together.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Typewriter Effect */}
      <SectionWrapper className="py-24">
        <div className="flex flex-col items-center justify-center min-h-[40rem]">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg md:text-xl font-bold">
            Get In Touch
          </Badge>
          
          <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base mb-8 text-center max-w-2xl">
            Ready to transform your digital presence? We're here to help bring your vision to life with cutting-edge solutions tailored to your needs.
          </p>
          
          <TypewriterEffectSmooth words={words} className="text-center mb-8" />
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Button 
              size="lg" 
              className="w-40 h-12 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white border-0"
            >
              Start Project
            </Button>
            <Button 
              size="lg" 
              className="w-40 h-12 rounded-xl bg-white text-black border-2 border-black hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-800"
            >
              Get Quote
            </Button>
          </div>
        </div>
      </SectionWrapper>



      {/* FAQ Section */}
      <SectionWrapper className="py-24 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading className="mb-4">
              Frequently Asked Questions
            </Heading>
            <p className="text-xl text-text-secondary dark:text-dark-text-secondary">
              Get answers to common questions about our services and process
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface-primary dark:bg-dark-surface-primary rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-text-secondary dark:text-dark-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>
    </div>
  )
}
