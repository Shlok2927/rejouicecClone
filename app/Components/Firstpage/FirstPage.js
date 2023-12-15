"use client";
import React from "react";
import "./FirstPage.css"; // Use a relative path
const FirstPage = () => {
  let mover = document.querySelector("#firstCursor");
  let followMe = (dets) => {
    console.log("Hi I am moving");
    console.log(dets.clientX);
    mover.style.border = "2px solid red";
  };
  return (
    <>
      <section id="first_page" onMouseMove={followMe}>
        <div id="firstCursor">Play Reel</div>
        <nav id="firstNavigation">
          <span id="firstLeftNavigation">The Venture Agency.</span>
          <div id="firstRightNavigation">
            <div id="emptyspace"></div>
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
