import React from "react";
import { Badge } from "@/components/ui/badge";

export const Skills = ({ data }) => {
  console.log(data, "data");
  return (
    <div className="mt-10">
      <span>
        {" "}
        <h2 className="text-xl font-bold">Skills</h2>
      </span>
      <div className=" flex flex-wrap ">
        {data.skills.map((skill, index) => (
          <Badge className="mr-2" key={index}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};
