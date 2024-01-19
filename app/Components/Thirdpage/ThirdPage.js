"use client";
import React, { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../Thirdpage/ThirdPage.css";
const ThirdPage = () => {
  let animationRestarted = false;
  gsap.registerPlugin(ScrollTrigger);
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
      { opacity: 0, y: 40, borderBottom: "0px solid black" },
      {
        opacity: 1,
        y: 0,
        ease: "power1.in",
        borderBottom: "4px solid black",
        stagger: 0.1,
      },
      "-=.15"
    );
  };
  const mouse = () => {
    gsap.to(".animation", {
      x: 1200,
      immediateRender: true,
      autoAlpha: 1,
      onComplete: revertToOriginal,
    });
    function revertToOriginal() {
      gsap.to(".animation", {
        duration: 0.01,
        x: 0,
        autoAlpha: 1,
      });
    }
  };
  const checkScrollAndRestart = () => {
    const scrollPosition = window.scrollY;
    const startPoint = 700;
    const endPoint = 1900;
    if (
      scrollPosition > startPoint &&
      scrollPosition < endPoint &&
      !animationRestarted
    ) {
      animatedthird();
      animationRestarted = true;
    } else if (scrollPosition <= startPoint || scrollPosition >= endPoint) {
      animationRestarted = false;
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", checkScrollAndRestart);

    return () => {
      window.removeEventListener("scroll", checkScrollAndRestart);
    };
  }, []);

  return (
    <>
      <div id="thirdContainer">
        <div id="thirdCenterTop">
          Agency & Venture <button>Models</button>
          <img src="./right-down.png" />
        </div>
        <div id="thirdCenterLink" onMouseEnter={mouse} onMouseOut={mouse}>
          <div id="dotContainer" className="animation"></div>
          <span id="thirdCenterLinkTop">Explore our services</span>
          <span id="thirdCenterLinkBottom">& engagement models</span>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
