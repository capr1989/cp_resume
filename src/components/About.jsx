import { getCollection } from "astro:content";

const cvCollection = await getCollection("cvs");

const data_analyst = cvCollection[0].data;

const { about } = data_analyst;
export const About = () => {
  return (
    <div className="">
      <h2 className="text-xl font-bold">About</h2>
      <p className=" text-gray-500"> {about}</p>
    </div>
  );
};
