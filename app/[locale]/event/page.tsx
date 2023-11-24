"use client";

import dynamic from "next/dynamic";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Snowfall from "react-snowfall";
import Link from "next/link";

function SearchBarFallback() {
  return <>placeholder</>;
}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Event() {
  return (
    <>
      <div className="min-h-screen w-full  relative pb-40">
        <Snowfall
          // The color of the snowflake, can be any valid CSS color.
          // color="#434343"

          // Applied to the canvas element.
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
          // Controls the number of snowflakes that are created (defaults to 150).
          snowflakeCount={200}
        />

        <section
          id="navbar"
          className={classNames(
            "top-0 w-full px-4 md:px-10 xxl:px-0 py-7 flex flex-col justify-center items-center bg-white z-30 transition-all"
          )}
        >
          <div className="max-w-7xl  flex justify-center items-center relative w-full h-24">
            <Link href="/" passHref>
              <div className="relative flex justify-center items-center">
                <Image
                  priority={true}
                  src="/assets/logo_christmas.png"
                  alt="logo"
                  sizes="100vw"
                  width="0"
                  height="0"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="h-24 w-fit"
                />
              </div>
            </Link>
          </div>
        </section>

        <section className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4">
          <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 ">
            <p className="text-center">Welcome to Velaa langsuan Community.</p>
            <p className="text-center">We open daily: 07:00 am. - 10:00 pm.</p>

            <div id="social" className="flex items-center gap-2 mt-2  ">
              <Link
                href="https://maps.app.goo.gl/ieJ7zJgwccPJMbVj9"
                legacyBehavior
                passHref
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="googlemap"
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
                      width="26"
                      height="26"
                      viewBox="0 -15 70 100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M48 8C32.52 8 20 20.52 20 36C20 57 48 88 48 88C48 88 76 57 76 36C76 20.52 63.48 8 48 8ZM48 46C42.48 46 38 41.52 38 36C38 30.48 42.48 26 48 26C53.52 26 58 30.48 58 36C58 41.52 53.52 46 48 46Z"
                        fill="currentColor"
                      />
                    </svg>
                  </svg>
                </a>
              </Link>

              <Link
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
              </Link>

              <Link
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
              </Link>

              <Link href="https://lin.ee/lIUrz4f" legacyBehavior passHref>
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
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center my-7 h-[400px]">
          <div className="max-w-7xl w-full h-full relative overflow-hidden bg-black"></div>
        </section>

        <section className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4">
          <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 w-full">
            <p className="text-center uppercase text-2xl md:text-3xl font-semibold">
              Enjoy The Rhythm
            </p>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 my-4">
              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4">
          <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 w-full">
            <p className="text-center uppercase text-2xl md:text-3xl font-semibold">
              Workshops
            </p>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 my-4">
              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>
              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4">
          <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 w-full">
            <p className="text-center uppercase text-2xl md:text-3xl font-semibold">
              Activities
            </p>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 my-4">
              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4">
          <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 w-full">
            <p className="text-center uppercase text-2xl md:text-3xl font-semibold">
              Promotions
            </p>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 my-4">
              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>

              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>
              <div className="w-full h-[200px] md:h-[300px] bg-black"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
