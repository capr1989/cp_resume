export const Hero = ({ title, subTitle, image }) => {
  console.log(image.url);
  return (
    <div>
      <section className="flex mt-28 ">
        <div className=" flex-col ">
          <div className="  ">
            <h1 className="text-3xl font-bold text-left mb-1 tracking-tighter">
              {title}
            </h1>
          </div>

          <div className="  ">
            <p className="text-2xl text-left opacity-90">{subTitle}</p>
          </div>
        </div>
        <div className=" flex basis-[30%]  shrink-0  h-fit  justify-end">
          <img
            src={image.url}
            className="size-28 rounded-full object-cover shrink-0"
            alt={image.alt}
            height="112px"
            width="112px"
          />
        </div>
      </section>
    </div>
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
