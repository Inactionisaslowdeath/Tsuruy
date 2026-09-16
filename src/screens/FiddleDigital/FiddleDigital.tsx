import { useEffect } from "react";
import Lenis from "lenis";
import { Button } from "../../components/ui/button";
import { CommunityInvitationSection } from "./sections/CommunityInvitationSection/CommunityInvitationSection";
import { ContactInvitationSection } from "./sections/ContactInvitationSection/ContactInvitationSection";
import { CreativeAgencyHeroSection } from "./sections/CreativeAgencyHeroSection/CreativeAgencyHeroSection";
import { DesignManifestoContentSection } from "./sections/DesignManifestoContentSection/DesignManifestoContentSection";
import { FeaturedWorkShowcaseSection } from "./sections/FeaturedWorkShowcaseSection/FeaturedWorkShowcaseSection";
import { ProjectCarouselSection } from "./sections/ProjectCarouselSection/ProjectCarouselSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";
import { Skiper30 } from "./sections/Skiper30/Skiper30";
import { VisualPortfolioMosaicSection } from "./sections/VisualPortfolioMosaicSection/VisualPortfolioMosaicSection";

const navigationItems = [
  { label: "Work", href: "#work", detail: "(19)" },
  { label: "About", href: "#about" },
  { label: "Let's talk", href: "#contact", detail: "+" },
];

export const FiddleDigital = (): JSX.Element => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#101214]">
      <header className="absolute inset-x-0 top-0 z-10 px-[19px] pt-[5px]">
        <div className="grid grid-cols-[minmax(0,3fr)_minmax(0,4fr)] gap-[5px]">
          <section
            aria-label="Fiddle Digital identity"
            className="relative min-h-[110px] rounded-[20px] bg-[#101214] px-[34px] py-[21px] text-white"
          >
            <p className="[font-family:'KH_Teka-Regular',Helvetica] text-[42.6px] font-normal leading-[46.6px] tracking-[-0.85px]">
              Selamawit Tsuruy
            </p>
            <p className="[font-family:'Inter',Helvetica] text-lg font-normal leading-[21.6px]">
              フィドル
            </p>
            <p className="absolute left-1/2 top-12 [font-family:'KH_Teka-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px]">
              SUPER MODEL
            </p>
          </section>
          <nav
            aria-label="Primary navigation"
            className="flex h-12 items-center rounded-[13px] bg-[#101214]"
          >
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                asChild
                variant="ghost"
                className="h-auto flex-1 gap-0 rounded-none p-0 text-[#fefefe] hover:bg-transparent hover:text-white"
              >
                <a
                  href={item.href}
                  className="[font-family:'KHTeka-Regular',Helvetica] text-center !text-[24px] font-normal leading-[28.8px]"
                >
                  {item.label}
                  {item.detail && (
                    <sup className="ml-0 align-top [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] text-[#e6dfe4]">
                      {item.detail}
                    </sup>
                  )}
                </a>
              </Button>
            ))}
            <span
              aria-hidden="true"
              className="mx-8 block h-[38px] w-[38px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(200,194,207,1)_5%,rgba(0,0,0,0)_8%)]"
            />
          </nav>
        </div>
      </header>
      <main>
        <section aria-label="Creative agency introduction">
          <CreativeAgencyHeroSection />
        </section>
        <section id="work" aria-label="Featured work">
          <FeaturedWorkShowcaseSection />
        </section>
        <section id="about" aria-label="Design manifesto">
          <DesignManifestoContentSection />
        </section>
        <section aria-label="Projects and Capabilities">
          <ProjectCarouselSection />
        </section>
        <section aria-label="Visual portfolio">
          <VisualPortfolioMosaicSection />
        </section>
        <section aria-label="Portfolio image mosaic">
          <Skiper30 />
        </section>
        <section aria-label="Community invitation">
          <CommunityInvitationSection />
        </section>
        <section id="contact" aria-label="Contact invitation">
          <ContactInvitationSection />
        </section>
      </main>
      <footer>
        <SiteFooterSection />
      </footer>
    </div>
  );
};
