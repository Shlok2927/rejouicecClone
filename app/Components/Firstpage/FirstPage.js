"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";
import "./FirstPage.css"; // Use a relative path
const FirstPage = () => {
  // basic approach will be configured using normal js
  // let followMe = (dets) => {
  //   let mover = document.querySelector("#firstCursor");
  //   mover.style.left = dets.clientX + "px";
  //   mover.style.top = dets.clientY + "px";
  // };
  let followMe = (dets) => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    let cursorX = dets.clientX;
    let cursorY = dets.clientY;
    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    if (cursorX < centerX) {
      cursorX = cursorX - (centerX - cursorX) / 5;
    } else if (cursorX > centerX) {
      cursorX = cursorX + (cursorX - centerX) / 5;
    }

    if (cursorY < centerY) {
      cursorY = cursorY - (centerY - cursorY) / 5;
    } else if (cursorY > centerY) {
      cursorY = cursorY + (cursorY - centerY) / 5;
    }

    gsap.to("#firstCursor", {
      x: cursorX,
      y: cursorY,
    });
  };
  return (
    <>
      {/* <section id="first_page" onMouseMove={followMe}> */}
      <section id="firstPage" onMouseMove={followMe}>
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
