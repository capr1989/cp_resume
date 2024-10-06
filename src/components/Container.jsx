export const Container = (props) => {
  return (
    <div className="flex flex-col m-auto md:basis-[48%] lg:basis-[35%]  px-4 md:px-0">
      {props.children}
    </div>
  );
};
