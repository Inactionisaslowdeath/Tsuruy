import { Button } from "../../../../components/ui/button";

const testimonial = {
  quote:
    "Her runway presence was exceptional, effortless, and striking to watch. Her professional work ethic also shone flawlessly. Overall, our collection received a lot of compliments.",
  name: "Daniel Reynolds",
  role: "Creative Director, FashionGHANA",
  avatarSrc: "/icons/client-avatar.svg",
};

const sectionContent = {
  headingLine1: "Gather 'round — client",
  headingLine2: "tales incoming.",
  description:
    "Stories travel — about the garments, the flow, the small magic moments that happen while bringing a collection to life on the runway.",
  currentSlide: "01",
  totalSlides: "03",
};

export const CommunityInvitationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="community-invitation-heading"
      className="relative flex h-[662px] w-full flex-col justify-between overflow-hidden bg-[#c8c2cf] text-[#101214] pt-[45px] pb-[35px]"
    >
      {/* 1905px container matching reference image */}
      <div className="relative mx-auto flex h-full w-full max-w-[1905px] flex-col justify-between px-[19.2px]">
        
        {/* Top Header: Centered layout with generous left/right indentation */}
        <div className="grid grid-cols-[minmax(0,530px)_minmax(0,530px)] justify-center gap-[270px]">
          <h2
            id="community-invitation-heading"
            className="w-[528px] [font-family:'KHTeka-Regular',Helvetica] text-[43px] font-normal leading-[46.6px] tracking-[-0.85px] text-[#101214]"
          >
            <span className="block">{sectionContent.headingLine1}</span>
            <span className="block">{sectionContent.headingLine2}</span>
          </h2>
          <p className="w-[530px] [font-family:'KHTeka-Regular',Helvetica] text-[24px] font-normal leading-[28.8px] text-[#101214]">
            {sectionContent.description}
          </p>
        </div>

        {/* Middle Testimonial Row: Quote horizontally centered, PREV/counter on left, NEXT on right */}
        <div className="relative flex items-center justify-between px-[100px] xl:px-[140px]">
          {/* Left Controls: PREV and 01 / 03 - strictly KHTeka font */}
          <div className="flex items-center gap-[115px] shrink-0">
            <Button
              type="button"
              variant="ghost"
              aria-label="Previous testimonial"
              className="h-auto p-0 [font-family:'KHTeka-Regular',Helvetica] text-[13px] font-normal tracking-normal text-[#101214] hover:bg-transparent hover:opacity-70"
            >
              PREV
            </Button>
            <span className="[font-family:'KHTeka-Regular',Helvetica] text-[13px] font-normal text-[#101214]">
              {sectionContent.currentSlide}&nbsp;&nbsp;/&nbsp;&nbsp;<span className="text-white">{sectionContent.totalSlides}</span>
            </span>
          </div>

          {/* Middle Quote: Centered */}
          <div className="max-w-[798px] px-4 text-center">
            <blockquote className="[font-family:'KHTeka-Regular',Helvetica] text-[32px] font-normal leading-[36px] tracking-[-0.64px] text-[#101214]">
              {testimonial.quote}
            </blockquote>
          </div>

          {/* Right Control: NEXT - strictly KHTeka font */}
          <div className="shrink-0">
            <Button
              type="button"
              variant="ghost"
              aria-label="Next testimonial"
              className="h-auto p-0 [font-family:'KHTeka-Regular',Helvetica] text-[13px] font-normal tracking-normal text-[#101214] hover:bg-transparent hover:opacity-70"
            >
              NEXT
            </Button>
          </div>
        </div>

        {/* Bottom Author Section (Icon + Name & Role) - Always below the quote with clean margin */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-[14px]">
            <img
              src={testimonial.avatarSrc}
              alt={testimonial.name}
              className="h-[52px] w-[52px] rounded-full object-contain"
            />
            <div className="flex flex-col text-left [font-family:'KHTeka-Regular',Helvetica]">
              <span className="text-[24px] font-normal leading-[28px] text-[#101214]">
                {testimonial.name}
              </span>
              <span className="text-[24px] font-normal leading-[28px] text-white">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom divider line */}
        <div className="w-full border-b border-[#101214]" />
      </div>
    </section>
  );
};
