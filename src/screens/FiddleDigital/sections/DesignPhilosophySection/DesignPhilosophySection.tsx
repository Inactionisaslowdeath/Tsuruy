import { Button } from "../../../../components/ui/button";

const philosophyStatements = [
  {
    items: ["PRECISE.", "INNOVATIVE."],
    className: "col-start-4 col-span-3 pl-[29%]",
  },
  {
    items: ["FUTURISTIC.", "EXPRESSIVE."],
    className: "col-start-9 col-span-3 pl-[26%]",
  },
];

export const DesignPhilosophySection = (): JSX.Element => {
  return (
    <section
      className="flex min-h-[1260px] w-full flex-col bg-[#101214] px-3 pt-[390px] text-white"
      aria-labelledby="design-philosophy-title"
    >
      <header className="flex justify-center text-center">
        <h2
          id="design-philosophy-title"
          className="[font-family:'KHTekaMono-Regular',Helvetica] text-[32px] font-normal leading-[28px] tracking-[0]"
        >
          DESIGN
          <br />
          THAT EDUCATES
        </h2>
      </header>
      <div className="mt-[352px] grid w-full grid-cols-11 items-center gap-x-[4.8px]">
        {philosophyStatements.map((statement) => (
          <p
            className={`flex items-center gap-4 whitespace-nowrap [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] tracking-[0] ${statement.className}`}
          >
            {statement.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
        ))}
      </div>
      <div className="mt-[111px] flex justify-center">
        <Button
          type="button"
          variant="ghost"
          className="h-auto w-auto rounded-none p-0 hover:bg-transparent"
          aria-label="Continue to the next section"
        >
          <img
            className="h-[50px] w-[50px]"
            alt=""
            src="/pixelated-arrow-1.png"
          />
        </Button>
      </div>
    </section>
  );
};
