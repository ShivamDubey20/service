import { BaseHubImage } from "basehub/next-image";

import { Heading } from "../../../../common/heading";
import { Section } from "../../../../common/section-wrapper";
import { fragmentOn } from "basehub";
import { buttonFragment, headingFragment } from "../../../../lib/basehub/fragments";
import { TrackedButtonLink } from "../../../../components/tracked-button";
import { GeneralEvents } from "../../../../lib/basehub/fragments";

export const featuresGridFragment = fragmentOn("FeaturesGridComponent", {
  _analyticsKey: true,
  featuresGridList: {
    items: {
      _id: true,
      _title: true,
      description: true,
      icon: {
        alt: true,
        url: true,
      },
    },
  },
  heading: headingFragment,
  actions: buttonFragment,
});

type FeaturesGrid = fragmentOn.infer<typeof featuresGridFragment>;

const featureColors = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500", 
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-red-500",
  "from-indigo-500 to-blue-500",
  "from-pink-500 to-rose-500"
];

export function FeaturesGrid({
  heading,
  featuresGridList,
  actions,
  eventsKey,
}: FeaturesGrid & { eventsKey: GeneralEvents["ingestKey"] }) {
  return (
    <Section>
      <Heading {...heading}>
        <h4 className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
          {heading.title}
        </h4>
      </Heading>
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
        {featuresGridList.items.map(({ _id, _title, description, icon }, index) => {
          const colorClass = featureColors[index % featureColors.length];
          return (
            <article
              key={_id}
              className="group relative flex flex-col gap-4 rounded-xl border border-border p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:border-dark-border dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
              
              <figure className={`relative flex size-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <BaseHubImage
                  alt={icon.alt ?? _title}
                  className="dark:invert brightness-0 invert"
                  height={24}
                  src={icon.url}
                  width={24}
                />
              </figure>
              <div className="flex flex-col items-start gap-2 relative z-10">
                <h5 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
                  {_title}
                </h5>
                <p className="text-pretty text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-4 md:order-3 mt-8">
        {actions?.map((action) => (
          <TrackedButtonLink
            key={action._id}
            analyticsKey={eventsKey}
            href={action.href}
            intent={action.type}
            name="cta_click"
            size="lg"
          >
            {action.label}
          </TrackedButtonLink>
        ))}
      </div>
    </Section>
  );
}
