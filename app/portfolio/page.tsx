import type { Metadata } from "next"
import { PageView } from "../../components/page-view"
import { Button } from "../../common/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { SectionWrapper } from "../../common/section-wrapper"
import HeroBackground from "../../components/ui/hero-background"
import { 
  ExternalLinkIcon,
  GithubIcon,
  GlobeIcon,
  SmartphoneIcon,
  CodeIcon,
  PaletteIcon,
  TrendingUpIcon,
  UsersIcon,
  ClockIcon,
  StarIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio - PixelEdgeLabs",
  description:
    "Explore our portfolio of successful projects including web applications, mobile apps, e-commerce platforms, and digital solutions.",
}

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern e-commerce platform built with Next.js, featuring advanced search, payment integration, and admin dashboard.",
    image: "/placeholder.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    stats: {
      users: "10K+",
      revenue: "$500K+",
      performance: "98%"
    },
    featured: true
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Cross-platform mobile banking application with biometric authentication and real-time transaction tracking.",
    image: "/placeholder.jpg",
    technologies: ["React Native", "Firebase", "Biometrics", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
    stats: {
      users: "50K+",
      transactions: "1M+",
      rating: "4.8"
    },
    featured: true
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description: "Comprehensive SaaS dashboard with analytics, user management, and real-time data visualization.",
    image: "/placeholder.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    stats: {
      users: "5K+",
      uptime: "99.9%",
      features: "50+"
    },
    featured: false
  },
  {
    title: "Restaurant Management System",
    category: "Full Stack",
    description: "Complete restaurant management solution with POS, inventory tracking, and customer analytics.",
    image: "/placeholder.jpg",
    technologies: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    stats: {
      restaurants: "100+",
      orders: "10K+",
      efficiency: "40%"
    },
    featured: false
  },
  {
    title: "AI-Powered Chatbot",
    category: "AI/ML",
    description: "Intelligent customer service chatbot with natural language processing and sentiment analysis.",
    image: "/placeholder.jpg",
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
    stats: {
      conversations: "100K+",
      accuracy: "95%",
      languages: "5"
    },
    featured: false
  },
  {
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Modern real estate platform with virtual tours, property search, and agent management system.",
    image: "/placeholder.jpg",
    technologies: ["Angular", "Django", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    stats: {
      properties: "50K+",
      agents: "1K+",
      views: "2M+"
    },
    featured: false
  }
]

const caseStudies = [
  {
    title: "How We Increased Conversion by 300%",
    client: "TechStartup Inc.",
    industry: "SaaS",
    challenge: "Low user engagement and poor conversion rates on their web application.",
    solution: "Redesigned the user interface, implemented A/B testing, and optimized the conversion funnel.",
    results: [
      "300% increase in conversion rate",
      "50% reduction in bounce rate",
      "200% increase in user engagement"
    ],
    duration: "3 months",
    team: "4 developers, 2 designers"
  },
  {
    title: "Mobile App That Reached 1M Downloads",
    client: "FitnessTech",
    industry: "Health & Fitness",
    challenge: "Creating a mobile app that could compete with established fitness platforms.",
    solution: "Built a cross-platform app with gamification, social features, and AI-powered workout recommendations.",
    results: [
      "1M+ downloads in first year",
      "4.8/5 app store rating",
      "80% user retention rate"
    ],
    duration: "6 months",
    team: "6 developers, 3 designers"
  }
]

const stats = [
  { label: "Projects Completed", value: "150+", icon: CodeIcon },
  { label: "Happy Clients", value: "80+", icon: UsersIcon },
  { label: "Years Experience", value: "5+", icon: ClockIcon },
  { label: "Client Satisfaction", value: "98%", icon: StarIcon }
]

export default function PortfolioPage() {
  return (
    <>
      <PageView ingestKey="portfolio-page" />
      
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center max-w-4xl mx-auto pt-24">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg font-bold">
            Our Work
          </Badge>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Showcasing Digital Excellence
          </h1>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise in creating innovative digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" intent="primary">
              View Case Studies
            </Button>
            <Button size="lg" intent="outline">
              Start Your Project
            </Button>
          </div>
        </div>
      </HeroBackground>

      {/* Stats Section */}
      <SectionWrapper className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-blue-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Featured Projects */}
      <SectionWrapper className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Our most impactful work that showcases our technical expertise and creative problem-solving
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(p => p.featured).map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-green-500 text-white">{project.category}</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-text-secondary dark:text-dark-text-secondary mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-text-primary">{value}</div>
                        <div className="text-xs text-text-tertiary capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" intent="outline" className="flex-1">
                      <GlobeIcon className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" intent="outline" className="flex-1">
                      <GithubIcon className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* All Projects Grid */}
      <SectionWrapper className="py-16 px-4 md:px-8 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Browse through our complete portfolio of successful digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-blue-500 text-white">{project.category}</Badge>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-text-secondary dark:text-dark-text-secondary mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" intent="outline" className="flex-1">
                      <ExternalLinkIcon className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Start your project today and join our success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 border-white shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </Button>
            <Button size="lg" intent="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
