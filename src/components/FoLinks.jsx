import React from "react";

function FoLinks({ title, l1, l2, l3 }) {
  return (
    <div className=" text-white text-sm  flex flex-col text-center md:text-start md:text-base ">
      <h1 className="text-base text-blue-300 md:text-lg">{title}</h1>
      <p>{l1}</p>
      <p>{l2}</p>
      <p>{l3}</p>
    </div>
  );
}

export default FoLinks;
