import React from "react";
export const Hero = () => {
  return (
    <section className="mx-2 ">
      <div className="mt-28 flex gap 2 ">
        <div className="flex-col flex-1 flex">
          {" "}
          <h1 className="text-4xl font-extrabold my-5">
            Hello world: I'm Carlos 👋
          </h1>
          <p className="text-2xl">
            Software Engineer turned Entrepreneur. I love building things and
            helping people. Very active on Twitter.
          </p>
        </div>
        <span className=" ">
          <img
            src="/images/mi_foto.jpg"
            className="size-40 rounded-full object-cover  aspect-square"
            alt="Carlos Pretto"
          />
        </span>
      </div>
    </section>
  );
  {
    /* wide screen

    <section className="  text-left flex flex-col items-center mt-28 min-h-96">
          <div className="w-[40%] min-h-80">
            <img
              src="/images/mi_foto.jpg"
              className="w-40 h-40 rounded-full object-cover float-right mr-8"
              alt="Carlos Pretto"
            />
            <h1 className="text-4xl font-extrabold text-left my-5 ">
              Hello world: I'm Carlos Pretto! 👋
            </h1>
            <p className="text-2xl clear-start">
              Software Engineer turned Entrepreneur. I love building things and
              helping people. Very active on Twitter.
            </p>
          </div>
        </section>
      
      
      */
  }
};
