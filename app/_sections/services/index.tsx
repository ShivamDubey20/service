import { SectionWrapper } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Button } from "../../../common/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { BentoCard, BentoGrid } from "../../../components/ui/bento-grid"
import {
  CheckIcon,
  ArrowRightIcon,
  CodeIcon,
  SmartphoneIcon,
  PaletteIcon,
  SearchIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
} from "lucide-react"

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: CodeIcon,
    features: ["React/Next.js", "Node.js Backend", "Database Integration", "API Development"],
    price: "Starting at $2,999",
    popular: false,
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-2 md:row-span-2",
    background: <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 opacity-90" />,
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    icon: SmartphoneIcon,
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    price: "Starting at $4,999",
    popular: true,
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 opacity-90" />,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers",
    icon: PaletteIcon,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting at $1,999",
    popular: false,
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 opacity-90" />,
  },
  {
    id: "seo-optimization",
    title: "SEO & Digital Marketing",
    description: "Boost your online presence and drive organic traffic",
    icon: SearchIcon,
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Optimization"],
    price: "Starting at $999/month",
    popular: false,
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 opacity-90" />,
  },
  {
    id: "qa-testing",
    title: "QA & Testing",
    description: "Comprehensive testing to ensure your product works flawlessly",
    icon: ShieldCheckIcon,
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Audits"],
    price: "Starting at $1,499",
    popular: false,
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-500 to-sky-500 opacity-90" />,
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description: "Strategic guidance for your digital transformation journey",
    icon: HeadphonesIcon,
    features: ["Architecture Review", "Technology Stack", "Scalability Planning", "Team Training"],
    price: "Starting at $199/hour",
    popular: false,
    href: "/services",
    cta: "Learn more",
    className: "md:col-span-1 md:row-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800 opacity-90" />,
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, target audience, and project requirements through detailed consultations.",
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Our design team creates wireframes, mockups, and interactive prototypes to visualize your project before development.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build your solution using best practices, conduct thorough testing, and ensure everything works perfectly.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We deploy your project, provide training, and offer ongoing support to ensure your continued success.",
  },
]

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <SectionWrapper className="py-24">
        <div className="text-center">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg md:text-xl font-bold">
            Our Services
          </Badge>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-3xl mx-auto mb-6">
            From concept to deployment, we provide end-to-end digital services that help businesses thrive in the digital landscape.
          </p>
        </div>
      </SectionWrapper>

      {/* Services Bento Grid */}
      <SectionWrapper className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <BentoGrid className="md:grid-rows-3">
            {services.map((service) => (
              <BentoCard
                key={service.id}
                name={service.title}
                description={service.description}
                Icon={service.icon}
                href={service.href}
                cta={service.cta}
                popular={service.popular}
                className={service.className}
                background={service.background}
              />
            ))}
          </BentoGrid>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="py-24 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="text-center mb-16">
          <Heading className="mb-4">
            Our Process
          </Heading>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-text-secondary dark:text-dark-text-secondary">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center">
          <Heading className="mb-4 text-white">
            Ready to Start Your Project?
          </Heading>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" intent="secondary">
              Get Free Quote
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 border-white shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
