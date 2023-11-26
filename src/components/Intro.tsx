import React from "react";
import "./components.css";
import avatar from "@/assets/images/man_with_laptop.png";
import Image from "next/image";
function Intro() {
  return (
    <>
      <div>
        <div className="intro">
          <div className="w-100 flex justify-center items-center">
            <div className="flex flex-col translate-x-10 lg:translate-x-10 m-0 p-0 gap-5">
              <h1 className="text-5xl">Hi,</h1>
              <h1 className="text-5xl">I'm</h1>
              <h1 className="text-7xl text-highlight ">Ayush</h1>
              <h1 className="text-7xl text-highlight">Antiwal</h1>
              <h1 className="text-4xl whitespace-nowrap">Web Developer</h1>
            </div>
            <Image src={avatar} className="intro_avatar hidden md:block -translate-x-10" alt="Person with laptop" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Intro;
