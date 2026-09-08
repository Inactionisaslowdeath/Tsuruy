import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";

const mediaCards = [
  {
    figure: "..//figure-1.png",
    video: "..//video-1.png",
    itemClassName: "basis-[calc(28.387%-3.34px)]",
    cardClassName: "h-[88%] self-start",
  },
  {
    figure: "..//figure.png",
    video: "..//video.png",
    itemClassName: "basis-[calc(28.387%-3.34px)]",
    cardClassName: "h-full",
  },
];

export const ProjectCarouselSection = (): JSX.Element => {
  return (
    <section className="w-full pt-[0.25%]" aria-label="Fiddle Digital projects">
      <Carousel
        opts={{ align: "start", containScroll: false }}
        className="w-full aspect-[4.227/1]"
      >
        <CarouselContent className="ml-0 h-full gap-[5px]">
          <CarouselItem
            className={`${mediaCards[0].itemClassName} h-full pl-0`}
          >
            <article className={mediaCards[0].cardClassName}>
              <Card className="h-full overflow-hidden rounded-[40px] border-0 bg-white shadow-none">
                <CardContent className="grid h-full p-0">
                  <div
                    className="col-start-1 row-start-1 h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${mediaCards[0].figure})`,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="col-start-1 row-start-1 h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${mediaCards[0].video})`,
                    }}
                    aria-hidden="true"
                  />
                </CardContent>
              </Card>
            </article>
          </CarouselItem>
          <CarouselItem className="basis-[calc(42.69%-3.33px)] h-full pl-0">
            <article className="h-full">
              <Card className="h-full rounded-[40px] border-0 bg-white shadow-none">
                <CardContent className="flex h-full flex-col p-0 text-[#101214]">
                  <p className="mr-[8.4%] mt-[5.4%] self-end [font-family:'KHTeka-Regular',Helvetica] text-[clamp(2px,0.945vw,18px)] font-normal leading-[1.2]">
                    Simplified UI.
                    <br />
                    Faster launch.
                  </p>
                  <div className="ml-[32.1%] mt-[26%] flex items-center">
                    <div className="mr-[1.2%] grid h-[clamp(4px,2.035vw,38.77px)] w-[clamp(5px,2.677vw,51px)] place-items-center bg-[#101214]">
                      <span className="[font-family:'KHTeka-Regular',Helvetica] text-[clamp(3px,1.68vw,32px)] font-normal leading-none tracking-[-0.02em] text-[#f4ff1e]">
                        ƒ
                      </span>
                    </div>
                    <h2 className="[font-family:'KHTeka-Regular',Helvetica] text-[clamp(7px,2.982vw,56.8px)] font-normal leading-[1.08] tracking-[-0.02em]">
                      Project
                    </h2>
                    <span className="ml-[3.3%] rounded-3xl bg-[#3687ff] px-[clamp(1px,0.504vw,9.6px)] py-[clamp(0.25px,0.126vw,2.4px)] [font-family:'KHTekaMono-Regular',Helvetica] text-[clamp(2px,0.709vw,13.5px)] font-normal leading-none text-white">
                      NEW
                    </span>
                  </div>
                  <div className="mx-[16.7%] mt-[15.5%] flex justify-between [font-family:'KHTekaMono-Regular',Helvetica] text-[clamp(2px,0.709vw,13.5px)] font-normal leading-none">
                    <p className="w-[53.6%]">
                      BEST FIT FOR THE ENERGETIC AND PROACTIVE.
                    </p>
                    <div className="w-[37.5%] text-center">
                      <p>CONTACT TO LEARN MORE:</p>
                      <p className="mt-[7%] text-[#a399a8]">
                        HELLO@FIDDLE.DIGITAL
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          </CarouselItem>
          <CarouselItem
            className={`${mediaCards[1].itemClassName} h-full pl-0`}
          >
            <article className={mediaCards[1].cardClassName}>
              <Card className="h-full overflow-hidden rounded-[40px] border-0 bg-white shadow-none">
                <CardContent className="grid h-full p-0">
                  <div
                    className="col-start-1 row-start-1 h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${mediaCards[1].figure})`,
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="col-start-1 row-start-1 h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${mediaCards[1].video})`,
                    }}
                    aria-hidden="true"
                  />
                </CardContent>
              </Card>
            </article>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};
