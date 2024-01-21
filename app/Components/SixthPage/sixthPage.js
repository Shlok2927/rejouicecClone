import React, { useLayoutEffect, useState } from "react";
import "./sixthPage.css";
import gsap from "gsap";

const sixthPage = () => {
  let animationRestarted = true;
  const sizes = [
    "24%",
    "20%",
    "24%",
    "70%",
    "30%",
    "10%",
    "60%",
    "50%",
    "45%",
    "43%",
  ];

  let mouseEnter = (value, size) => {
    gsap.fromTo(
      value,
      { y: 15, width: 0 + "%", border: "1px solid white" },
      {
        y: 15,
        width: size,
        duration: 0.8,
        scaleX: 1,
        transformOrigin: "left",
        border: "1px solid white",
      }
    );
  };
  let mouseLeave = (value, size) => {
    gsap.to(value, {
      width: size,
      scaleX: 0,
      transformOrigin: "right",
      // border: "0px solid black",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  const animatedSixth = () => {
    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#sixthContainer",
        start: "-100px 600px",
        end: "300px center",
      },
    });
    timeline.fromTo(
      "#sixthContainer",
      {
        y: 40,
      },
      {
        y: 0,
        duration: 0.8,
      },
      0
    );
    timeline.fromTo(
      "#sixthContainer span",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "Power2.easeIn",
      },
      1
    );
    timeline.to("#sixthBottom span", {
      y: 120,
      stagger: 0.1,
      duration: 1,
    });
    ("=-0.5");
  };
  const checkScrollAndRestart = () => {
    const scrollPosition = window.scrollY;
    const startPoint = 3180;
    const endPoint = 5000;
    if (
      scrollPosition > startPoint &&
      scrollPosition < endPoint &&
      !animationRestarted
    ) {
      animatedSixth();
      animationRestarted = true;
    } else if (scrollPosition <= startPoint || scrollPosition >= endPoint) {
      animationRestarted = false;
    }
  };

  useLayoutEffect(() => {
    let listItems = document.querySelectorAll(".hoverClass");
    const handleMouseEnter = (element, index) => {
      return () => {
        mouseEnter(element.previousElementSibling, sizes[index]);
      };
    };

    const handleMouseLeave = (element, index) => {
      return () => {
        mouseLeave(element.previousElementSibling, sizes[index]);
      };
    };
    listItems.forEach((element, index) => {
      element.addEventListener("mouseenter", handleMouseEnter(element, index));
      element.addEventListener("mouseleave", handleMouseLeave(element, index));
    });
    checkScrollAndRestart();
    window.addEventListener("scroll", checkScrollAndRestart);
    return () => {
      window.removeEventListener("scroll", checkScrollAndRestart);
    };
  }, []);
  return (
    <>
      <section id="sixthContainer">
        <div id="sixthTop">
          <div id="sixthTopLeft">
            <span id="sixthTopLeftTop">Relax. We've got you. </span>
            <span id="sixthTopLeftBottom">
              <button>Take a seat</button>
            </span>
          </div>
          <div id="sixthTopRight">
            <span id="sixthTopRightLeft">
              <ul>
                <li>
                  <div></div>
                  <span className="hoverClass">Home</span>
                </li>
                <li>
                  <div></div>
                  <span className="hoverClass">Work</span>
                </li>
                <li>
                  <div></div>
                  <span className="hoverClass">About</span>
                </li>
                <li>
                  <div></div>
                  <span className="hoverClass">Services & Models</span>
                </li>
                <li>
                  <div></div>
                  <span className="hoverClass">Contact</span>
                </li>
              </ul>
            </span>
            <span id="sixthTopRightRight">
              <ul>
                <li>
                  <div></div>
                  <span className="hoverClass">X</span>
                  <span className="arrow">
                    <span>→</span>
                  </span>
                </li>
                <li>
                  <div></div>
                  <span className="hoverClass">Instagram</span>
                  <span className="arrow">→</span>
                </li>
                <li>
                  <div></div>
                  <span className="hoverClass">LinkedIn</span>{" "}
                  <span className="arrow">→</span>
                </li>
              </ul>
            </span>
            <span id="sixthTopRightBottom"></span>
          </div>
        </div>
        <div id="sixthCenter">
          <div id="sixthCenterLeft">
            <span id="sixthCenterLeftTop">San Diego—California</span>
            <span id="sixthCenterLeftBottom">Paris—France</span>
          </div>
          <div id="sixthCenterRight">
            <div></div>
            <span id="sixthCenterRightLeft" className="hoverClass">
              biz@rejouice.com
            </span>
            <span id="sixthCenterRightRight">
              ©2023 <div></div>
              <span className="hoverClass">legal</span>
            </span>
          </div>
        </div>
        <div id="sixthBottom">
          <span>r</span>
          <span>e</span>
          <span>j</span>
          <span>o</span>
          <span>u</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </div>
      </section>
    </>
  );
};

export default sixthPage;
