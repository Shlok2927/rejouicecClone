"use client";
import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FirstPage from "./Components/Firstpage/FirstPage";
import Secondpage from "./Components/Secondpage/Secondpage";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  return (
    <>
      <FirstPage />
      <Secondpage />
    </>
  );
};

export default page;
