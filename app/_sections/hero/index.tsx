import { fragmentOn } from "basehub"
import { AvatarsGroup } from "../../../common/avatars-group"
import { Avatar } from "../../../common/avatar"
import { avatarFragment } from "../../../lib/basehub/fragments"
import { TrackedButtonLink } from "../../../components/tracked-button"
import type { GeneralEvents } from "../../../lib/basehub/fragments"

export const heroFragment = fragmentOn("HeroComponent", {
  _analyticsKey: true,
  customerSatisfactionBanner: {
    text: true,
    avatars: {
      items: {
        _id: true,
        avatar: avatarFragment,
      },
    },
  },
  title: true,
  subtitle: true,
  actions: {
    _id: true,
    href: true,
    label: true,
    type: true,
  },
})
type Hero = fragmentOn.infer<typeof heroFragment>

export function Hero(hero: Hero & { eventsKey: GeneralEvents["ingestKey"] }) {
  return (
    <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border dark:border-dark-border">
        {/* Decorations */}
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-border dark:border-dark-border" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      
      {/* Enhanced Background Effects */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-pink-500/20 blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-gradient-to-br from-orange-400/20 to-red-400/10 blur-[100px] md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/10 blur-[100px] md:block" />
      
      {/* Additional animated gradient elements */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 flex flex-col divide-y divide-border pt-[35px] dark:divide-dark-border">
        <div className="flex flex-col items-center justify-end">
          <div className="flex items-center gap-2 !border !border-b-0 border-border px-4 py-2 dark:border-dark-border bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm dark:from-gray-900/80 dark:to-gray-800/80 rounded-t-lg">
            <AvatarsGroup>
              {hero.customerSatisfactionBanner.avatars.items.map(({ avatar, _id }) => (
                <Avatar priority {...avatar} key={_id} />
              ))}
            </AvatarsGroup>
            <p className="text-sm tracking-tight text-text-tertiary dark:text-dark-text-tertiary">
              Trusted by 50+ clients worldwide
            </p>
          </div>
        </div>
        <div>
          <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
            <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-text-primary dark:text-dark-text-primary md:tracking-[-2.16px] bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
              Empowering Digital Dreams with Cutting-Edge Web & App Solutions
            </h1>
            <h2 className="text-md max-w-2xl text-pretty text-center text-text-tertiary dark:text-dark-text-tertiary md:text-lg">
              From startup ideas to enterprise-grade apps — we design, develop, and deliver excellence.
            </h2>
          </div>
        </div>
        <div className="flex items-start justify-center px-8 sm:px-24">
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start gap-4 md:flex-row md:!max-w-[500px]">
            <TrackedButtonLink
              analyticsKey={hero.eventsKey}
              className="!h-14 w-full flex-col items-center justify-center rounded-xl !text-base font-medium bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              href="/contact"
              intent="primary"
              name="cta_click"
            >
              Let's Build Together
            </TrackedButtonLink>
            <TrackedButtonLink
              analyticsKey={hero.eventsKey}
              className="!h-14 w-full flex-col items-center justify-center rounded-xl !text-base font-medium !bg-transparent border-2 border-gradient-to-r from-orange-400 to-red-400 hover:!bg-gradient-to-r hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-950/20 dark:hover:to-red-950/20 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transform hover:scale-105 transition-all duration-300"
              href="/portfolio"
              intent="secondary"
              name="cta_click"
            >
              View Our Work
            </TrackedButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
