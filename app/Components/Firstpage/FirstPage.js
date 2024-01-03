"use client";
import React from "react";
import gsap from "gsap";
import "./FirstPage.css"; // Use a relative path
const FirstPage = () => {
  let followMe = (dets) => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    let cursorX = dets.clientX;
    let cursorY = dets.clientY;
    const centerX = innerWidth / 2;

    if (cursorX < centerX) {
      cursorX = cursorX - (centerX - cursorX) / 5;
    } else if (cursorX > centerX) {
      cursorX = cursorX + (cursorX - centerX) / 5;
    }

    gsap.to("#firstCursor", {
      x: cursorX,
      y: cursorY,
    });
  };
  let scrollEntered = () => {
    gsap.to("#firstCursor", {
      opacity: 1,
    });
  };
  let scrollLeft = () => {
    gsap.to("#firstCursor", {
      opacity: 0,
    });
  };
  return (
    <>
      {/* <section id="first_page" onMouseMove={followMe}> */}
      <section
        id="firstPage"
        onMouseMove={followMe}
        onMouseLeave={scrollLeft}
        onMouseEnter={scrollEntered}
      >
        <div id="firstCursor">Play Reel</div>
        <nav id="firstNavigation">
          <span id="firstLeftNavigation">The Venture Agency.</span>
          <div id="firstRightNavigation">
            <div id="firstemptyspace"></div>
            <span>Menu</span>
          </div>
        </nav>
        <video src="videos/demo.mp4" autoPlay muted loop></video>
        <div id="firstCenterTextContainer">
          <span id="firstCenterText">rejouice</span>
        </div>
      </section>
    </>
  );
};

export default FirstPage;
