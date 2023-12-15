import React, { useEffect } from "react";
import "./SecondPage.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
const Secondpage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let animate = gsap.timeline();
    animate.to("#secondemptyspace", {
      scrollTrigger: {
        trigger: "#firstPage",
        start: "200px top",
        end: "650px 300px",
        scrub: true,
        // markers: true,
      },
      width: "95vw",
    });
  }, []); // Empty dependency array ensures this effect runs once after initial render

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
      </section>
    </>
  );
};

export default Secondpage;
