import { Card, CardContent } from "../../../../components/ui/card";

const campaign = {
  name: "Kaleida",
  description:
    "Kaleida is an award winning global experiential company with a unique specialism in holographic and immersive experiences.",
  backgroundImage: "/text-1.png",
  videoImage: "../video-5.png",
};

export const WeddingCampaignShowcaseSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="kaleida-title"
      className="grid min-h-[1143px] w-full grid-rows-[auto_auto_1fr] overflow-hidden bg-[#101214] bg-cover bg-[50%_50%] px-4 pb-10 pt-20 sm:px-8 sm:pt-28 lg:px-12 lg:pb-[43px] lg:pt-[322px]"
      style={{ backgroundImage: `url(${campaign.backgroundImage})` }}
    >
      <div className="mx-auto w-full max-w-[797px]">
        <Card className="border-0 bg-transparent shadow-none">
          <CardContent className="p-0">
            <img
              src={campaign.videoImage}
              alt={`${campaign.name} immersive experience`}
              className="block aspect-[797/498] w-full object-cover"
            />
          </CardContent>
        </Card>
        <h2
          id="kaleida-title"
          className="mt-6 [font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[34.9px] tracking-[-0.64px] text-white"
        >
          {campaign.name}
        </h2>
      </div>
      <div className="mt-12 flex w-full max-w-[396px] items-start justify-self-end lg:mt-[153px]">
        <span
          aria-hidden="true"
          className="mr-1 shrink-0 [font-family:'fdsi-Regular',Helvetica] text-2xl font-normal leading-6 text-white"
        >
          
        </span>
        <p className="[font-family:'KHTeka-Regular',Helvetica] text-lg font-normal leading-[21.6px] text-white">
          {campaign.description}
        </p>
      </div>
    </section>
  );
};
