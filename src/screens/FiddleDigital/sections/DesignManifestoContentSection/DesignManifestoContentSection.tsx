import { Button } from "../../../../components/ui/button";

const manifestoPhrases = [
  "THAT FUNCTIONS",
  "THAT SPEAKS",
  "THAT INSPIRES",
  "THAT CAPTIVATES",
  "THAT EDUCATES",
  "THAT AMAZES",
];

export const DesignManifestoContentSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="design-manifesto-title"
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#101214] pt-[140px] pb-[100px] text-white"
    >
      {/* Title block with brackets: "( DESIGN THAT EDUCATES )" */}
      <div className="relative flex w-full max-w-[1905px] items-center justify-between px-[19.2px]">
        <span
          aria-hidden="true"
          className="[font-family:'KHTeka-Regular',Helvetica] text-[clamp(48px,9.57vw,178.6px)] font-normal leading-[1.08] select-none text-white"
        >
          (
        </span>
        <div className="flex flex-col items-center text-center">
          <h2
            id="design-manifesto-title"
            className="[font-family:'KHTeka-Regular',Helvetica] text-[clamp(48px,9.57vw,178.6px)] font-normal leading-[1.08] tracking-[-0.02em] whitespace-nowrap text-white"
          >
            STYLE
          </h2>
          <p className="[font-family:'KHTeka-Regular',Helvetica] text-[clamp(48px,9.57vw,178.6px)] font-normal leading-[1.08] tracking-[-0.02em] whitespace-nowrap text-white">
            THAT EMPOWERS
          </p>
        </div>
        <span
          aria-hidden="true"
          className="[font-family:'KHTeka-Regular',Helvetica] text-[clamp(48px,9.57vw,178.6px)] font-normal leading-[1.08] select-none text-white"
        >
          )
        </span>
      </div>

      {/* Top pixel arrow pointing down to video card */}
      <div className="mt-8 flex justify-center">
        <img
          src="/icons/pixel-arrow-down.svg"
          alt="Arrow down"
          className="h-[32px] w-[32px] select-none"
        />
      </div>

      {/* 1866x131 Container: PRECISE. INNOVATIVE. [263x131 Video Card] FUTURISTIC. EXPRESSIVE. */}
      <div className="mt-4 flex h-[131px] w-full max-w-[1866px] items-center justify-between px-6">
        {/* Left text */}
        <div className="flex-1 text-right pr-12">
          <span className="[font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] uppercase tracking-[0.05em] text-white/90">
            AUTHENTIC.&nbsp;&nbsp;EDITORIAL.
          </span>
        </div>

        {/* Center small video card: 263x131 */}
        <div
          id="design-manifesto-video"
          className="relative h-[131px] w-[263px] shrink-0 overflow-hidden rounded-[20px] bg-[#1a1c1e] shadow-lg"
        >
          <video
            src="https://res.cloudinary.com/otxrtuoh/video/upload/v1789491875/mini-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right text */}
        <div className="flex-1 text-left pl-12">
          <span className="[font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] uppercase tracking-[0.05em] text-white/90">
            ELEVATED.&nbsp;&nbsp;EXPRESSIVE.
          </span>
        </div>
      </div>

      {/* Bottom pixel arrow pointing up to video card */}
      <div className="mt-4 flex justify-center">
        <img
          src="/icons/pixel-arrow-up.svg"
          alt="Arrow up"
          className="h-[32px] w-[32px] select-none"
        />
      </div>
    </section>
  );
};
