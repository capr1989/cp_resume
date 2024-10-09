import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Job = () => {
  {
    /* (browser support) if (document.startViewTransition) {
    // (check for browser support)
    document.addEventListener("click", function (event) {
      if (event.target.matches("summary")) {
        event.preventDefault(); // (we'll toggle the element ourselves)
        const details = event.target.closest("details");
        document.startViewTransition(() => details.toggleAttribute("open"));
      }
    });
  }
     */
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold">Experience</h2>
      <Accordion type="single" collapsible className="">
        <AccordionItem className="" value="item-1">
          <AccordionTrigger className="flex basis-full justify-between">
            <div className="flex basis-[90px]">
              <img
                src="../../public/images/images.png"
                alt=""
                className="size-12  rounded-full object-cover border border-grey-400"
              />
            </div>

            <div className="flex justify-between  basis-full items-center">
              <div className="text-left">
                <span>
                  <h3 className="font-bold">
                    <p>Banco general</p>
                  </h3>
                </span>
                <span className="font-light text-sm">
                  <p>Banco general</p>
                </span>
              </div>
              <span className="font-light text-sm text-gray-500 mr-1">
                <p>May 2021 - Oct 2022</p>
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="">
            <p className="text-left ml-[76px]">
              Lorem ipsum dolor sit amet consectetur.
            </p>{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
