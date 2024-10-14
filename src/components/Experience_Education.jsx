import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Experience_Education = ({
  jobs,
  name,
  experience = {},
  education = {},
}) => {
  return jobs ? (
    <div className="mt-10">
      <h2 className="text-xl font-bold">{name}</h2>
      <Accordion type="single" collapsible className="">
        {experience.map((experience, index) => (
          <AccordionItem className="" value={"item-" + index} key={index}>
            <AccordionTrigger className="flex basis-full justify-between h-auto py-3">
              <div className="flex basis-[90px]">
                <img
                  src={experience.company_logo.url}
                  alt={experience.company_logo.alt}
                  width="48px"
                  height="48px"
                  className="size-12  rounded-full object-cover border border-grey-400"
                  loading="lazy"
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
              <ul className="text-left ml-[76px]">
                {experience.descriptions.map((description, index) => (
                  <li className="list-disc text-lg md:text-sm" key={index}>
                    <p className="">{description}</p>
                  </li>
                ))}
              </ul>{" "}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  ) : (
    <div className="mt-10">
      <h2 className="text-xl font-bold">{name}</h2>
      {education.map((education, index) => (
        <div
          value={"item-" + index}
          key={index + 1}
          className="flex basis-full justify-between h-auto py-3"
        >
          <div className="flex basis-[90px]">
            <img
              src={education.university_logo.url}
              alt={education.university_logo.alt}
              width="48px"
              height="48px"
              className="size-12  rounded-full object-cover border border-grey-400"
              loading="lazy"
            />
          </div>

          <div className="flex justify-between  basis-full items-center">
            <div className="text-left">
              <span>
                <h3 className="font-bold">
                  <p>{education.school}</p>
                </h3>
              </span>
              <span className="font-light text-sm">
                <p>{education.degree}</p>
              </span>
            </div>
            <span className="font-light text-sm text-gray-500 mr-1">
              <p>{education.date}</p>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
