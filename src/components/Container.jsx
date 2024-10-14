export const Container = (props) => {
  return (
    <div className="">
      <div className=" mx-14">{props.children}</div>
    </div>
  );
  {
    /* <div className="flex flex-col m-auto md:basis-[48%] lg:basis-[35%]  px-4 md:px-0">
    {props.children}
  </div> */
  }
};
