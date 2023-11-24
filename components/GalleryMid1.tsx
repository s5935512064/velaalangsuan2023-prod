"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Fancybox = dynamic(() => import("@/components/FancyboxWrap"), {
  ssr: false,
});

const image = [
  { id: 13, src: "/assets/gallery/13.webp" },
  { id: 14, src: "/assets/gallery/14.webp" },
  { id: 15, src: "/assets/gallery/15.webp" },
  { id: 16, src: "/assets/gallery/16.webp" },
  { id: 3, src: "/assets/gallery/03.webp" },
  { id: 4, src: "/assets/gallery/04.webp" },
  { id: 5, src: "/assets/gallery/05.webp" },
  { id: 6, src: "/assets/gallery/06.webp" },
  { id: 8, src: "/assets/gallery/08.webp" },
  { id: 17, src: "/assets/gallery/17.webp" },
  { id: 18, src: "/assets/gallery/18.webp" },
  { id: 19, src: "/assets/gallery/19.webp" },
  { id: 9, src: "/assets/gallery/09.webp" },
  { id: 10, src: "/assets/gallery/10.webp" },
  { id: 11, src: "/assets/gallery/11.webp" },
  { id: 12, src: "/assets/gallery/12.webp" },
];

const GalleryMid1 = () => {
  return (
    <>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          effect={"fade"}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          className="h-full w-full relative "
        >
          {image.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full h-full relative overflow-hidden"
            >
              <a
                aria-label="galley-4"
                data-fancybox="galleryMid1"
                href={item.src}
                className="w-full h-full relative"
              >
                <div className="w-full h-full relative ">
                  <Image
                    unoptimized={true}
                    quality={50}
                    src={item.src}
                    alt="gallery"
                    sizes="100vw"
                    width="0"
                    height="0"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="w-full h-full"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Fancybox>
    </>
  );
};

export default GalleryMid1;
