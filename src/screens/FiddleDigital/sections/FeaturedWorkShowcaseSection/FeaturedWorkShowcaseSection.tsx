import { Card, CardContent } from "../../../../components/ui/card";

const featuredWork = {
  title: "StringTune",
  description:
    "StringTune is a modular JS library for quick, flexible use of animations and hooks – combine, tweak, or craft your own effects.",
};

export const FeaturedWorkShowcaseSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="featured-work-title"
      className="relative min-h-[1143px] w-full overflow-hidden bg-[#101214] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-198px] h-[1143px] bg-[url('/text.png')] bg-cover bg-center"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1905px] pt-[322px]">
        <Card className="ml-[29.08%] w-[min(797px,calc(100%-2rem))] border-0 bg-transparent p-0 shadow-none">
          <CardContent className="p-0">
            <figure>
              <div
                role="img"
                aria-label={featuredWork.title}
                className="aspect-[797/498] w-full bg-[url('../video-4.png')] bg-cover bg-center"
              />
              <figcaption
                id="featured-work-title"
                className="mt-6 [font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[34.9px] tracking-[-0.64px]"
              >
                {featuredWork.title}
              </figcaption>
            </figure>
          </CardContent>
        </Card>
        <div className="ml-[calc(64.15%-24px)] mt-[156px] grid w-[420px] max-w-[calc(100%-1rem)] grid-cols-[24px_minmax(0,396px)] items-start">
          <span
            aria-hidden="true"
            className="[font-family:'fdsi-Regular',Helvetica] text-2xl font-normal leading-6"
          >
            
          </span>
          <p className="[font-family:'KHTeka-Regular',Helvetica] text-lg font-normal leading-[21.6px]">
            {featuredWork.description}
          </p>
        </div>
      </div>
    </section>
  );
};
