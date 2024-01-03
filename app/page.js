"use client";
import React, { useEffect } from "react";
import FirstPage from "./Components/Firstpage/FirstPage";
import SecondPage from "./Components/Secondpage/Secondpage";
import ThirdPage from "./Components/Thirdpage/ThirdPage";
const page = () => {
  useEffect(() => {
    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        const locomotiveScroll = new LocomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
      } catch (error) {
        console.error("Error loading locomotive-scroll:", error);
      }
    })();
  }, []);
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </>
  );
};

export default page;
