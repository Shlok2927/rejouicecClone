"use client";
import React, { useEffect } from "react";
import FirstPage from "./Components/Firstpage/FirstPage";
import Secondpage from "./Components/Secondpage/Secondpage";

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
      <Secondpage />
    </>
  );
};

export default page;
