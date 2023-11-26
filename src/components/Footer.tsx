import React from "react";

function Footer() {
  return (
    <div className="container-main p-10 flex align-top justify-between">
      <div className="text-[#daf55471]">
        <h1 className="text-1 underline">Contact</h1>
        <h1 className="text-1xl">Ayush Antiwal</h1>
        <h1 className="text-1xl">
          <a href="mailto:ayukumar1010@gmail.com">ayukumar1010@gmail.com</a>
        </h1>
        <h1 className="text-1xl">+91-6397241842</h1>
      </div>
      <div className="w-0.5 scale-y-150 bg-[#ffffaa59]"></div>
      <div className="text-[#c1c1bcd5]">
        <h1 className="text-1 underline">Work Place</h1>
        <h1 className="text-1xl">Ghaziabad, Uttar Pradesh</h1>
        <h1 className="text-1xl">India</h1>
      </div>
    </div>
  );
}

export default Footer;
