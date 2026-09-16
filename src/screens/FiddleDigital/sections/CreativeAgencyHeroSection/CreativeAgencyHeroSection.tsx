import { ArrowDown } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const awards = [
  {
    title: "Featured Influencer",
    subtitle: "2025, 2026",
    organization: "FASHION GHANA",
    figure: "/images/logo-1.webp",
  },
  {
    title: "Official Runway Model",
    subtitle: "ASFW 2025",
    organization: "AFRICA SOURCING & FASHION WEEK",
    figure: "/images/logo-2.webp",
  },
  {
    title: "Elite Roster Representation",
    subtitle: "International Portfolio",
    organization: "THE WOLVES MODEL AGENCY (MILAN)",
    figure: "/images/logo-3.webp",
  },
];

const galleryImages = [
  {
    src: "..//image--fiddle-digital-design-agency--1.webp",
    alt: "Fiddle Digital design agency project",
  },
  {
    src: "..//image--fiddle-digital-design-agency--2.webp",
    alt: "Fiddle Digital design agency project",
  },
];

export const CreativeAgencyHeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden bg-[#c8c2cf] text-[#101214]">
      <div className="px-[19.2px] pb-[47.62px]">
        <div className="grid min-h-[653.75px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-[10px]">
          <div className="min-h-[500px] lg:min-h-0" />
          <div className="relative pt-[58px]">
            <div className="relative w-full max-w-[1065px] overflow-hidden rounded-t-[20px] rounded-br-[20px] rounded-bl-none bg-[#c8c2cf]">
              <div
                className="h-[596px] w-full max-w-[1065px] overflow-hidden rounded-t-[20px] rounded-br-[20px] rounded-bl-none bg-cover bg-center"
                style={{ backgroundImage: "url(/images/hero-image.webp)" }}
              />
              <div className="absolute bottom-0 left-0 h-[57px] w-[57px] bg-[#c8c2cf]" />
            </div>
            <div className="mr-[57px] ml-auto flex h-[18px] w-fit items-center justify-center rounded-[3.6px] bg-[#101214] px-[6px]">
              <span className="[font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-none text-white select-none">
                RUNWAY-READY
              </span>
            </div>
          </div>
        </div>
        <div className="absolute left-[82px] top-[321px] h-[416px] w-[416px] pointer-events-none">
          <img
            className="h-full w-full object-contain"
            alt="Arrow"
            src="/icons/arrow-hero.svg"
          />
        </div>
      </div>
      <div className="px-[19.2px] pt-[75.78px]">
        <div className="grid gap-3 border-b border-[#101214] pb-[4px] lg:grid-cols-[1.5fr_1fr_1fr]">
          <p className="[font-family:'KHTeka-Regular',Helvetica] text-2xl leading-[28.8px]">
            Heritage–Driven Runway Model
          </p>
          <p className="[font-family:'KHTeka-Regular',Helvetica] pt-1.5 text-lg leading-[21.6px]">
            Runway direction and high-fashion modeling services.
          </p>
          <p className="[font-family:'KHTeka-Regular',Helvetica] pt-1.5 text-lg leading-[21.6px]">
            Ethiopian roots. African base. Global focus.
          </p>
        </div>
        <p className="[font-family:'KHTekaMono-Regular',Helvetica] py-2.5 text-[13.5px] leading-[16.2px]">
          ©2017—2026
        </p>
      </div>
      <div className="flex justify-center px-[19.2px] pt-[101.01px]">
        <div className="relative w-fit max-w-full">
          <div className="[font-family:'KH_Teka-Regular',Helvetica] text-[clamp(36px,3.8vw,56.8px)] leading-[1.08] tracking-[-1.14px]">
            <div className="flex items-baseline justify-end whitespace-nowrap">
              <span className="relative inline-block">
                A globally-recognized
                <sup className="absolute -top-[10px] right-[-14px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] tracking-normal text-[#101214]/60">
                  (8+)
                </sup>
              </span>
              <span className="ml-8">fashion force</span>
            </div>
            <div className="flex items-center whitespace-nowrap text-left">
              <span>committed to</span>
              <img
                className="mx-3 inline-block h-[36px] w-[36px] shrink-0 align-middle"
                alt="Eye icon"
                src="/icons/eye.svg"
              />
              <span>exceptional runway presence</span>
            </div>
            <div className="flex items-center whitespace-nowrap text-left">
              <span>and the highest visual</span>
              <img
                className="mx-3 inline-block h-[34px] w-[34px] shrink-0 align-middle"
                alt="Setting icon"
                src="/icons/setting.svg"
              />
              <span>standards.</span>
            </div>
          </div>
          <div className="mt-[72px] flex items-center justify-between">
            <Button
              type="button"
              variant="secondary"
              className="h-auto rounded-[20px] bg-white px-7 py-[18px] [font-family:'KHTeka-Regular',Helvetica] text-lg font-normal leading-[21.6px] text-[#101214] hover:bg-white"
            >
              Get in touch
            </Button>
            <ArrowDown className="h-9 w-9 stroke-[1.5] text-[#101214]" />
          </div>
        </div>
      </div>
      <div className="px-[19.2px] pb-[4.8px] pt-[75.78px]">
        {/* Top 3 award cards */}
        <div className="grid gap-[4.8px] lg:grid-cols-3">
          {awards.map((award) => (
            <Card
              key={award.organization}
              className="h-[180px] overflow-hidden rounded-[20px] border-0 bg-[#e6dfe4] shadow-none"
            >
              <CardContent className="relative h-full p-[9px]">
                <h2 className="[font-family:'KHTeka-Regular',Helvetica] text-2xl font-normal leading-[28.8px]">
                  {award.title}
                </h2>
                <p className="[font-family:'KHTeka-Regular',Helvetica] text-2xl leading-[28.8px] text-[#a399a8]">
                  {award.subtitle}
                </p>
                <p className="absolute bottom-[10px] left-[9px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] leading-[13.5px]">
                  {award.organization}
                </p>
                <img
                  className="absolute bottom-0 right-0 h-[77px] w-[77px] rounded-br-[20px] object-cover"
                  alt="Figure"
                  src={award.figure}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Images below the 3 award cards */}
        <div className="mt-[4.8px] grid grid-cols-[619fr_307.09fr_307.09fr_619fr] gap-[4.8px]">
          {/* Col 1: Outer image 1 — W:619, H:303, r:20 */}
          <div className="h-[303px] overflow-hidden rounded-[20px]">
            <img
              className="h-full w-full object-cover"
              alt="Fashion showcase 1"
              src="/images/1.webp"
            />
          </div>
          {/* Col 2: Center image 2 — W:307.09, H:303, r:20 */}
          <div className="h-[303px] overflow-hidden rounded-[20px]">
            <img
              className="h-full w-full object-cover"
              alt="Fashion showcase 2"
              src="/images/2.webp"
            />
          </div>
          {/* Col 3: Center image 3 — W:307.09, H:303, r:20 */}
          <div className="h-[303px] overflow-hidden rounded-[20px]">
            <img
              className="h-full w-full object-cover"
              alt="Fashion showcase 3"
              src="/images/3.webp"
            />
          </div>
          {/* Col 4: Outer image 4 — W:619, H:303, r:20 */}
          <div className="h-[303px] overflow-hidden rounded-[20px]">
            <img
              className="h-full w-full object-cover"
              alt="Fashion showcase 4"
              src="/images/4.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
