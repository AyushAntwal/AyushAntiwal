"use client";
import React, { use, useEffect } from "react";
import "./components.css";
import Image from "next/image";
import logo from "../assets/images/antiwal.png";
import avatar from "../assets/images/avatar.png";
import Link from "next/link";
function Navbar() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <nav className="navbar-fixed">
        <div className="flex justify-between bg-transparent items-center px-5">
          <div className="p-3">
            <Image src={logo} alt="logo" height={50} />
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-5 text-white cursor-pointer nav-list justify-evenly ">
              <li>Home</li>
              <li>About</li>
              <li>Codes</li>
              <li>Contact</li>
            </ul>
          </div>
          <div
            className="cursor-pointer pb-2 md:hidden"
            onClick={() => {
              setShow(!show);
            }}
          >
            <svg className="h-100 m-auto" xmlns="http://www.w3.org/2000/svg" height="40" fill="#fff" viewBox="0 -960 960 960" width="40">
              <path d="M120-100v-40h900v90H120Zm0-240v-80h900v90H120Zm0-240v-120h900v90H120Z" />
            </svg>
          </div>

          {/* <div className="hidden cursor-pointer  lg:block">
            <Image
              src={avatar}
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div> */}
        </div>
        <div className="w-100 mobile-navbar md:hidden" hidden={!show}>
          <ul className=" p-2 text-white">
            <Link href="#home" scroll={true}>
              <li>Home</li>
            </Link>
            <Link href={"#"}>
              <li>About</li>
            </Link>
            <Link href={"#"}>
              <li>Codes</li>
            </Link>
            <Link href="#contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
