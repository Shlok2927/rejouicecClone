"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../Thirdpage/ThirdPage.css";
const ThirdPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  let animationRestarted = false;

  const animatedthird = () => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#thirdContainer",
        start: "100px center",
        end: "280px center",
      },
    });
    timeline.fromTo(
      "#thirdCenterLink span",
      { opacity: 0, y: 50, borderBottom: "0px solid black" },
      {
        opacity: 1,
        y: 0,
        ease: "power1.in",
        borderBottom: "4px solid black",
        stagger: 0.15,
      },
      "-=.15"
    );
  };
  useLayoutEffect(() => {
    animatedthird();
  }, []);
  return (
    <>
      <div id="thirdContainer">
        <div id="thirdCenterTop">
          Agency & Venture <button>Models</button>
          <img src="./right-down.png" />
        </div>
        <div id="thirdCenterLink">
          <div id="dotContainer"></div>
          <span id="thirdCenterLinkTop">Explore our services</span>
          <span id="thirdCenterLinkBottom">& engagement models</span>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
