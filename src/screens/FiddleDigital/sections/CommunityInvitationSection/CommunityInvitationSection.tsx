import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonial = {
  quote:
    "The site's UX was exceptional, easy, and intuitive to navigate. The backend system also worked flawlessly. Overall, we have received a lot of compliments.",
  name: "Daniel Reynolds",
  role: "Executive Producer, Kaleida",
  avatarSrc: "/figure--fiddle-digital-design-agency---index-.svg",
};

const sectionContent = {
  heading: "Gather 'round — client tales incoming.",
  description:
    "Stories travel — about the ideas, the flow, the small magic moments that happen while building something together.",
  currentSlide: "01",
  totalSlides: "03",
};

export const CommunityInvitationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="community-invitation-heading"
      className="w-full pt-[42.65px]"
    >
      <div className="w-full px-[19.2px]">
        <div className="mx-auto flex w-full max-w-[1867px] flex-col">
          <header className="grid gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-[minmax(0,528px)_minmax(0,530px)] lg:justify-center lg:gap-[273px]">
            <h2
              id="community-invitation-heading"
              className="max-w-[528px] [font-family:'KHTeka-Regular',Helvetica] text-[42.6px] font-normal leading-[46.6px] tracking-[-0.85px] text-[#101214]"
            >
              {sectionContent.heading}
            </h2>
            <p className="max-w-[530px] [font-family:'KHTeka-Regular',Helvetica] text-2xl font-normal leading-[28.8px] text-[#101214]">
              {sectionContent.description}
            </p>
          </header>
          <div className="mt-[121px] grid grid-cols-[1fr_auto_1fr] items-center gap-4 lg:mt-[132px]">
            <Button
              type="button"
              variant="ghost"
              disabled
              aria-label="Previous testimonial"
              className="h-auto justify-self-start rounded-none p-0 [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] text-[#101214] opacity-100 hover:bg-transparent hover:text-[#101214] disabled:pointer-events-none disabled:opacity-100"
            >
              PREV
            </Button>
            <Card className="w-full max-w-[798px] border-0 bg-transparent shadow-none">
              <CardContent className="p-0">
                <blockquote className="[font-family:'KHTeka-Regular',Helvetica] text-center text-[28px] font-normal leading-[32px] tracking-[-0.56px] text-[#101214] sm:text-[32px] sm:leading-[34.9px] sm:tracking-[-0.64px]">
                  {testimonial.quote}
                </blockquote>
              </CardContent>
            </Card>
            <Button
              type="button"
              variant="ghost"
              disabled
              aria-label="Next testimonial"
              className="h-auto justify-self-end rounded-none p-0 [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] text-[#101214] opacity-100 hover:bg-transparent hover:text-[#101214] disabled:pointer-events-none disabled:opacity-100"
            >
              NEXT
            </Button>
          </div>
          <div className="mt-[118px] flex flex-col items-center">
            <div className="flex items-center gap-[7px]">
              <img
                className="h-[67px] w-[67px] shrink-0"
                alt="Figure fiddle"
                src={testimonial.avatarSrc}
              />
              <div className="flex flex-col [font-family:'KH_Teka-Regular',Helvetica] text-2xl font-normal leading-[28.8px]">
                <cite className="not-italic text-[#101214]">
                  {testimonial.name}
                </cite>
                <p className="text-white">{testimonial.role}</p>
              </div>
            </div>
            <p className="mt-[25px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px]">
              <span className="text-[#101214]">
                {sectionContent.currentSlide}
              </span>
              <span className="text-white">
                {" "}
                / {sectionContent.totalSlides}
              </span>
            </p>
          </div>
          <div className="mt-[77px] w-full border-b border-[#101214]" />
        </div>
      </div>
    </section>
  );
};
