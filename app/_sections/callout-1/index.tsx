import clsx from "clsx";

import { Section } from "../../../common/section-wrapper";
import { fragmentOn } from "basehub";

import s from "./callout-1.module.css";
import { TrackedButtonLink } from "../../../components/tracked-button";
import { buttonFragment } from "../../../lib/basehub/fragments";
import { GeneralEvents } from "../../../lib/basehub/fragments";

export const calloutFragment = fragmentOn("CalloutComponent", {
  _analyticsKey: true,
  title: true,
  subtitle: true,
  actions: buttonFragment,
});
type Callout = fragmentOn.infer<typeof calloutFragment>;

export function Callout(callout: Callout & { eventsKey: GeneralEvents["ingestKey"] }) {
  return (
    <Section>
      <article className="relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-border bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950/20 dark:to-pink-950/20 p-8 dark:border-dark-border hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all duration-300">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-pink-500/5 rounded-xl" />
        
        {/* Animated gradient elements */}
        <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl animate-pulse delay-1000" />
        
        {/* Lines and bg  */}
        <div
          className={clsx(
            "bg-gradient-to-r absolute left-0 top-10 h-px w-full from-transparent via-blue-500/40 to-transparent dark:from-transparent dark:via-purple-500/40 dark:to-transparent",
            s.line,
          )}
        />
        <div
          className={clsx(
            "bg-gradient-to-r absolute bottom-[72px] left-0 h-px w-full from-transparent via-purple-500/40 to-transparent dark:from-transparent dark:via-pink-500/40 dark:to-transparent",
            s.line,
          )}
        />
        <div
          className={clsx(
            "bg-gradient-to-r absolute bottom-7 left-0 h-px w-full from-transparent via-pink-500/40 to-transparent dark:from-transparent dark:via-blue-500/40 dark:to-transparent",
            s.line,
          )}
        />
        
        {/* -------- */}
        <div className="relative z-20 flex flex-col items-center gap-4 text-center">
          <h4 className="text-center text-3xl font-medium tracking-tighter bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent sm:max-w-full sm:px-0 md:text-4xl">
            {callout.title}
          </h4>
          <p className="text-lg text-text-secondary dark:text-dark-text-secondary md:text-xl max-w-2xl">
            {callout.subtitle}
          </p>
        </div>
        <div className="relative z-10 flex items-center gap-4">
          {callout.actions?.map((action) => (
            <TrackedButtonLink
              key={action._id}
              analyticsKey={callout.eventsKey}
              href={action.href}
              intent={action.type}
              name="secondary_cta_click"
              size="lg"
            >
              {action.label}
            </TrackedButtonLink>
          ))}
        </div>
      </article>
    </Section>
  );
}
