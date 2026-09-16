import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const marqueeWords = [
  "SELAMAWIT",
  "TSURUY",
  "SELAMAWIT",
  "TSURUY",
  "SELAMAWIT",
  "TSURUY",
  "SELAMAWIT",
  "TSURUY",
  "SELAMAWIT",
  "TSURUY",
];

const values = ["Runway", "Campaigns", "Editorial"];

export const VisualPortfolioMosaicSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#e6dfe4] pb-[178.56px] text-[#101214]">
      <div className="w-full overflow-hidden bg-[#101214] pt-[0.5px] pb-[0.5px] flex items-center shadow-[0px_-1px_0px_#101214,0px_1px_0px_#101214]">
        <div className="flex w-max items-center">
          <motion.div
            className="flex shrink-0 items-center gap-[5.5rem] pr-[5.5rem]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...marqueeWords, ...marqueeWords].map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="[font-family:'KHTekaMono-Regular',Helvetica] whitespace-nowrap text-[13.5px] font-normal leading-none text-white select-none translate-y-[1px]"
              >
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="h-[62px] w-full" />
      <div className="mx-auto w-full max-w-[1905px] px-[19.2px] pt-[31.99px]">
        <div className="flex flex-col items-center">
          <p className="max-w-[1065px] text-center [font-family:'KHTeka-Regular',Helvetica] text-[24px] font-normal leading-[1.09] tracking-[-0.64px] text-[#101214] sm:text-[32px] sm:leading-[34.9px]">
            Making your unique vision come to life is a true art. My career is
            dedicated to it. You are invited to collaborate in turning creative
            concepts into reality.
          </p>
          <div className="relative mt-[72px] flex w-full max-w-[530px] flex-col items-start">
            {/* FDDA badge behind the image card in z-space */}
            <span className="absolute left-full ml-[6px] top-[45px] z-0 inline-flex h-[18px] rotate-90 origin-left items-center rounded-[3.6px] bg-[#101214] px-[4.8px] py-[2.4px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] text-white select-none pointer-events-none">
              FDDA
            </span>
            <Card className="relative z-10 h-[265px] w-full overflow-hidden rounded-none border-0 bg-[#101214] shadow-none">
              <CardContent className="relative h-full w-full p-0">
                <img
                  src="/images/fdda.webp"
                  alt="Brand showcase"
                  className="h-full w-full object-cover"
                />
                {/* Cutout corner in bottom right */}
                <div className="absolute bottom-0 right-0 h-[57px] w-[57px] bg-[#e6dfe4]" />
              </CardContent>
            </Card>
          </div>
          <h2 className="mt-[43px] text-center [font-family:'KHTeka-Regular',Helvetica] text-[40px] font-normal leading-[1.08] tracking-[-1.52px] text-[#101214] sm:text-[75.8px] sm:leading-[81.9px] xl:whitespace-nowrap">
            Elevating your brand worldwide
          </h2>
          <div className="mt-[32px] flex justify-center">
            <img
              src="/icons/fork.svg"
              alt="Fork branch icon"
              className="h-[48px] w-[48px] object-contain"
            />
          </div>
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
