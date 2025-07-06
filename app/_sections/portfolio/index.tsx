"use client"

import { useState } from "react"
import { SectionWrapper } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Button } from "../../../common/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../../components/ui/dialog"
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Web Apps", "Mobile Apps", "E-commerce", "SaaS", "Landing Pages"]

const projects = [
  {
    id: 1,
    title: "EcoTrack - Sustainability Platform",
    category: "Web Apps",
    description: "A comprehensive platform for tracking and managing environmental impact with real-time analytics.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    liveUrl: "https://ecotrack-demo.com",
    githubUrl: "https://github.com/pixeledgelabs/ecotrack",
    featured: true,
    client: "GreenTech Solutions",
    duration: "3 months",
    results: "40% increase in user engagement, 25% reduction in carbon footprint tracking time",
  },
  {
    id: 2,
    title: "FitPal - Fitness Mobile App",
    category: "Mobile Apps",
    description: "Cross-platform fitness app with workout tracking, nutrition planning, and social features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React Native", "Firebase", "Redux", "Stripe"],
    liveUrl: "https://fitpal-app.com",
    githubUrl: "https://github.com/pixeledgelabs/fitpal",
    featured: true,
    client: "FitLife Inc.",
    duration: "4 months",
    results: "50K+ downloads in first month, 4.8 star rating on app stores",
  },
  {
    id: 3,
    title: "ShopSmart - E-commerce Platform",
    category: "E-commerce",
    description: "Modern e-commerce solution with AI-powered recommendations and seamless checkout.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "Vercel"],
    liveUrl: "https://shopsmart-demo.com",
    githubUrl: "https://github.com/pixeledgelabs/shopsmart",
    featured: false,
    client: "RetailMax",
    duration: "2 months",
    results: "35% increase in conversion rate, 60% faster page load times",
  },
  {
    id: 4,
    title: "TaskFlow - Project Management SaaS",
    category: "SaaS",
    description: "Collaborative project management tool with advanced reporting and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
    liveUrl: "https://taskflow-saas.com",
    githubUrl: "https://github.com/pixeledgelabs/taskflow",
    featured: true,
    client: "ProductivityPro",
    duration: "5 months",
    results: "200+ teams onboarded, 95% user satisfaction rate",
  },
  {
    id: 5,
    title: "TechStartup Landing Page",
    category: "Landing Pages",
    description: "High-converting landing page for a tech startup with interactive animations and lead capture.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
    liveUrl: "https://techstartup-landing.com",
    githubUrl: "https://github.com/pixeledgelabs/techstartup-landing",
    featured: false,
    client: "InnovateTech",
    duration: "3 weeks",
    results: "300% increase in lead generation, 45% improvement in bounce rate",
  },
  {
    id: 6,
    title: "HealthCare Portal",
    category: "Web Apps",
    description: "Patient management system with appointment scheduling and telemedicine capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    liveUrl: "https://healthcare-portal.com",
    githubUrl: "https://github.com/pixeledgelabs/healthcare-portal",
    featured: false,
    client: "MedCare Solutions",
    duration: "6 months",
    results: "500+ patients managed daily, 80% reduction in appointment scheduling time",
  },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="py-24">
        <div className="text-center">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg md:text-xl font-bold">
            Our Portfolio
          </Badge>
          
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-8">
            Explore our collection of successful projects that have helped businesses grow and achieve their digital goals.
          </p>
        </div>
      </SectionWrapper>

      {/* All Projects */}
      <SectionWrapper className="py-16 bg-surface-secondary dark:bg-dark-surface-secondary px-4 md:px-8">
        <div className="mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {projects.slice(0, 4).map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-shadow rounded-2xl h-full flex flex-col">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {project.featured && <Badge className="absolute top-4 left-4 bg-blue-500">Featured</Badge>}
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base text-text-secondary dark:text-dark-text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-auto">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        intent="tertiary"
                        size="md"
                        className="flex-1 bg-transparent"
                        onClick={() => setSelectedProject(project)}
                      >
                        Details
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  <Button size="md" className="flex-1">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-2">
          <a href="/portfolio" className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-accent-500 hover:bg-accent-600 text-white transition-colors">
            View More
          </a>
        </div>
      </SectionWrapper>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex gap-3 mb-4">
                    <Button className="flex-1">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button intent="tertiary" className="flex-1 bg-transparent">
                      <GithubIcon className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Description</h4>
                      <p className="text-text-secondary dark:text-dark-text-secondary">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Client</h4>
                      <p className="text-text-secondary dark:text-dark-text-secondary">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Duration</h4>
                      <p className="text-text-secondary dark:text-dark-text-secondary">{selectedProject.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-text-secondary dark:text-dark-text-secondary">{selectedProject.results}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <SectionWrapper className="py-24">
        <div className="text-center">
          <Heading className="mb-4">
            Ready to Start Your Project?
          </Heading>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Contact us to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Start Your Project</Button>
            <Button size="lg" intent="tertiary">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
