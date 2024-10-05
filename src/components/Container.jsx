import React from "react";

export const Container = (props) => {
  return (
    <div className="flex flex-col m-auto basis-[100%] md:basis-[45%]">
      {props.children}
    </div>
  );
};
