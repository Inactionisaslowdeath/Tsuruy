import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const awards = [
  {
    title: "Official (2) Webby Winner",
    subtitle: "2025, 2026",
    organization: "THE WEBBY AWARDS",
    figure: "/figure-4.svg",
  },
  {
    title: "'Studio of the Year'",
    subtitle: "Nominee 2025",
    organization: "AWWWARDS",
    figure: "/figure-6.svg",
  },
  {
    title: "'Studio of the Year'",
    subtitle: "Nominee 2025",
    organization: "CSS DESIGN AWARDS",
    figure: "/figure-5.svg",
  },
];

const galleryImages = [
  {
    src: "..//image--fiddle-digital-design-agency--1.png",
    alt: "Fiddle Digital design agency project",
  },
  {
    src: "..//image--fiddle-digital-design-agency--2.png",
    alt: "Fiddle Digital design agency project",
  },
];

export const CreativeAgencyHeroSection = (): JSX.Element => {
  return (
    <section className="w-full overflow-hidden bg-[#c8c2cf] text-[#101214]">
      <div className="px-[19.2px] pb-[47.62px]">
        <div className="grid min-h-[653.75px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-[10px]">
          <div className="flex min-h-[500px] items-end justify-center pt-[286px] lg:min-h-0 lg:pb-[-0px]">
            <img
              className="h-auto w-full max-w-[416px] object-contain"
              alt="Download"
              src="/download--6--1.png"
            />
          </div>
          <div className="relative pt-[58px]">
            <div className="relative w-full max-w-[1065px] overflow-hidden rounded-[20px] bg-[#c8c2cf]">
              <div
                className="h-[596px] w-full max-w-[1065px] overflow-hidden rounded-[20px] bg-cover bg-center"
                style={{ backgroundImage: "url(/images/hero-image.png)" }}
              />
              <div className="absolute bottom-0 left-0 h-[57px] w-[57px] bg-[#c8c2cf]" />
            </div>
            <div className="mr-[57px] ml-auto flex w-fit items-center rounded-[3.6px] bg-[#101214] px-[4.8px] py-[2.4px]">
              <span
                className="mr-[2.4px] block h-[14.39px] w-[14.39px]"
                aria-hidden="true"
              />
              <span className="[font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] leading-[13.5px] text-white">
                HUMAN-FIRST
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[19.2px] pt-[75.78px]">
        <div className="grid gap-3 border-b border-[#101214] pb-[4px] lg:grid-cols-[1.5fr_1fr_1fr]">
          <p className="[font-family:'KHTeka-Regular',Helvetica] text-2xl leading-[28.8px]">
            Design–Led Engineering Digital Agency
          </p>
          <p className="[font-family:'KHTeka-Regular',Helvetica] pt-1.5 text-lg leading-[21.6px]">
            Web development and design services.
          </p>
          <p className="[font-family:'KHTeka-Regular',Helvetica] pt-1.5 text-lg leading-[21.6px]">
            Ukrainian roots. European base. Global focus.
          </p>
        </div>
        <p className="[font-family:'KHTekaMono-Regular',Helvetica] py-2.5 text-[13.5px] leading-[16.2px]">
          ©2017—2026
        </p>
      </div>
      <div className="px-[19.2px] pt-[101.01px]">
        <div className="grid min-h-[327.22px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div />
          <div className="relative">
            <p className="[font-family:'KH_Teka-Regular',Helvetica] text-[clamp(38px,4vw,56.8px)] leading-[1.08] tracking-[-1.14px]">
              <span className="inline-block">An award-winning</span>
              <span className="ml-5 inline-flex items-start">
                <sup className="mr-2 [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] tracking-normal">
                  (63+)
                </sup>
                digital-first
              </span>
              <br />
              Design Agency committed to exceptional design
              <img
                className="mx-3 inline-block h-auto w-[36px] align-middle"
                alt="Vector"
                src="/vector.svg"
              />
              <br />
              and the highest development
              <img
                className="mx-3 inline-block h-[34px] w-[34px] align-middle"
                alt="Download"
                src="/download--4--1.png"
              />
              standards.
            </p>
            <div className="mt-[72px] flex items-center justify-between">
              <Button
                type="button"
                variant="secondary"
                className="h-auto rounded-[20px] bg-white px-7 py-[18px] [font-family:'KHTeka-Regular',Helvetica] text-lg font-normal leading-[21.6px] text-[#101214] hover:bg-white"
              >
                Get in touch
              </Button>
              <img
                className="h-[39px] w-[39px]"
                alt="Download"
                src="/download--5--1.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[19.2px] pb-[0px] pt-[75.78px]">
        <div className="grid gap-[4.8px] lg:grid-cols-3">
          {awards.map((award) => (
            <Card
              key={award.organization}
              className="h-[180px] rounded-[20px] border-0 bg-[#e6dfe4] shadow-none"
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
                  className="absolute bottom-0 right-0 h-[77px] w-[77px]"
                  alt="Figure"
                  src={award.figure}
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-[4.8px] grid gap-[4.8px] lg:grid-cols-6">
          <div className="relative col-span-2 flex h-[303px] items-start justify-between px-[125px] py-[32px]">
            <div className="relative pl-[8px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] leading-[13.5px]">
              <span className="absolute left-[-1px] top-1 h-[5px] w-[5px] rounded-full bg-[#101214]" />
              <p>EEST</p>
              <p>19:48</p>
            </div>
            <div className="[font-family:'KHTekaMono-Regular',Helvetica] text-right text-[13.5px] leading-[13.5px]">
              <p>EAT</p>
              <p>19:48</p>
            </div>
            <div
              className="absolute inset-0 z-[-1] rounded-[20px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(..//image--fiddle-digital-design-agency--3.png)",
              }}
            >
              <img
                className="absolute bottom-0 right-0 h-[96.45px] w-[61.81px]"
                alt="Slice"
                src="/slice-1-1.svg"
              />
            </div>
          </div>
          {galleryImages.map((image) => (
            <Card
              key={image.src}
              className="col-span-1 h-[303px] overflow-hidden rounded-[20px] border-0 shadow-none"
            >
              <CardContent className="h-full p-0">
                <img
                  className="h-full w-full object-cover"
                  alt={image.alt}
                  src={image.src}
                />
              </CardContent>
            </Card>
          ))}

          <Card className="relative col-span-3 h-[303px] overflow-hidden rounded-[20px] border-0 shadow-none">
            <CardContent className="relative h-full p-0">
              <img
                className="h-full w-full object-cover"
                alt="Fiddle Digital design agency project"
                src="..//image--fiddle-digital-design-agency--3.png"
              />
              <img
                className="absolute bottom-0 right-0 h-24 w-[62px]"
                alt="Slice"
                src="/slice-1.svg"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-none bg-[#c8c2cf] p-1 hover:bg-[#c8c2cf]"
                aria-label="View project"
              >
                <img className="h-6 w-6" alt="" src="/icon-24-arrow-alt.svg" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
