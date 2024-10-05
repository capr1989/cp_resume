import React from "react";
export const Hero = () => {
  return (
    <section className="flex items-center mt-28 mb-10 ">
      <div className="basis-[100%]">
        <div className="basis-[100%] m-auto ">
          <h1 className="text-4xl font-extrabold text-left mb-1">
            Hello world: I'm Carlos 👋
          </h1>
        </div>
        <div className="basis-[100%] m-auto ">
          <p className="text-2xl">
            Software Engineer turned Entrepreneur. I love building things and
            helping people. Very active on Twitter.
          </p>
        </div>
      </div>
      <div className="  basis-[100%] h-[100%]">
        <img
          src="/images/mi_foto.jpg"
          className="size-36  rounded-full object-cover m-auto"
          alt="Carlos Pretto"
        />
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
