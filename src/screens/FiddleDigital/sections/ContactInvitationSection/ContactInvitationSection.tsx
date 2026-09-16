import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactInvitationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-invitation-heading"
      className="w-full bg-[#c8c2cf] px-[19.2px] py-[75.78px] text-[#101214]"
    >
      <div className="mx-auto flex w-full max-w-[1867px] flex-col items-center">
        <h2
          id="contact-invitation-heading"
          className="[font-family:'KHTeka-Regular',Helvetica] text-center text-[76px] font-normal leading-[1.08] tracking-[-1.52px] text-[#101214]"
        >
          Time to connect
        </h2>
        <Card className="mt-4 w-full border-0 bg-transparent shadow-none">
          <CardContent className="flex flex-col items-center p-0">
            {/* Image card: exact size 337x421 with top-right square corner and 3 rounded corners */}
            <div className="relative mt-[18px] h-[421px] w-[337px] overflow-hidden rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px] rounded-tr-none bg-[#c8c2cf]">
              <img
                className="h-full w-full object-cover"
                alt="Connect portrait"
                src="/images/parallax/15.webp"
              />
              {/* 77x77 cutout mask top-right: seamless zero-bleed corner */}
              <div className="absolute top-0 right-0 h-[75px] w-[75px] bg-[#c8c2cf] flex items-center justify-center pointer-events-none">
                <img
                  src="/icons/arrow-down.svg"
                  alt="Arrow down"
                  className="h-[50px] w-[50px] object-contain"
                />
              </div>
            </div>

            {/* Invitation text lines with exact justified spacing matching reference image 2 */}
            <div className="mt-8 w-[396px] [font-family:'KHTeka-Regular',Helvetica] text-[13.5px] font-normal leading-[19px] text-[#101214]">
              <div className="flex justify-between w-full">
                <span>JUST</span>
                <span>ONE</span>
                <span>SMALL</span>
                <span>ACTION</span>
                <span>STANDS</span>
                <span>BETWEEN</span>
                <span>US</span>
                <span>AND</span>
              </div>
              <div className="flex justify-between w-full">
                <span>GETTING</span>
                <span>ACQUAINTED.</span>
                <span>A</span>
                <span>GREAT</span>
                <span>JOURNEY</span>
                <span>BEGINS</span>
                <span>WITH</span>
              </div>
              <div className="flex justify-between w-full">
                <span>THE</span>
                <span className="ml-12">FIRST</span>
                <span className="ml-12">WORD</span>
                <span>&quot;HELLO!&quot;</span>
              </div>
            </div>

            {/* Pill button: exact size 335x61 with corner radius 20 */}
            <Button
              type="button"
              variant="secondary"
              aria-label="Connect"
              className="mt-8 flex h-[61px] w-[335px] items-center justify-center rounded-[20px] bg-white p-0 text-[#101214] hover:bg-white/90"
            >
              <img
                src="/icons/arrow-left.svg"
                alt="Return / Connect arrow"
                className="h-[36px] w-[36px] object-contain"
              />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
