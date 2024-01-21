import React, { useLayoutEffect } from "react";
import "./loader.css";
import gsap from "gsap";

const Loader = () => {
  const refresh = () => {
    let timeline = gsap.timeline();
    timeline.to(
      "#loaderContainer h3",
      {
        x: -60,
        duration: 0.8,
        stagger: -0.2,
      },
      0
    );
    timeline.to(
      "#loaderContainer h3",
      {
        x: -200,
        duration: 1,
        stagger: 0.2,
        opacity: 0,
      },
      1
    );
    timeline.to(
      "#loaderContainer ",
      {
        opacity: 0,
        duration: 0.3,
      },
      2
    );
    timeline.to(
      "#loaderContainer ",
      {
        display: "none",
      },
      3
    );
    timeline.to(
      "#firstCenterText span ",
      {
        y: 120,
        stagger: 0.1,
        duration: 1,
      },
      2
    );
  };

  useLayoutEffect(() => {
    refresh();
  }, []);
  return (
    <>
      <section id="loaderContainer">
        <h3>Tomorrow's</h3>
        <h3>Brand,</h3>
        <h3>Today ™️</h3>
      </section>
    </>
  );
};

export default Loader;
