import React, { useEffect } from "react";
import "./sixthPage.css";
import gsap from "gsap";
const sixthPage = () => {
  const sizes = [
    "7%",
    "6.8%",
    "7%",
    "22%",
    "10%",
    "10%",
    "60%",
    "50%",
    "45%",
    "43%",
  ];
  useEffect(() => {
    let listItems = document.querySelectorAll(".hoverClass");
    console.log(listItems);
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
  }, []);

  let mouseEnter = (value, size) => {
    gsap.fromTo(
      value,
      { y: 20, width: 0 + "%", border: "1px solid white" },
      {
        y: 20,
        width: size,
        duration: 0.4,
        scaleX: 1,
        transformOrigin: "left",
        border: "1px solid white",
      }
    );
  };
  let mouseLeave = (value, size) => {
    gsap.to(value, {
      width: size,
      transformOrigin: "50%",
      border: "0px solid black",
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  let timeline = gsap.timeline("#sixthContainer", {
    ScrollTrigger,
  });
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
