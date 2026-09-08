import { Button } from "../../../../components/ui/button";

const primaryLinks = ["Work", "About", "Let's talk"];
const socialLinks = ["Awwwards", "Instagram", "Dribbble", "Behance"];

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full overflow-hidden bg-transparent px-[19.2px] pt-[42.65px] text-[#101214]">
      <div className="mx-auto flex min-h-[501.91px] w-full max-w-[1866.62px] flex-col pt-[4.8px]">
        <div
          aria-label="Fiddle-dee-dee"
          className="flex items-center justify-center bg-[linear-gradient(90deg,rgba(16,18,20,1)_0%,rgba(16,18,20,1)_100%),linear-gradient(180deg,rgba(200,194,207,1)_50%,rgba(0,0,0,0)_50%)]"
        >
          <span className="h-[27.59px] w-[27.59px] rounded-[7.2px] bg-[#101214]" />
          <span className="relative h-[28.8px] w-[187.64px] rounded-3xl bg-[#101214]">
            <span className="absolute left-[5px] top-0.5 bg-[linear-gradient(90deg,rgba(200,194,207,0.5)_0%,rgba(200,194,207,0.5)_30%,rgba(200,194,207,1)_50%,rgba(200,194,207,0.5)_70%,rgba(200,194,207,0.5)_100%)] bg-clip-text [font-family:'KHTeka-Regular',Helvetica] text-2xl font-normal leading-[28.8px] text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Fiddle-dee-dee
            </span>
          </span>
        </div>
        <nav aria-label="Footer navigation" className="pt-[31.99px]">
          <ul className="grid grid-cols-3 items-center pb-[101.01px]">
            {primaryLinks.map((link, index) => (
              <li
                key={link}
                className={
                  index === 0
                    ? "text-left"
                    : index === 1
                      ? "text-center"
                      : "text-right"
                }
              >
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto p-0 [font-family:'KHTeka-Regular',Helvetica] text-[clamp(2.6rem,7.2vw,101px)] font-normal leading-[0.9723] tracking-[-0.02em] text-[#101214] hover:bg-transparent hover:text-[#101214] focus-visible:ring-[#101214]"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <nav
          aria-label="Social links"
          className="flex justify-center pb-[101.01px]"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-[19.2px] gap-y-2">
            {socialLinks.map((link) => (
              <li key={link}>
                <Button
                  type="button"
                  variant="ghost"
                  className="h-auto p-0 [font-family:'KHTeka-Regular',Helvetica] text-lg font-normal leading-[21.6px] text-[#101214] hover:bg-transparent hover:text-[#101214] focus-visible:ring-[#101214]"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-3 items-center pb-[0.71px] [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px]">
          <Button
            type="button"
            variant="ghost"
            className="h-auto justify-self-start p-0 text-[13.5px] font-normal leading-[13.5px] text-[#101214] hover:bg-transparent hover:text-[#101214] focus-visible:ring-[#101214]"
          >
            COOKIE PREFERENCES
          </Button>
          <p className="justify-self-center whitespace-nowrap">©2026</p>
          <p className="justify-self-end whitespace-nowrap">P. 4 04</p>
        </div>
      </div>
    </footer>
  );
};
