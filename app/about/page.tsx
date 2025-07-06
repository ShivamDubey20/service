import type { Metadata } from "next"
import { PageView } from "../../components/page-view"
import { Button } from "../../common/button"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { SectionWrapper } from "../../common/section-wrapper"
import HeroBackground from "../../components/ui/hero-background"
import { 
  UsersIcon,
  TargetIcon,
  HeartIcon,
  LightbulbIcon,
  AwardIcon,
  GlobeIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
  TrendingUpIcon
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - PixelEdgeLabs",
  description:
    "Learn about PixelEdgeLabs - a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into exceptional digital experiences.",
}

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    image: "/placeholder-user.jpg",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
    skills: ["React", "Node.js", "AWS", "Leadership"],
    linkedin: "#",
    github: "#"
  },
  {
    name: "Priya Patel",
    role: "Lead Designer",
    image: "/placeholder-user.jpg",
    bio: "UI/UX designer passionate about creating intuitive and beautiful user experiences.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    linkedin: "#",
    github: "#"
  },
  {
    name: "Amit Kumar",
    role: "Senior Developer",
    image: "/placeholder-user.jpg",
    bio: "Mobile app specialist with expertise in React Native and native iOS/Android development.",
    skills: ["React Native", "iOS", "Android", "Firebase"],
    linkedin: "#",
    github: "#"
  },
  {
    name: "Neha Singh",
    role: "Digital Marketing Lead",
    image: "/placeholder-user.jpg",
    bio: "SEO and digital marketing expert helping businesses grow their online presence.",
    skills: ["SEO", "Google Analytics", "Content Strategy", "PPC"],
    linkedin: "#",
    github: "#"
  }
]

const values = [
  {
    icon: HeartIcon,
    title: "Passion for Excellence",
    description: "We're passionate about creating exceptional digital experiences that exceed expectations."
  },
  {
    icon: TargetIcon,
    title: "Client-Focused",
    description: "Your success is our success. We work closely with you to understand your goals and deliver results."
  },
  {
    icon: LightbulbIcon,
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies and creative solutions."
  },
  {
    icon: UsersIcon,
    title: "Collaboration",
    description: "We believe in the power of teamwork and transparent communication throughout the process."
  }
]

const achievements = [
  {
    icon: AwardIcon,
    title: "150+ Projects",
    description: "Successfully delivered projects across various industries"
  },
  {
    icon: UsersIcon,
    title: "80+ Clients",
    description: "Happy clients who trust us with their digital needs"
  },
  {
    icon: StarIcon,
    title: "98% Satisfaction",
    description: "Client satisfaction rate based on our quality delivery"
  },
  {
    icon: GlobeIcon,
    title: "5+ Years",
    description: "Years of experience in digital transformation"
  }
]

const timeline = [
  {
    year: "2019",
    title: "Company Founded",
    description: "PixelEdgeLabs was founded with a vision to create exceptional digital experiences."
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully delivered our first enterprise-level web application."
  },
  {
    year: "2021",
    title: "Team Expansion",
    description: "Grew our team to 10+ talented developers and designers."
  },
  {
    year: "2022",
    title: "Mobile Division",
    description: "Launched our mobile app development division."
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Started offering AI-powered solutions and chatbots."
  },
  {
    year: "2024",
    title: "Global Reach",
    description: "Expanded our services to international clients across 5 countries."
  }
]

export default function AboutPage() {
  return (
    <>
      <PageView ingestKey="about-page" />
      
      {/* Hero Section */}
      <HeroBackground>
        <div className="text-center max-w-4xl mx-auto pt-24">
          <Badge variant="outline" className="mb-6 px-6 py-3 text-lg font-bold">
            About Us
          </Badge>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Crafting Digital Excellence
          </h1>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary mb-8 max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and digital strategists dedicated to transforming ideas into exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" intent="primary">
              Meet Our Team
            </Button>
            <Button size="lg" intent="outline">
              Our Story
            </Button>
          </div>
        </div>
      </HeroBackground>

      {/* Story Section */}
      <SectionWrapper className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-6">
                Founded in 2019, PixelEdgeLabs began as a small team of passionate developers with a big dream: to create digital solutions that make a difference.
              </p>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-6">
                Today, we've grown into a full-service digital agency serving clients across the globe. Our journey has been marked by continuous learning, innovation, and an unwavering commitment to excellence.
              </p>
              <p className="text-lg text-text-secondary dark:text-dark-text-secondary mb-8">
                We believe that great technology should be accessible, intuitive, and impactful. That's why we focus on creating solutions that not only meet technical requirements but also deliver real business value.
              </p>
              <Button size="lg" intent="outline">
                Learn More About Our Journey
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-2xl flex items-center justify-center">
                <UsersIcon className="h-32 w-32 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                <AwardIcon className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values Section */}
      <SectionWrapper className="py-24 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              The talented individuals behind our success, each bringing unique expertise and passion to every project
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[{
              name: "Shivam Dubey",
              role: "Founder and CTO",
              image: "/placeholder-user.jpg",
              bio: "Visionary technologist and co-founder, leading innovation and engineering excellence.",
              skills: ["Leadership", "Full Stack", "Cloud", "AI"],
            }, {
              name: "Robin Bhati",
              role: "Founder and CTO",
              image: "/placeholder-user.jpg",
              bio: "Co-founder and technology strategist, passionate about scalable solutions and product growth.",
              skills: ["Strategy", "Backend", "DevOps", "Product"],
            }].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg p-4 sm:p-6">
                <CardHeader className="pb-4 flex flex-col items-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UsersIcon className="h-12 w-12 text-gray-500" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-1">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-purple-600 dark:text-purple-400">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-text-secondary dark:text-dark-text-secondary mb-4 text-sm sm:text-base">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs sm:text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Achievements Section */}
      <SectionWrapper className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
              Numbers that tell the story of our growth and success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold text-text-primary mb-2">{achievement.title}</div>
                <div className="text-text-secondary dark:text-dark-text-secondary">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="py-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and see how our team can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 border-white shadow-lg hover:shadow-xl transform hover:scale-105">
              Start a Project
            </Button>
            <Button size="lg" intent="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Get in Touch
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
