import React from "react";

function FoLinks({ title, l1, l2, l3 }) {
  return (
    <div className="text-white flex flex-col text-center md:text-start">
      <h1 className="text-lg text-blue-300">{title}</h1>
      <p>{l1}</p>
      <p>{l2}</p>
      <p>{l3}</p>
    </div>
  );
}

export default FoLinks;
