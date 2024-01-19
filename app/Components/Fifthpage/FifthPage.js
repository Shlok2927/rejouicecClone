"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./FifthPage.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import gsap from "gsap";

export default function App() {
  let mouseEnter = () => {
    gsap.fromTo(
      "#fifthTopHeadingRight b div",
      { y: 30, width: 0 + "%", border: "1px solid black" },
      {
        y: 30,
        width: 94 + "%",
        duration: 0.8,
        scaleX: 1,
        transformOrigin: "left",
        border: "1px solid black",
      }
    );
  };
  let mouseLeave = () => {
    gsap.to("#fifthTopHeadingRight b div", {
      width: 94 + "%",
      y: 30,
      scaleX: 0,
      transformOrigin: "100%",
      duration: 0.5,
      ease: "power2.inOut", // Add easing for a smoother animation
    });
  };

  return (
    <>
      <section id="fifthContainer">
        <div id="fifthTopHeading">
          <span id="fifthTopHeadingLeft">Get in Touch</span>
          <span id="fifthTopHeadingRight">
            <img src="../right-down.png" />
            <b onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
              <div></div>
              Contact
            </b>
          </span>
        </div>
        <div id="fifthSwiperContainer">
          <Swiper
            spaceBetween={20}
            slidesPerView={4.6}
            autoplay={{
              disableOnInteraction: true,
              delay: 0,
            }}
            speed={4000}
            freeMode={true}
            loop={true}
            modules={[Autoplay, FreeMode, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048"
              />
              <SwiperSlide>
                <img
                  className="slidingImage"
                  src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048"
                />
              </SwiperSlide>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/a19d8427-5008-4dce-afa4-5d66118a0463_d7a851a9d8e2eb36cf93ffe4a6fa3701.jpeg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/36450525-8a76-4a44-b6d4-59c00ad0b50d_RJ-Home-OuraRing-x2.png?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/d3289122-3f25-43f3-b140-11a342a484d7_Mask+group+%2838%29.jpg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/8059f4af-8ba3-4e5f-a14b-ba5ed760963f_Mask+group+%2839%29.jpg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slidingImage"
                src="https://images.prismic.io/rejouice/57ac2830-96e7-4174-a104-b384126bf98c_fec955552eb681ff6c273774515e6c2e.jpg?auto=compress%2Cformat&fm=webp&width=2048"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
