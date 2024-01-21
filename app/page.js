"use client";
import React, { useEffect } from "react";
import Loader from "./Components/loader/Loader";
import FirstPage from "./Components/Firstpage/FirstPage";
import SecondPage from "./Components/Secondpage/Secondpage";
import ThirdPage from "./Components/Thirdpage/ThirdPage";
import FourthPage from "./Components/Fourthpage/FourthPage";
import FifthPage from "./Components/Fifthpage/FifthPage";
import SixthPage from "./Components/SixthPage/sixthPage";
import "swiper/css";
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
      <Loader />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
    </>
  );
};

export default page;
