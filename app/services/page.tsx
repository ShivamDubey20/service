import type { Metadata } from "next"
import { PageView } from "../../components/page-view"
import { Button } from "../../common/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { SectionWrapper } from "../../common/section-wrapper"
import HeroBackground from "../../components/ui/hero-background"
import { 
  CodeIcon, 
  SmartphoneIcon, 
  PaletteIcon, 
  SearchIcon, 
  ShieldCheckIcon, 
  HeadphonesIcon,
  CheckCircleIcon,
  ClockIcon,
  UsersIcon,
  ZapIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services - PixelEdgeLabs",
  description:
    "Comprehensive digital solutions including web development, mobile apps, UI/UX design, branding, QA testing, and tech consulting services.",
}

const services = [
  {
    icon: CodeIcon,
    title: "Web Development",
    description: "Modern, scalable web applications built with cutting-edge technologies",
    features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"],
    price: "Starting at $2,999",
    popular: false,
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: SmartphoneIcon,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"],
    price: "Starting at $4,999",
    popular: true,
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: PaletteIcon,
    title: "UI/UX Design",
    description: "User-centered design that converts visitors into customers",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    price: "Starting at $1,999",
    popular: false,
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: SearchIcon,
    title: "SEO & Digital Marketing",
    description: "Boost your online presence and drive organic traffic",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Optimization"],
    price: "Starting at $999/month",
    popular: false,
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: ShieldCheckIcon,
    title: "QA & Testing",
    description: "Comprehensive testing to ensure your product works flawlessly",
    features: ["Manual Testing", "Automated Testing", "Performance Testing", "Security Audits"],
    price: "Starting at $1,499",
    popular: false,
    color: "from-indigo-500 to-blue-600"
  },
  {
    icon: HeadphonesIcon,
    title: "Tech Consulting",
    description: "Strategic guidance for your digital transformation journey",
    features: ["Architecture Review", "Technology Stack", "Scalability Planning", "Team Training"],
    price: "Starting at $199/hour",
    popular: false,
    color: "from-slate-600 to-gray-700"
  }
]

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements.",
    icon: UsersIcon
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description: "Our design team creates wireframes, mockups, and interactive prototypes.",
    icon: PaletteIcon
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using best practices and conduct thorough testing.",
    icon: CodeIcon
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and offer ongoing support for continued success.",
    icon: ZapIcon
  }
]

export default function ServicesPage() {
  return (
    <>
      <PageView ingestKey="services-page" />
      
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center max-w-4xl mx-auto pt-24">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg font-bold">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end digital services that help businesses thrive in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" intent="primary">
              Get Free Consultation
            </Button>
            <Button size="lg" intent="outline">
              View Our Process
            </Button>
          </div>
        </div>
      </HeroBackground>

      {/* Services Grid */}
      <SectionWrapper className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Choose from our comprehensive range of digital services tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  {service.popular && (
                    <Badge className="w-fit bg-gradient-to-r from-orange-400 to-red-400 text-white">
                      Most Popular
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-text-secondary dark:text-dark-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-text-primary">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process Section */}
      <SectionWrapper className="py-24 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <item.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-text-secondary dark:text-dark-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. Get a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border-white shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Free Quote
            </Button>
            <Button size="lg" intent="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Call
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
