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
  const handleScrollToVideo = () => {
    document.getElementById("design-manifesto-video")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      aria-labelledby="design-manifesto-title"
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#19171c] text-white"
    >
      <div className="relative flex h-[clamp(64px,22vw,410px)] w-full items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute left-[0.05%] top-[20.98%] [font-family:'KHTeka-Regular',Helvetica] text-[clamp(1rem,9.57vw,178.6px)] font-normal leading-[1.2] whitespace-nowrap"
        >
          (
        </span>
        <h2
          id="design-manifesto-title"
          className="absolute top-0 [font-family:'KHTeka-Regular',Helvetica] text-[clamp(1rem,9.57vw,178.6px)] font-normal leading-[1.08] tracking-[-0.02em] whitespace-nowrap"
        >
          DESIGN
        </h2>
        <p className="absolute top-[47.07%] flex max-w-full items-center justify-center px-2 text-center [font-family:'KHTeka-Regular',Helvetica] text-[clamp(1rem,9.57vw,178.6px)] font-normal leading-[1.08] tracking-[-0.02em] whitespace-nowrap">
          {manifestoPhrases[4]}
        </p>
        <span
          aria-hidden="true"
          className="absolute right-[0.05%] top-[20.98%] [font-family:'KHTeka-Regular',Helvetica] text-[clamp(1rem,9.57vw,178.6px)] font-normal leading-[1.2] whitespace-nowrap"
        >
          )
        </span>
        <Button
          aria-label="View design manifesto video"
          className="absolute bottom-0 left-1/2 h-auto -translate-x-1/2 rounded-none bg-transparent p-0 hover:bg-transparent focus-visible:ring-white"
          type="button"
          variant="ghost"
          onClick={handleScrollToVideo}
        >
          <img
            alt=""
            className="h-[clamp(20px,2.68vw,50px)] w-[clamp(20px,2.68vw,50px)]"
            src="/pixelated-arrow-down-1.png"
          />
        </Button>
      </div>
      <figure
        id="design-manifesto-video"
        className="h-[clamp(64px,7.02vw,131px)] w-[min(263px,70vw)] rounded-[clamp(10px,1.07vw,20px)] [background:url(..//video-7.png)_50%_50%_/_cover]"
      >
        <figcaption className="sr-only">Design manifesto video</figcaption>
      </figure>
    </section>
  );
};
