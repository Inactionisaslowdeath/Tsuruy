import { Card, CardContent } from "../../../../components/ui/card";

export const ProjectCarouselSection = (): JSX.Element => {
  return (
    <section
      aria-label="Projects and Services"
      className="relative w-full h-[1420px] overflow-hidden bg-[#c8c2cf] text-[#101214]"
    >
      {/* 
        Three cards placed with uniform spacing (5px):
        - Top padding: pt-[5px]
        - Horizontal gap between cards: gap-[5px]
        - Vertical gap between Card 1 (530x389) and charcoal card (525x42): gap-[5px]
        - Corner radius of charcoal card: 20px (rounded-[20px])
        - All 3 main cards have corner radius: 40px (rounded-[40px])
        - Typography matching exact design specs:
            * "READY-TO-GO WEB PRESENCE.": [font-family:'KHTeka-Regular',Helvetica] text-[18px] leading-[21.6px]
            * "BEST FIT FOR THE ENERGETIC AND PROACTIVE.": [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] leading-none
            * "CONTACT TO LEARN MORE: HELLO@FIDDLE.DIGITAL": [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] leading-none
      */}
      <div className="mx-auto flex w-full max-w-[1905px] items-start justify-center gap-[5px] pt-[5px] px-[19.2px]">
        {/* 1st Column: 530px wide */}
        <div className="flex w-[530px] shrink-0 flex-col items-center gap-[5px]">
          {/* 1st Card: 530x389, r:40 */}
          <Card className="relative flex h-[389px] w-[530px] flex-col items-center justify-center overflow-hidden rounded-[40px] border-0 bg-white shadow-none">
            <CardContent className="relative flex h-full w-full items-center justify-center p-0">
              <img
                src="/images/closeup1.webp"
                alt="Selamawit Tsuruy fashion editorial closeup"
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* Subcard below 1st card: 525x42, r:15 */}
          <div className="flex h-[42px] w-[525px] items-center justify-between rounded-[15px] bg-[#101214] px-8 text-white">
            <span className="[font-family:'KHTeka-Regular',Helvetica] text-[18px] leading-none tracking-[0em] text-white">
              HIGH-FASHION
            </span>
            <span className="[font-family:'KHTeka-Regular',Helvetica] text-[18px] leading-none tracking-[0em] text-white">
              RUNWAY
            </span>
            <span className="[font-family:'KHTeka-Regular',Helvetica] text-[18px] leading-none tracking-[0em] text-white">
              READY.
            </span>
          </div>
        </div>

        {/* 2nd Card: 797x442, r:40 */}
        <Card className="relative flex h-[442px] w-[797px] shrink-0 flex-col justify-between overflow-hidden rounded-[40px] border-0 bg-white p-9 shadow-none">
          {/* Top-right text */}
          <div className="self-end text-right">
            <p className="[font-family:'KHTeka-Regular',Helvetica] text-[18px] font-normal leading-[1.2] text-[#101214]">
              Global availability.
              <br />
              Direct &amp; agency bookings.
            </p>
          </div>

          {/* Center Project branding with black block & NEW badge */}
          <div className="my-auto flex items-center justify-center gap-3.5">
            <div className="h-[36px] w-[36px] bg-[#101214]" />
            <h3 className="[font-family:'KHTeka-Regular',Helvetica] text-[54px] font-normal leading-none tracking-[-0.03em] text-[#101214]">
              Editorial
            </h3>
            <span className="rounded-full bg-[#0070F3] px-3 py-1 [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-none text-white">
              2026/27
            </span>
          </div>

          {/* Bottom info text */}
          <div className="flex items-end justify-between [font-family:'KHTeka-Regular',Helvetica] text-[13.5px] font-normal leading-[16.2px] tracking-[0em]">
            <p className="w-[53.6%] text-[#101214]">
              TAILORED FOR LUXURY HOUSES, CAMPAIGNS &amp; RUNWAY SHOWS.
            </p>
            <div className="w-[37.5%] text-right">
              <p className="text-[#101214]">DIRECT INQUIRIES:</p>
              <p className="mt-0.5 text-[#a399a8]">
                BOOKINGS@SELAMAWITTSURUY.COM
              </p>
            </div>
          </div>
        </Card>

        {/* 3rd Card: 530x442, r:40 */}
        <Card className="relative flex h-[442px] w-[530px] shrink-0 flex-col items-center justify-center overflow-hidden rounded-[40px] border-0 bg-white shadow-none">
          <CardContent className="relative flex h-full w-full items-center justify-center p-0">
            <img
              src="/images/closeup2.webp"
              alt="Selamawit Tsuruy fashion editorial closeup"
              className="h-full w-full object-cover"
            />
          </CardContent>
        </Card>
      </div>

      {/* Content below the cards matching the reference image */}
      <div className="mx-auto mt-[100px] flex w-full max-w-[1905px] flex-col px-[19.2px]">
        {/* Main headline: 2 lines */}
        <header className="mx-auto w-full max-w-[1703px] text-center">
          <h2 className="[font-family:'KHTeka-Regular',Helvetica] text-[84px] font-normal tracking-[-1.68px] leading-[0.98] text-[#101214]">
            Together with you, we elevate the narrative.
            <br />
            Timeless, high-fashion, impactful.
          </h2>
        </header>

        {/* Center narrative block */}
        <div className="mx-auto mt-[60px] w-full max-w-[1065px]">
          {/* Circular badge + UNCOMPROMISING VISUAL EXCELLENCE. */}
          <div className="grid grid-cols-[minmax(155px,228px)_minmax(0,1fr)] items-end gap-x-0">
            {/* Circular Badge: 155x155 */}
            <div className="relative -mb-[66px] h-[155px] w-[155px] self-start overflow-hidden rounded-full bg-white shadow-none flex items-center justify-center">
              {/* Isometric sensor / device unit SVG illustration */}
              <svg
                className="h-[105px] w-[105px] -rotate-6"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Light gray side */}
                <path d="M22 36 L52 18 L44 68 L16 80 Z" fill="#D6D8DC" />
                {/* Dark charcoal front face */}
                <path d="M52 18 L88 38 L76 86 L44 68 Z" fill="#1A1C1E" />
                {/* Top accent strip on light gray */}
                <path d="M22 36 L25 34 L28 40 L25 42 Z" fill="#FF4338" />
                {/* Small labels on light side */}
                <text x="26" y="54" fill="#333" fontSize="6.5" fontFamily="Helvetica" fontWeight="bold">EXT.</text>
                <text x="26" y="61" fill="#333" fontSize="6.5" fontFamily="Helvetica" fontWeight="bold">01</text>
                {/* Digits and icons on dark face */}
                <text x="56" y="55" fill="white" fontSize="9" fontFamily="Courier" letterSpacing="2">0 0</text>
                {/* Sun / radial icon bottom right of dark face */}
                <circle cx="68" cy="74" r="3.5" stroke="white" strokeWidth="1" strokeDasharray="1.5 1.5" />
                <circle cx="68" cy="74" r="1.5" fill="white" />
              </svg>
            </div>

            {/* Responsibility 2-line mini tag */}
            <div className="mb-[10px] [font-family:'KHTekaMono-Regular',Helvetica] text-[11.3px] font-normal leading-[13px] tracking-[0.02em] text-[#101214] uppercase">
              <p>UNCOMPROMISING</p>
              <p>VISUAL</p>
              <p>EXCELLENCE.</p>
            </div>
          </div>

          {/* Statement text: Striking runway presence... (size 47) */}
          <div className="mt-[24px] [font-family:'KHTeka-Regular',Helvetica] text-[47px] font-normal tracking-[-0.95px] leading-[1.08] text-[#101214]">
            <p className="ml-0 md:ml-[228px]">
              Striking runway presence, world-class
            </p>
            <p className="mt-[4px]">
              editorial storytelling, and authentic cultural identity tailored to make brands shine.
            </p>
          </div>

          {/* 3 Columns at the bottom (size 24) */}
          <div className="mt-[65px] grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-[57.3px]">
            <p className="[font-family:'KHTeka-Regular',Helvetica] text-[24px] font-normal leading-[28.8px] text-[#101214]">
              Designers receive high-impact visual representation that commands attention. Seasons pass, but iconic imagery remains timeless.
            </p>
            <p className="[font-family:'KHTeka-Regular',Helvetica] text-[24px] font-normal leading-[28.8px] text-[#101214]">
              Backed by years of dedicated runway and editorial experience, ensuring your collection never goes unnoticed.
            </p>
            <p className="[font-family:'KHTeka-Regular',Helvetica] text-[24px] font-normal leading-[28.8px] text-[#101214]">
              Collaborating with top-tier African designers, stylists, and photographers allows us to craft the perfect high-fashion campaign.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
