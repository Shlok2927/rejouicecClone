"use client";
import React from "react";
import "./FirstPage.css"; // Use a relative path
const FirstPage = () => {
  return (
    <>
      <section id="first_page">
        hehe
        <video width="100vw" height="100vh" autoPlay muted loop>
          <source src="/demo.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
};

export default FirstPage;
