import React from "react";
import "./pages.css";
import Image from "next/image";
import aws from "@/assets/images/tools/icon _AWS_.png";
import angular from "@/assets/images/tools/icon_angular_.png";
import bootstrap from "@/assets/images/tools/icon_bootstrap.png";
import mysql from "@/assets/images/tools/icon _mysql.png";
import nextjs from "@/assets/images/tools/icon_nextjs_.png";
import mongo from "@/assets/images/tools/icon_mongos.png";
import nodejs from "@/assets/images/tools/icon_nodejs.png";
// import react from "@/assets/images/tools/icon_nextjs_.png";
// import tailwind from "@/assets/images/tools/icon_tailwind.png";
// import typescript from "@/assets/images/tools/icon_typescript.png";
// import vercel from "@/assets/images/tools/icon_vercel.png";
// import vscode from "@/assets/images/tools/icon_vscode.png";

function Tools() {
  return (
    <div className="tools">
      <svg viewBox="0 0 1440 96" fill="red" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path
            d="M0 56.0629L60 52.9678C120 49.6391 240 43.7992 360 37.3753C480 30.9514 600 25.1115 720 37.3753C840 49.6391 960 81.1745 1080 80.9993C1200 81.1745 1320 49.6391 1380 34.2802L1440 18.6876V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V56.0629Z"
            fill="#1A2238"
          />
        </g>
      </svg>
      <div className="container-main py-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-3 gap-10">
        <Image height={50} src={aws} alt="" />
        <Image height={50} src={angular} alt="" />
        <Image height={50} src={bootstrap} alt="" />
        <Image height={50} src={mysql} alt="" />
        <Image width={50} src={mongo} alt="" />
        <Image height={50} src={nodejs} alt="" />
        <Image height={50} src={aws} alt="" />
        <Image height={50} src={angular} alt="" />
        <Image height={50} src={bootstrap} alt="" />
        <Image height={50} src={mysql} alt="" />
        <Image width={50} src={mongo} alt="" />
        <Image height={50} src={nodejs} alt="" />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 75" fill="none">
        <path
          d="M1440 23.3977L1380 26.3018C1320 29.4251 1200 34.9045 1080 40.9318C960 46.9592 840 52.4386 720 40.9318C600 29.4251 480 -0.163704 360 0.000679016C240 -0.163704 120 29.4251 60 43.8359L0 58.4659V76H60C120 76 240 76 360 76C480 76 600 76 720 76C840 76 960 76 1080 76C1200 76 1320 76 1380 76H1440V23.3977Z"
          fill="#1A2238"
        />
      </svg>
    </div>
  );
}

export default Tools;
