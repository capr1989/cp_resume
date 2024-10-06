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
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex justify-between basis-full items-center">
            <div className="flex gap-2 items-center">
              <span>
                <img
                  src="../../public/images/images.png"
                  alt=""
                  className="size-12  rounded-full object-cover border border-grey-400"
                />
              </span>
              <div className="">
                <span>
                  <h3 className="text-left">Banco general</h3>
                </span>
                <span className="">Software Engineer</span>
              </div>
            </div>
            <span className="">May 2021 - Oct 2022</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="h-auto">
          <p className="text-sm ml-[55px] ">
            Lorem ipsum dolor sit amet consectetur.
          </p>{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
