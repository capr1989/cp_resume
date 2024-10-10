import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { data } from "../cvs/data-analyst/cv";

export const Experience_Education = ({ jobs, name }) => {
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

  return jobs ? (
    <div className="mt-10">
      <h2 className="text-xl font-bold">{name}</h2>
      <Accordion type="single" collapsible className="">
        {data.experience.map((experience, index) => (
          <AccordionItem className="" value={"item-" + index} key={index}>
            <AccordionTrigger className="flex basis-full justify-between h-auto py-3">
              <div className="flex basis-[90px]">
                <img
                  src={experience.company_logo}
                  alt={experience.company}
                  className="size-12  rounded-full object-cover border border-grey-400"
                />
              </div>

              <div className="flex justify-between  basis-full items-center">
                <div className="text-left">
                  <span>
                    <h3 className="font-bold">
                      <p>{experience.company}</p>
                    </h3>
                  </span>
                  <span className="font-light text-sm">
                    <p>{experience.position}</p>
                  </span>
                </div>
                <span className="font-light text-sm text-gray-500 mr-1">
                  <p>{experience.date}</p>
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="">
              <p className="text-left ml-[76px]">
                <p>{experience.description}</p>{" "}
              </p>{" "}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ) : (
    <div className="mt-10">
      <h2 className="text-xl font-bold">{name}</h2>
      {data.experience.map((experience, index) => (
        <div
          value={"item-" + index}
          key={index + 1}
          className="flex basis-full justify-between h-auto py-3"
        >
          <div className="flex basis-[90px]">
            <img
              src={experience.company_logo}
              alt={experience.company}
              className="size-12  rounded-full object-cover border border-grey-400"
            />
          </div>

          <div className="flex justify-between  basis-full items-center">
            <div className="text-left">
              <span>
                <h3 className="font-bold">
                  <p>{experience.company}</p>
                </h3>
              </span>
              <span className="font-light text-sm">
                <p>{experience.position}</p>
              </span>
            </div>
            <span className="font-light text-sm text-gray-500 mr-1">
              <p>{experience.date}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
