import { Card, CardContent } from "../../../../components/ui/card";

const campaign = {
  title: "ThermoKonnect",
  description:
    "ThermoKonnect specializes in crafting high-quality terminal junction splices for seamless electrical connections.",
  backgroundImage: "/text-2.png",
  mediaImage: "../video-6.png",
};

export const FashionCampaignShowcaseSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="thermokonnect-title"
      className="min-h-[1143px] overflow-hidden bg-[#101214] bg-[url('/text-2.png')] bg-[length:1905px_1143px] bg-[position:center_-198px] bg-no-repeat pt-[322px]"
      style={{ backgroundImage: `url(${campaign.backgroundImage})` }}
    >
      <div className="mx-auto flex w-full max-w-[1905px] flex-col">
        <div className="mx-auto w-full max-w-[797px] px-4 sm:px-0">
          <Card className="overflow-hidden rounded-none border-0 bg-[#101214] shadow-none">
            <CardContent className="aspect-[797/498] p-0">
              <div
                role="img"
                aria-label={campaign.title}
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${campaign.mediaImage})` }}
              />
            </CardContent>
          </Card>
          <h2
            id="thermokonnect-title"
            className="mt-6 [font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[34.9px] tracking-[-0.64px] text-white"
          >
            {campaign.title}
          </h2>
        </div>
        <div className="mt-[152px] mr-[15.1%] ml-auto flex w-full max-w-[396px] gap-0 px-4 sm:px-0">
          <span
            aria-hidden="true"
            className="mt-px -ml-6 shrink-0 [font-family:'fdsi-Regular',Helvetica] text-2xl font-normal leading-6 text-white"
          >
            
          </span>
          <p className="[font-family:'KHTeka-Regular',Helvetica] text-lg font-normal leading-[21.6px] text-white">
            {campaign.description}
          </p>
        </div>
      </div>
    </section>
  );
};
