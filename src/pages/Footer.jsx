import React from "react";
import FoLinks from "../components/FoLinks";
import speedy from "../assets/speedy.png";
function Footer() {
  return (
    <div className="w-full flex justify-evenly items-center bg-black py-10  gap-10">
      <img src={speedy} className="h-20 md:h-30 rounded-full" />
      <FoLinks
        title={"Speedy Skills"}
        l1={"about us"}
        l2={"contact us"}
        l3={"Policy"}
      />
      <FoLinks
        title={"Products"}
        l1={"about us"}
        l2={"contact us"}
        l3={"Policy"}
      />
      <FoLinks
        title={"Links"}
        l1={"about us"}
        l2={"contact us"}
        l3={"Policy"}
      />
    </div>
  );
}

export default Footer;
