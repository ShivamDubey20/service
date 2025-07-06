import { SectionWrapper } from "../../../common/section-wrapper"
import { Heading } from "../../../common/heading"
import { Button } from "../../../common/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import {
  CheckIcon,
  UsersIcon,
  TrophyIcon,
  ClockIcon,
  HeartIcon,
  LightbulbIcon,
  ShieldIcon,
  RocketIcon,
} from "lucide-react"

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder-user.jpg",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
    skills: ["React", "Node.js", "AWS", "Leadership"],
  },
  {
    name: "Sarah Chen",
    role: "Lead Designer",
    image: "/placeholder-user.jpg",
    bio: "UI/UX designer passionate about creating intuitive and beautiful user experiences.",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
  },
  {
    name: "Mike Rodriguez",
    role: "Senior Developer",
    image: "/placeholder-user.jpg",
    bio: "Mobile app specialist with expertise in React Native and Flutter development.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    image: "/placeholder-user.jpg",
    bio: "Agile project manager ensuring smooth delivery and client satisfaction.",
    skills: ["Agile", "Scrum", "Client Relations", "Quality Assurance"],
  },
]

const values = [
  {
    icon: HeartIcon,
    title: "Client-Centric",
    description:
      "We put our clients' success at the heart of everything we do, building long-term partnerships based on trust and results.",
  },
  {
    icon: LightbulbIcon,
    title: "Innovation",
    description: "We stay ahead of technology trends and continuously explore new ways to solve complex problems.",
  },
  {
    icon: ShieldIcon,
    title: "Quality",
    description: "We maintain the highest standards in code quality, design, and project delivery.",
  },
  {
    icon: RocketIcon,
    title: "Growth",
    description: "We're committed to helping our clients grow their businesses through digital transformation.",
  },
]

const stats = [
  { icon: UsersIcon, value: "50+", label: "Happy Clients" },
  { icon: TrophyIcon, value: "100+", label: "Projects Completed" },
  { icon: ClockIcon, value: "5+", label: "Years Experience" },
  { icon: CheckIcon, value: "99%", label: "Client Satisfaction" },
]

const technologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Angular",
  "Node.js",
  "Python",
  "Django",
  "Laravel",
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "AWS",
  "Google Cloud",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "REST APIs",
]

export function About() {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="py-24 bg-surface-secondary dark:bg-dark-surface-secondary">
        <div className="text-center mb-16">
          <Heading className="mb-4">
            Our Values
          </Heading>
          <p className="text-xl text-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-text-secondary dark:text-dark-text-secondary">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </SectionWrapper>
    </div>
  )
}
