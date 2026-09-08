import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const invitationLines = [
  "JUST ONE SMALL ACTION STANDS BETWEEN US AND",
  "GETTING ACQUAINTED. A GREAT JOURNEY BEGINS WITH",
  'THE FIRST WORD "HELLO!"',
];

export const ContactInvitationSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="contact-invitation-heading"
      className="w-full px-[19.2px] py-[75.78px]"
    >
      <div className="mx-auto flex w-full max-w-[1867px] flex-col items-center">
        <h2
          id="contact-invitation-heading"
          className="[font-family:'KHTeka-Regular',Helvetica] text-center text-[clamp(40px,4.06vw,75.8px)] font-normal leading-[1.08] tracking-[-1.52px] text-[#101214]"
        >
          Time to connect
        </h2>
        <Card className="mt-4 w-full border-0 bg-transparent shadow-none">
          <CardContent className="flex flex-col items-center p-0">
            <div className="grid w-fit grid-cols-1 grid-rows-1">
              <img
                className="col-start-1 row-start-1 mt-[18px] h-[421px] w-[337px] object-cover"
                alt="Subtract"
                src="/subtract.png"
              />
              <img
                className="col-start-1 row-start-1 ml-auto mt-[31px] mr-[11px] h-[50px] w-[50px]"
                alt="Download"
                src="/download--6--2.png"
              />
            </div>
            <p className="mt-8 max-w-[396px] text-center [font-family:'KHTekaMono-Regular',Helvetica] text-[13.5px] font-normal leading-[13.5px] text-[#101214]">
              {invitationLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <Button
              type="button"
              variant="secondary"
              aria-label="Download"
              className="mt-8 h-[61px] w-[335px] rounded-[20px] bg-white p-0 hover:bg-white"
            >
              <img className="h-9 w-9" alt="Download" src="/download-1.png" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
