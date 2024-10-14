import { Badge } from "@/components/ui/badge";

export const Skills = ({ skills }) => {
  return (
    <div className="mt-10">
      <span>
        {" "}
        <h2 className="text-xl font-bold mb-2">Skills</h2>
      </span>
      <div className=" flex flex-wrap ">
        {skills.map((skill, index) => (
          <Badge className="mr-2 mb-1" key={index}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
