import type { Metadata } from "next"
import { PageView } from "../../components/page-view"
import { Button } from "../../common/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { SectionWrapper } from "../../common/section-wrapper"
import { Input } from "../../common/input"
import { Textarea } from "../../components/ui/textarea"
import { 
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  MessageSquareIcon,
  SendIcon,
  CheckCircleIcon,
  GlobeIcon,
  UsersIcon,
  CalendarIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - PixelEdgeLabs",
  description:
    "Get in touch with PixelEdgeLabs for your next digital project. We're here to help bring your ideas to life with cutting-edge solutions.",
}

const contactMethods = [
  {
    icon: MailIcon,
    title: "Email Us",
    description: "Send us a detailed message about your project",
    value: "hello@pixeledgelabs.com",
    action: "Send Email",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: PhoneIcon,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+91 98765 43210",
    action: "Call Now",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: MessageSquareIcon,
    title: "WhatsApp",
    description: "Quick chat for urgent inquiries",
    value: "+91 98765 43210",
    action: "Start Chat",
    color: "from-green-400 to-green-600"
  }
]

const officeLocations = [
  {
    city: "Delhi NCR",
    address: "Gurgaon, Haryana, India",
    type: "Headquarters",
    features: ["Full Team", "Meeting Rooms", "24/7 Support"],
    color: "from-purple-500 to-pink-500"
  },
  {
    city: "Mumbai",
    address: "Bandra West, Maharashtra, India",
    type: "Branch Office",
    features: ["Sales Team", "Client Meetings", "Local Support"],
    color: "from-orange-500 to-red-500"
  },
  {
    city: "Bangalore",
    address: "Koramangala, Karnataka, India",
    type: "Development Center",
    features: ["Tech Team", "Innovation Lab", "Training Center"],
    color: "from-blue-500 to-indigo-500"
  }
]

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support packages including maintenance, updates, and 24/7 monitoring. We can customize a support plan that fits your needs and budget."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We work with modern technologies including React, Next.js, Node.js, React Native, Flutter, and various cloud platforms. We choose the best tech stack for each project's specific requirements."
  },
  {
    question: "How do you handle project communication?",
    answer: "We use tools like Slack, Zoom, and project management platforms to keep you updated. You'll have a dedicated project manager and regular check-ins throughout the development process."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing including fixed-price projects, time and materials, and retainer agreements. Pricing depends on project scope, complexity, and timeline."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We have experience working with clients from the US, UK, Australia, and other countries. We accommodate different time zones and provide clear communication channels."
  }
]

const workingHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM IST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
  { day: "Sunday", hours: "Emergency Support Only" }
]

export default function ContactPage() {
  return (
    <>
      <PageView ingestKey="contact-page" />
      
      {/* Hero Section */}
      <SectionWrapper className="py-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg font-bold">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Let's Build Something Amazing
          </h1>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            Ready to start your next digital project? We're here to help bring your ideas to life with cutting-edge solutions and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" intent="primary">
              Start Your Project
            </Button>
            <Button size="lg" intent="outline">
              Schedule a Call
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Methods */}
      <SectionWrapper className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Reach Us</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              let valueColor = "text-blue-600";
              if (method.title === "Call Us" || method.title === "WhatsApp") valueColor = "text-green-600";
              return (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                    <CardDescription className="text-base">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-lg font-semibold mb-4 break-all ${valueColor}`}>{method.value}</p>
                    <Button size="lg" intent="outline" className="w-full">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form Only, Centered */}
      <SectionWrapper className="py-16 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
          <p className="text-text-secondary dark:text-dark-text-secondary mb-8 text-center">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name</label>
                <Input placeholder="Enter your first name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name</label>
                <Input placeholder="Enter your last name" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <Input placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <Input placeholder="Enter your company name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Type</label>
              <select className="w-full px-4 py-3 border border-border rounded-lg bg-surface-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Select project type</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
                <option>Consulting</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Description</label>
              <Textarea 
                placeholder="Tell us about your project requirements, goals, and timeline..."
                rows={4}
              />
            </div>
            <Button size="lg" intent="primary" className="w-full">
              <SendIcon className="h-5 w-5 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper className="py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Get answers to common questions about working with us
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-text-primary">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait to bring your digital vision to life. Contact us today and let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 border-white shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Your Project
            </Button>
            <Button size="lg" intent="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
