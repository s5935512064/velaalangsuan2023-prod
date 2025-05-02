"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link2 from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";

import moment from "moment";

const Venders = dynamic(() => import("@components/Venders"), {
  ssr: false,
});

const HeroCarosouse = dynamic(() => import("@components/HeroCarosouse"), {
  ssr: false,
});

const PromotionCarosouse = dynamic(() => import("@components/Promotion"), {
  ssr: false,
});

const ReviewCarosouse = dynamic(() => import("@components/ReviewCard"), {
  ssr: false,
});

const GalleryBig = dynamic(() => import("@components/GalleryBig"), {
  ssr: false,
});

const GalleryMid1 = dynamic(() => import("@components/GalleryMid1"), {
  ssr: false,
});

const GalleryMid2 = dynamic(() => import("@components/GalleryMid2"), {
  ssr: false,
});

const GallerySpan = dynamic(() => import("@components/GallerySpan"), {
  ssr: false,
});

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [year, setYear] = useState(moment().year());
  const [navbarOffset, setNavbarOffset] = useState(false);
  const [navbarOffset2, setNavbarOffset2] = useState(true);

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const navbar = document.querySelector("#navbar");
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      // if (prevScrollpos > currentScrollPos) {
      //     navbar.style.top = "0";

      // } else {
      //     navbar.style.top = "-64px";
      // }

      if (prevScrollpos >= currentScrollPos) {
        setNavbarOffset2(true);
      } else {
        setNavbarOffset2(false);
      }

      if (window.pageYOffset >= 20) {
        setNavbarOffset(true);
        // setTextColor("#000");
      } else {
        setNavbarOffset(false);
      }

      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <>
      <section
        id="navbar"
        className={classNames(
          navbarOffset ? "shadow" : "shadow-none",
          "fixed top-0 w-full px-4 md:px-10 xxl:px-0 py-7 flex flex-col justify-center items-center bg-white z-30 transition-all"
        )}
      >
        <div className="max-w-7xl  flex justify-center items-center relative w-full h-20">
          <div className="absolute  left-0 inline-flex gap-2 items-center lg:hidden">
            <Link2
              href="https://www.facebook.com/VelaaSindhornVillageLangsuan/"
              legacyBehavior
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-black hover:text-white hover:scale-110 duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 32.84 32.84"
                  className="cursor-pointer"
                >
                  <circle
                    id="Ellipse_9"
                    data-name="Ellipse 9"
                    cx="15.67"
                    cy="15.67"
                    r="15.67"
                    transform="translate(0.75 0.75)"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                  <path
                    id="Path_548020"
                    data-name="Path 548020"
                    d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                    transform="translate(-71.834 -38.578)"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </Link2>

            <Link2
              href="https://www.instagram.com/velaalangsuan/"
              legacyBehavior
              passHref
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instragram"
                className="text-black hover:text-white hover:scale-110 duration-300 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 32.84 32.84"
                >
                  <circle
                    id="Ellipse_9"
                    data-name="Ellipse 9"
                    cx="15.67"
                    cy="15.67"
                    r="15.67"
                    transform="translate(0.75 0.75)"
                    fill="white"
                    stroke="#000"
                    strokeWidth="1.5"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="24"
                    viewBox="0 0 32.84 32.84"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="currentColor"
                      transform="translate(9 10)"
                    />
                  </svg>
                </svg>
              </a>
            </Link2>
          </div>

          <div className="absolute  left-0 lg:inline-flex items-center hidden ">
            <div className="flex gap-7 divide-x-2">
              <Link
                activeClass="active"
                to="vender"
                smooth={true}
                offset={-120}
                duration={500}
                href="#"
              >
                <p className="text-black/80 hover:text-black   font-medium uppercase cursor-pointer duration-200 transition-all">
                  Our Vendors
                </p>
              </Link>

              <Link
                activeClass="active"
                to="promotion"
                smooth={true}
                offset={-120}
                duration={500}
                href="#"
              >
                <p className="text-black/80 hover:text-black  font-medium uppercase cursor-pointer duration-200 transition-all pl-7">
                  Promotion & Event
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center ">
            <Image
              priority={true}
              src="/assets/VELAA_03-Black.gif"
              alt="logo"
              sizes="100vw"
              width="0"
              height="0"
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="h-20 w-fit"
            />
          </div>

          <div className="absolute  right-0 inline-flex items-center ">
            <div
              id="social"
              className="hidden lg:flex items-center gap-2 mr-3 "
            >
              <p className="text-black/80 hover:text-black  font-medium uppercase cursor-pointer duration-200 transition-all">
                Contact Us
              </p>

              <Link2
                href="https://www.instagram.com/velaalangsuan/"
                legacyBehavior
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instragram"
                  className="text-black hover:text-white hover:scale-110 duration-300 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 32.84 32.84"
                  >
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="15.67"
                      cy="15.67"
                      r="15.67"
                      transform="translate(0.75 0.75)"
                      fill="white"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="24"
                      viewBox="0 0 32.84 32.84"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                        fill="currentColor"
                        transform="translate(9 10)"
                      />
                    </svg>
                  </svg>
                </a>
              </Link2>

              <Link2
                href="https://www.facebook.com/VelaaSindhornVillageLangsuan/"
                legacyBehavior
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-black hover:text-white hover:scale-110 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 32.84 32.84"
                    className="cursor-pointer"
                  >
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="15.67"
                      cy="15.67"
                      r="15.67"
                      transform="translate(0.75 0.75)"
                      fill="none"
                      stroke="#000"
                      strokeWidth="1.5"
                    />
                    <path
                      id="Path_548020"
                      data-name="Path 548020"
                      d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                      transform="translate(-71.834 -38.578)"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </Link2>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2 w-full lg:hidden">
          <div className="flex gap-2 justify-center w-full  divide-x-2">
            <Link
              activeClass="active"
              to="vender"
              smooth={true}
              offset={-120}
              duration={500}
              href="#"
            >
              <p className="text-black/80 hover:text-black text-xs sm:text-sm inline-flex font-medium uppercase cursor-pointer duration-200 transition-all  whitespace-nowrap">
                Our Vendors
              </p>
            </Link>

            <Link
              activeClass="active"
              to="promotion"
              smooth={true}
              offset={-120}
              duration={500}
              href="#"
            >
              <p className="text-black/80 hover:text-black text-xs sm:text-sm inline-flex font-medium uppercase cursor-pointer duration-200 transition-all  whitespace-nowrap pl-2">
                Promotion & Event
              </p>
            </Link>

            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              offset={-120}
              duration={500}
              href="#"
            >
              <p className="text-black/80 hover:text-black text-xs sm:text-sm inline-flex font-medium uppercase cursor-pointer duration-200 transition-all whitespace-nowrap pl-2">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="banner"
        className="w-full flex justify-center h-[82vh] mb-10 mt-4 md:mt-32"
      >
        <div className="max-w-7xl w-full h-full relative overflow-hidden">
          <HeroCarosouse />
        </div>
      </section>

      <section
        id="vender"
        className="w-full px-4 md:px-10 xxl:px-0 flex justify-center bg-[#F5F5F5] items-center py-10"
      >
        <div className="max-w-7xl h-full flex flex-col justify-center  relative w-full gap-6">
          <Venders />
        </div>
      </section>

      <section
        id="promotion"
        className="w-full px-4 md:px-10 xxl:px-0 py-10 flex justify-center min-h-[500px]"
      >
        <div className="max-w-7xl h-full flex flex-col justify-center items-center relative w-full gap-6">
          <div className="w-full flex justify-between">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-2xl xs:text-4xl uppercase">
                PROMOTION & Event
              </h1>
              <p className="text-sm xs:text-base">
                Want to be the first to know? Follow us on social media.
              </p>
            </div>
          </div>
          <PromotionCarosouse />
        </div>
      </section>

      <section
        id="contact"
        className="w-full px-4 md:px-10 xxl:px-0 flex justify-center min-h-[500px] h-full py-10 bg-[#F5F5F5] "
      >
        <div className="max-w-7xl w-full h-full  grid grid-cols-1  md:grid-cols-3 md:gap-x-6 gap-y-4">
          <div className="w-full h-full text-center flex flex-col gap-4 items-center ">
            <h1 className="font-bold text-2xl xs:text-4xl uppercase">
              GET IN TOUCH
            </h1>
            <p className="text-sm max-w-md whitespace-pre-line">
              Contact us for any inquiry related to your experience.
            </p>

            <div className="hover:-translate-y-1 duration-500 cursor-pointer max-w-sm w-full h-fit  rounded-md shadow py-2 px-4 relative flex gap-6  items-center bg-white">
              <div className="w-12 h-12 rounded-md relative overflow-hidden drop-shadow bg-black flex-shrink-0 justify-center items-center flex">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48 8C32.52 8 20 20.52 20 36C20 57 48 88 48 88C48 88 76 57 76 36C76 20.52 63.48 8 48 8ZM48 46C42.48 46 38 41.52 38 36C38 30.48 42.48 26 48 26C53.52 26 58 30.48 58 36C58 41.52 53.52 46 48 46Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="p-2 ">
                <p className=" text-left text-sm">
                  87 Langsuan Road. Lumpini, Pathumwan Bangkok, Thailand 10330
                </p>
              </div>
            </div>

            <div className="hover:-translate-y-1 duration-500 cursor-pointer max-w-sm w-full h-fit  rounded-md shadow py-2 px-4 relative flex gap-6  items-center bg-white">
              <div className="w-12 h-12 rounded-md relative overflow-hidden drop-shadow bg-black flex-shrink-0 justify-center items-center flex">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.96 8C25.88 8 8 25.92 8 48C8 70.08 25.88 88 47.96 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 47.96 8ZM48 80C30.32 80 16 65.68 16 48C16 30.32 30.32 16 48 16C65.68 16 80 30.32 80 48C80 65.68 65.68 80 48 80Z"
                    fill="#FFF"
                  />
                  <path
                    d="M50 28H44V52L65 64.6L68 59.68L50 49V28Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="p-2 ">
                <p className="text-left text-sm">Open daily</p>
                <p className="text-left text-sm">07:00 AM. - 22:00 PM.</p>
              </div>
            </div>

            <div className="hover:-translate-y-1 duration-500 cursor-pointer max-w-sm w-full h-fit rounded-md shadow py-2 px-4 relative flex gap-6  items-center bg-white">
              <div className="w-12 h-12 rounded-md relative overflow-hidden drop-shadow bg-black flex-shrink-0 justify-center items-center flex">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 96 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.48 43.16C32.24 54.48 41.52 63.72 52.84 69.52L61.64 60.72C62.72 59.64 64.32 59.28 65.72 59.76C70.2 61.24 75.04 62.04 80 62.04C82.2 62.04 84 63.84 84 66.04V80C84 82.2 82.2 84 80 84C42.44 84 12 53.56 12 16C12 13.8 13.8 12 16 12H30C32.2 12 34 13.8 34 16C34 21 34.8 25.8 36.28 30.28C36.72 31.68 36.4 33.24 35.28 34.36L26.48 43.16Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="p-2 ">
                <p className="text-left text-sm">02 253 8999</p>
              </div>
            </div>

            <div className="w-full  flex justify-center flex-col items-center gap-2 py-2">
              <p className=" text-sm ">More channels to follow us.</p>
              <div id="social" className="flex items-center gap-2  ">
                <Link2
                  href="https://www.instagram.com/velaalangsuan/"
                  legacyBehavior
                  passHref
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instragram"
                    className="text-black hover:text-white hover:scale-110 duration-300 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32.84 32.84"
                    >
                      <circle
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        cx="15.67"
                        cy="15.67"
                        r="15.67"
                        transform="translate(0.75 0.75)"
                        fill="white"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="24"
                        viewBox="0 0 32.84 32.84"
                      >
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                          fill="currentColor"
                          transform="translate(9 10)"
                        />
                      </svg>
                    </svg>
                  </a>
                </Link2>

                <Link2
                  href="https://www.facebook.com/VelaaSindhornVillageLangsuan/"
                  legacyBehavior
                  passHref
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-black hover:text-white hover:scale-110 duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 32.84 32.84"
                      className="cursor-pointer"
                    >
                      <circle
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        cx="15.67"
                        cy="15.67"
                        r="15.67"
                        transform="translate(0.75 0.75)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Path_548020"
                        data-name="Path 548020"
                        d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                        transform="translate(-71.834 -38.578)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link2>

                <Link2 href="https://lin.ee/lIUrz4f" legacyBehavior passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="line"
                    className="text-black hover:text-white hover:scale-110 duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 33.492 33.499"
                      className="cursor-pointer"
                    >
                      <path
                        id="Path_548021"
                        data-name="Path 548021"
                        d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
                        transform="translate(-197.758 -38.248)"
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Path_548022"
                        data-name="Path 548022"
                        d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                        transform="translate(-197.758 -38.248)"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </Link2>
              </div>
            </div>
          </div>

          <div className="col-span-2  w-full min-h-[450px] relative">
            <iframe
              title="Velaa Sindhorn Village Langsuan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.266038936018!2d100.54276545517328!3d13.736747267120448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f20ca76b90f%3A0x958d6748e59fc5f3!2z4LmA4Lin4Lil4Liy!5e0!3m2!1sth!2sth!4v1661940273084!5m2!1sth!2sth"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="w-full  flex justify-center max-h-[400px] md:max-h-[550px] xl:max-h-[750px] bg-[#F5F5F5]"
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 w-full grid-rows-2">
          <div className="row-span-2 w-full h-full relative">
            <GalleryBig />
          </div>

          <div className="hidden xl:grid  w-full h-full  grid-cols-2">
            <div className="w-full relative h-full">
              <GalleryMid1 />
            </div>

            <div className="w-full relative h-full">
              <GalleryMid2 />
            </div>
          </div>

          <div className="hidden xl:block  w-full relative h-full">
            <GallerySpan />
          </div>
        </div>
      </section>

      <section
        id="review"
        className="w-full px-4 md:px-10 xxl:px-0 flex justify-center items-center min-h-[350px] bg-[#F5F5F5]  py-10"
      >
        <div className="max-w-7xl h-full flex flex-col justify-center items-center relative w-full gap-6 ">
          <ReviewCarosouse />
        </div>
      </section>

      <section
        id="footer"
        className="w-full px-4 md:px-10 xxl:px-0 py-4 flex justify-center items-center bg-black h-fit min-h-[64px] "
      >
        <div className="max-w-7xl w-full h-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-2">
          <p className="text-white text-xs  md:text-sm text-center ">
            Copyright © 2022{String(year) != "2022" ? `- ${year}` : null}{" "}
            <Link2 href={"https://siamsindhorn.com/"} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold cursor-pointer"
              >
                Siam Sindhorn Co., Ltd.
              </a>
            </Link2>{" "}
            All Rights Reserved.
          </p>

          <div className="flex gap-4 text-white text-xs md:text-sm divide-x-2 divide-white">
            <Link2 href={"https://siamsindhorn.com/privacy"} legacyBehavior>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="pl-3 cursor-pointer "
              >
                Privacy Policy
              </a>
            </Link2>

            <button type="button" data-cc="c-settings" className="pl-3">
              Cookies Consent
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
