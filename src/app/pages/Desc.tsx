import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/kit-robo-advisor-working-on-holographic-screen.png";
function Desc() {
  return (
    <div className="container-main">
      <div className=" border shadow-lg rounded-lg m-2 md:m-0 grid grid-cols-1 md:grid-cols-2 content-center items-center text-center">
        <div className="text-xs p-3 text-white">
          step into my digital realm, where the pixels and possibilities are boundless. Explore, be inspired, and let's embark on a journey to bring
          your digital dreams to life. Together, we'll create the web of the future, where innovation knows no bounds.
        </div>
        <div>
          <Image src={img1} className="m-auto" alt="roboat" />
        </div>
      </div>
    </div>
  );
}

export default Desc;
