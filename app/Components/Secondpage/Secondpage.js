"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../../../node_modules/locomotive-scroll/dist/locomotive-scroll.css";
import "./SecondPage.css";

const Secondpage = () => {
  const count = 0;
  gsap.registerPlugin(ScrollTrigger);
  let animationRestarted = false;

  const animatedSecond = () => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#secondPage",
        start: "-100px 600px",
        end: "400px center",
      },
    });

    timeline.fromTo(
      "#secondemptyspace",
      { width: 14 + "vw" },
      { duration: 1.5, width: 92 + "vw" },
      "-=.5"
    );

    timeline.fromTo(
      "#secondNavigation span",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "-=.2"
    );

    timeline.fromTo(
      "#secondCenter span",
      { opacity: 0, y: 50, borderBottom: "1px solid black" },
      {
        opacity: 1,
        y: 10,
        stagger: 0.15,
        ease: "power1.in",
        borderBottom: "0px solid black",
      },
      "-=.5"
    );
  };

  const checkScrollAndRestart = () => {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    const startPoint = 80;
    const endPoint = 500;
    if (
      scrollPosition > startPoint &&
      scrollPosition < endPoint &&
      !animationRestarted
    ) {
      animatedSecond();
      animationRestarted = true;
      console.log("restarted");
    } else if (scrollPosition <= startPoint || scrollPosition >= endPoint) {
      animationRestarted = false;
      console.log("hehe");
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
      <section id="secondPage">
        <nav id="secondNavigation">
          <span id="secondNavigationLeft">
            Full-service creative agency.
            <br />
            Two engagement models.
          </span>
          <div id="secondemptyspace"></div>
          <span id="secondNavigationRight">Paris&San Diego</span>
        </nav>
        <div id="secondCenter">
          <span>We are a digital brand accelerator. We</span>
          <br />
          <span>design, develop, and scale market-defining</span>
          <br />
          <span>brands by unlocking their hidden potential.</span>
          <br />
          <span>Choose full cash compensation or offset up</span>
          <br />
          <span>to 50% of our fees for equity in your company. Your</span>
          <br />
          <span>vision, your decision.</span>
        </div>
      </section>
    </>
  );
};

export default Secondpage;
