import { Card, CardContent } from "../../../../components/ui/card";

const capabilityDescriptions = [
  "Designers receive high-impact visual representation that commands attention. Seasons pass, but iconic imagery remains timeless.",
  "Backed by years of dedicated runway and editorial experience, ensuring your collection never goes unnoticed.",
  "Collaborating with top-tier African designers, stylists, and photographers allows us to craft the perfect high-fashion campaign.",
];

const responsibilityWords = [
  "UNCOMPROMISING",
  "VISUAL",
  "EXCELLENCE.",
];

export const AgencyCapabilitiesSection = (): JSX.Element => {
  return (
    <section className="flex w-full flex-col items-start overflow-hidden pb-[14.5px] pt-[101.01px] text-[#101214]">
      <div className="w-full px-[19.2px]">
        <div className="mx-auto flex w-full max-w-[1866.62px] flex-col">
          <header className="mx-auto w-full max-w-[1703px]">
            <h2 className="[font-family:'KHTeka-Regular',Helvetica] text-center text-[clamp(34px,4.5vw,84.2px)] font-normal tracking-[-1.68px] leading-[0.973]">
              Together with you, we elevate the narrative. Timeless, high-fashion,
              impactful.
            </h2>
          </header>
          <div className="mx-auto mt-[104px] w-full max-w-[1065px]">
            <div className="grid grid-cols-[minmax(155px,228px)_minmax(0,1fr)] items-end gap-x-0">
              <Card className="relative -mb-[62px] h-[155px] w-[155px] self-start overflow-hidden rounded-full border-0 bg-white shadow-none">
                <CardContent className="h-full w-full p-0">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 [background:url(..//figure-2.webp)_50%_50%_/_cover]" />
                    <div className="absolute inset-0 rounded-full [background:url(..//video-2.webp)_50%_50%_/_cover]" />
                  </div>
                </CardContent>
              </Card>
              <p className="mb-[10px] grid w-fit grid-cols-1 [font-family:'KHTekaMono-Regular',Helvetica] text-[11.3px] font-normal leading-[13px] uppercase">
                {responsibilityWords.map((word) => (
                  <span key={word} className="whitespace-nowrap">
                    {word}
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-[34px] [font-family:'KHTeka-Regular',Helvetica] text-[clamp(31px,2.54vw,47.4px)] font-normal tracking-[-0.95px] leading-[1.08]">
              <p className="ml-0 md:ml-[228px]">
                Striking runway presence, world-class
              </p>
              <p className="mt-[7px]">
                editorial storytelling, and authentic cultural identity tailored to make brands shine.
              </p>
            </div>
            <ul className="mt-[122px] grid list-none grid-cols-1 gap-8 p-0 md:grid-cols-3 md:gap-[57.3px]">
              {capabilityDescriptions.map((description) => (
                <li
                  key={description}
                  className="[font-family:'KHTeka-Regular',Helvetica] text-2xl font-normal leading-[28.8px]"
                >
                  {description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-[134.65px] h-px w-full" aria-hidden="true" />
    </section>
  );
};
