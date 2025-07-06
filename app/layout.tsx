import type React from "react"
import { BaseHubImage } from "basehub/next-image"
import Link from "next/link"
import "../styles/globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { basehub } from "basehub"
import { Toolbar } from "basehub/next-toolbar"
import { Providers } from "./providers"
import { headerFragment } from "../lib/basehub/fragments"
import { DarkLightImageAutoscale } from "../common/dark-light-image"
import { ButtonLink } from "../common/button"
import { isExternalLink } from "./_utils/links"
import { ThemeSwitcher } from "../components/theme-switcher"
import { DesktopMenu, MobileMenu } from "../components/navigation-menu"
import { themeFragment } from "../context/basehub-theme-provider"
import { PlaygroundSetupModal } from "../components/playground-notification"
import { Newsletter } from "./_sections/newsletter" // Declare the Newsletter variable
import { FooterDemo } from "../components/ui/footer-section"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  fallback: [
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif",
  ],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monaco", "monospace"],
})

export const dynamic = "force-static"
export const revalidate = 30

const envs: Record<string, { isValid: boolean; name: string; label: string }> = {}
const _vercel_url_env_name = "VERCEL_URL"
const isMainV0 = process.env[_vercel_url_env_name]?.startsWith("kzmq8iy6os99p4k348ko")

let allValid = true
const subscribeEnv = ({
  name,
  label,
  value,
}: {
  name: string
  label: string
  value: string | undefined
}) => {
  const isValid = !!value
  if (!isValid) {
    allValid = false
  }
  envs[name] = {
    isValid,
    name,
    label,
  }
}

// Custom logo data for PixelEdgeLabs
const pixelEdgeLogo = {
  dark: {
    url: "https://assets.basehub.com/your-logo-dark.png",
    alt: "PixelEdgeLabs",
    width: 150,
    height: 40,
    aspectRatio: "3.75",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  },
  light: {
    url: "https://assets.basehub.com/your-logo-light.png",
    alt: "PixelEdgeLabs",
    width: 150,
    height: 40,
    aspectRatio: "3.75",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=",
  },
}

// Custom footer data for PixelEdgeLabs
const pixelEdgeFooter = {
  newsletter: {
    title: "Stay Updated",
    subtitle: "Get the latest insights on web development, design trends, and digital innovation.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
  copyright: "© 2024 PixelEdgeLabs. All rights reserved. Crafted with ❤️ in Delhi NCR, India.",
  navbar: {
    items: [
      { _title: "Services", url: "/services" },
      { _title: "Portfolio", url: "/portfolio" },
      { _title: "About Us", url: "/about" },
      { _title: "Contact", url: "/contact" },
      { _title: "Privacy Policy", url: "/privacy" },
    ],
  },
  socialLinks: [
    {
      _title: "LinkedIn",
      url: "https://linkedin.com/company/pixeledgelabs",
      icon: { url: "/placeholder.svg?height=24&width=24" },
    },
    {
      _title: "Twitter",
      url: "https://twitter.com/pixeledgelabs",
      icon: { url: "/placeholder.svg?height=24&width=24" },
    },
    {
      _title: "GitHub",
      url: "https://github.com/pixeledgelabs",
      icon: { url: "/placeholder.svg?height=24&width=24" },
    },
    {
      _title: "Dribbble",
      url: "https://dribbble.com/pixeledgelabs",
      icon: { url: "/placeholder.svg?height=24&width=24" },
    },
  ],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [
    {
      site: { footer, settings, header },
    },
  ] = await Promise.all([
    basehub().query({
      site: {
        settings: {
          theme: themeFragment,
          logo: {
            dark: {
              url: true,
              alt: true,
              width: true,
              height: true,
              aspectRatio: true,
              blurDataURL: true,
            },
            light: {
              url: true,
              alt: true,
              width: true,
              height: true,
              aspectRatio: true,
              blurDataURL: true,
            },
          },
          showUseTemplate: true,
        },
        header: headerFragment,
        footer: {
          copyright: true,
          navbar: {
            items: {
              _title: true,
              url: true,
            },
          },
          socialLinks: {
            _title: true,
            icon: {
              url: true,
            },
            url: true,
          },
        },
      },
    }),
  ])

  let playgroundNotification = null

  // Use custom data for PixelEdgeLabs
  const customSettings = {
    ...settings,
    logo: pixelEdgeLogo,
  }

  const customFooter = pixelEdgeFooter

  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`min-h-svh max-w-[100vw] bg-surface-primary text-text-primary dark:bg-dark-surface-primary dark:text-dark-text-primary ${geistMono.variable} ${geist.variable} font-sans`}
      >
        <Providers theme={settings.theme}>
          {/* Header */}
          <header className="sticky left-0 top-0 z-[100] flex w-full flex-col border-b border-border bg-surface-primary dark:border-dark-border dark:bg-dark-surface-primary">
            <div className="flex h-[--header-height] bg-surface-primary dark:bg-dark-surface-primary">
              <div className="container mx-auto grid w-full grid-cols-header place-items-center content-center items-center px-6 *:first:justify-self-start">
                <ButtonLink unstyled className="flex items-center ring-offset-2" href="/">
                  <img
                    src="/navbar_img.png"
                    alt="PixelEdgeLabs Logo"
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain mr-3"
                  />
                  <span className="text-black dark:text-white font-bold text-lg md:text-xl">PixelEdgeLabs</span>
                </ButtonLink>
                <DesktopMenu {...header} />
                <MobileMenu {...header} />
              </div>
            </div>
          </header>
          <main className="min-h-[calc(100svh-var(--header-height))]">{children}</main>
          <FooterDemo />
        </Providers>
      </body>
    </html>
  )
}

export const metadata = {
  title: "PixelEdgeLabs - Digital Solutions & Web Development",
  description:
    "Empowering Digital Dreams with Cutting-Edge Web & App Solutions. From startup ideas to enterprise-grade apps — we design, develop, and deliver excellence.",
  generator: "v0.dev",
}
