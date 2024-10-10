import { data } from "../cvs/data-analyst/cv";

const { about } = data;
export const About = () => {
  return (
    <div className="">
      <h2 className="text-xl font-bold">About</h2>
      <p className=" text-gray-500"> {about}</p>
    </div>
  );
};
