import React from "react";
import "./components.css";
import avatar from "@/assets/images/man_with_laptop.png";
import Image from "next/image";
function Intro() {
  return (
    <div id="home" className="intro w-100 flex justify-center  items-center md:text-start ">
      <div className="flex w-100 md:2/4 text-center md:text-start flex-col m-0 p-0 gap-5">
        <h1 className="text-5xl">Hi,I'm</h1>
        <h1 className="text-7xl text-highlight ">Ayush <br/> Antiwal</h1>
        <button className="text-4xl whitespace-nowrap text-start rounded-lg">Web Developer</button>
      </div>
      <Image src={avatar} className="intro_avatar hidden md:block -translate-x-10" alt="Person with laptop" />
    </div>
  );
}
export default Intro;
