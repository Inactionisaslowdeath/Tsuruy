import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const marqueeWords = [
  "EACH",
  "DESIGN",
  "ELEMENT",
  "IS",
  "AN",
  "EXTENSION",
  "OF",
  "THE",
  "INTERFACE",
  "FUNCTION.",
  "IT'S",
  "THE",
  "PUREST",
  "EXPRESSION",
  "OF",
  "PERSONALITY.",
];

const values = ["Feeling", "Experience", "Value"];

export const VisualPortfolioMosaicSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#e6dfe4] pb-[178.56px] text-[#101214]">
      <div className="w-full overflow-hidden bg-[#101214] shadow-[0px_-1px_0px_#101214,0px_1px_0px_#101214]">
        <div className="mx-auto flex w-full max-w-[1905px] items-center justify-between gap-6 px-[19.2px]">
          {marqueeWords.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="[font-family:'KHTekaMono-Regular',Helvetica] whitespace-nowrap text-[13.5px] font-normal leading-[13.5px] text-white"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
      <div className="h-[62px] w-full" />
      <div className="mx-auto w-full max-w-[1905px] px-[19.2px] pt-[31.99px]">
        <div className="flex flex-col items-center">
          <p className="max-w-[1065px] text-center [font-family:'KHTeka-Regular',Helvetica] text-[24px] font-normal leading-[1.09] tracking-[-0.64px] text-[#101214] sm:text-[32px] sm:leading-[34.9px]">
            Making your contribution to innovation and development is a true
            miracle. Each of us is capable of it. You are invited to participate
            in turning dreams into reality.
          </p>
          <div className="relative mt-[72px] flex w-full max-w-[530px] flex-col items-start">
            <Card className="h-[265px] w-full overflow-hidden rounded-none border-0 bg-white shadow-none">
              <CardContent className="grid h-full w-full p-0">
                <div className="col-start-1 row-start-1 h-full w-full bg-[url('../figure-3.png')] bg-cover bg-center" />
                <div className="col-start-1 row-start-1 flex h-full w-full items-center justify-center">
                  <div className="h-full w-full bg-[url('../video-3.png')] bg-cover bg-center" />
                </div>
                <div className="col-start-1 row-start-1 ml-auto mt-auto h-[57px] w-[57px] bg-[#e6dfe4]" />
              </CardContent>
            </Card>
            <span className="absolute right-[-8px] top-[45px] inline-flex h-[18px] rotate-90 items-center rounded-[3.6px] bg-[#101214] px-[4.8px] py-[2.4px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] text-white">
              FDDA
            </span>
            <span className="absolute -left-[133px] top-[121px] hidden h-6 w-6 items-center justify-center [font-family:'fdsi-Regular',Helvetica] text-2xl font-normal leading-6 sm:flex">
              
            </span>
          </div>
          <h2 className="mt-[43px] text-center [font-family:'KHTeka-Regular',Helvetica] text-[40px] font-normal leading-[1.08] tracking-[-1.52px] text-[#101214] sm:text-[75.8px] sm:leading-[81.9px] xl:whitespace-nowrap">
            Broadcasting your brand worldwide
          </h2>
          <img
            className="mt-[43px] h-auto w-full"
            alt="Icon margin"
            src="/icon-margin.svg"
          />
          <div className="mt-[42px] grid w-full max-w-[1209.5px] grid-cols-1 gap-[4.8px] sm:grid-cols-3">
            {values.map((value) => (
              <Button
                key={value}
                type="button"
                variant="ghost"
                className="relative h-[73px] rounded-[20px] bg-[#c8c2cf] px-0 py-[19.2px] text-[#101214] hover:bg-[#c8c2cf] hover:text-[#101214]"
              >
                <span className="absolute left-3 top-[30px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px]">
                  W/
                </span>
                <span className="[font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[34.9px] tracking-[-0.64px]">
                  {value}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
