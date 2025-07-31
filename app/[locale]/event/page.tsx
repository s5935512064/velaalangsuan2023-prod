"use client";

import React, { useState, useEffect, useRef, useCallback, use } from "react";
import Image from "next/image";
import Snowfall from "react-snowfall";
import Link from "next/link";
import axios from "axios";
import useSWR, { mutate } from "swr";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const Fancybox = dynamic(() => import("@/components/FancyboxWrap"), {
  ssr: false,
});

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

let URL = process.env.NEXT_PUBLIC_URL;
let logsURL = `${process.env.NEXT_PUBLIC_URL}/logs`;

const fetcher = async (url: string) =>
  await axios
    .get(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN} `,
      },
    })
    .then((res) => res.data)
    .catch(function (err) {
      console.log(err);
    });

export default function Event() {
  const [mute, setMute] = useState(true);
  const { data, error } = useSWR(URL, fetcher);
  const [dataGroup, setDataGroup] = useState();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioButton = useRef<HTMLButtonElement>(null);
  const [images, setImages] = useState([]);
  const [expired, setExpired] = useState(true);
  function groupBy(objectArray: any, property: string) {
    return objectArray.reduce(function (acc: any, obj: any) {
      var key = obj[property];

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  useEffect(() => {
    if (data && data.status == "success") {
      var groupedCategory = groupBy(data.data, "event_group");
      setDataGroup(groupedCategory);
    }
  }, [data]);

  async function logs(eventID: string, event_slug: string) {
    if (event_slug != "#") {
      try {
        const obj = {
          event_id: eventID,
        };

        const resulte = await axios.post(logsURL, obj, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN} `,
          },
        });

        if (resulte.status == 200) {
          setTimeout(() => {
            window.open(event_slug, "_blank");
          }, 100);
          // window.open(event_slug, '_blank', 'noopener, noreferrer');
          // const link = document.createElement("a");
          // link.href = event_slug;
          // link.target = "_blank";
          // link.click();
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  useEffect(() => {
    if (audioRef.current !== null && mute == false) {
      audioRef.current.pause();
      audioRef.current.play();
      audioRef.current.muted = false;
      audioRef.current.volume = 0.7;
    } else if (audioRef.current !== null && mute == true) {
      audioRef.current.muted = true;
    }
  }, [mute]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const snowflake1 = document.createElement("img");
      snowflake1.src = "/assets/snow.png";
      const snowflake2 = document.createElement("img");
      snowflake2.src = "/assets/snow.png";

      const image = [snowflake1, snowflake2];
      //@ts-ignore
      setImages(image);
    }
  }, []);

  if (expired) return redirect("/");

  return (
    <>
      <div className="min-h-screen w-full  relative pb-40">
        <figure className="absolute w-full h-full">
          <audio
            id="audio-player"
            controls={true}
            loop={true}
            muted={true}
            ref={audioRef}
            className="hidden"
          >
            <source src="/assets/chirtmas.mp3" type="audio/mpeg"></source>
          </audio>
        </figure>

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
          snowflakeCount={10}
          radius={[5, 15]}
          images={images}
        />

        <section
          id="navbar"
          className={classNames(
            "top-0 w-full px-4 md:px-10 xxl:px-0 py-7 flex flex-col justify-center items-center bg-white z-30 transition-all"
          )}
        >
          <div className="max-w-7xl  flex justify-center items-center relative w-full h-24">
            <Link href="/" passHref>
              <div className="relative flex justify-center items-center h-24 w-[170px]">
                <Image
                  priority={true}
                  src="/assets/logo_christmas.png"
                  alt="logo"
                  sizes="100vw"
                  width="0"
                  height="0"
                  style={{ objectFit: "contain", objectPosition: "center" }}
                  className="h-24 w-[170px]"
                />
              </div>
            </Link>
          </div>
        </section>

        <section className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4">
          <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 ">
            <p className="text-center">Welcome to Velaa Langsuan Community.</p>
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

              <Link href="https://velaalangsuan.com" legacyBehavior passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="website"
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
                      viewBox="-9 -8 32 32"
                      width="26"
                      height="26"
                    >
                      <path
                        fill="currentColor"
                        d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"
                      />
                    </svg>
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

              <button
                type="button"
                className=" text-center  cursor-pointer text-black w-9 h-9"
                onClick={() => {
                  setMute(!mute);
                }}
              >
                {mute ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className={`w-9 h-9 shrink-0`}
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-9 h-9 shrink-0`}
                  >
                    <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                    <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </section>

        {dataGroup
          ? Object.keys(dataGroup)
              .filter((p) => p == "banner")
              .map((item: any, index: number) => (
                <section
                  key={index}
                  className="w-full flex justify-center my-7 h-fit"
                >
                  <div className="max-w-7xl w-full h-full relative overflow-hidden !z-[-10]">
                    <Image
                      priority
                      //@ts-ignore
                      src={dataGroup[item][0]?.event_bg}
                      alt="banner"
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      className="w-full h-full "
                    />
                  </div>
                </section>
              ))
          : null}

        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          {dataGroup
            ? Object.keys(dataGroup)
                .filter((p) => p != "banner")
                .map((item: any, index: number) => (
                  <section
                    key={index}
                    className="w-full px-4 md:px-10 xxl:px-0 flex justify-center  items-center py-4"
                  >
                    <div className="max-w-7xl  relative flex-col flex items-center justify-center gap-1 w-full">
                      <p className="text-center uppercase text-2xl md:text-3xl font-medium">
                        {item}
                      </p>

                      <div className="w-full flex flex-wrap justify-center gap-3 md:gap-4 my-4">
                        {dataGroup[item]
                          //@ts-ignore
                          .map((cardItem: any, indexCard: number) => (
                            <div
                              onClick={() =>
                                logs(cardItem.event_id, cardItem.event_slug)
                              }
                              key={indexCard}
                              className="w-40 h-40 sm:w-60 sm:h-60 relative rounded-md overflow-hidden shadow-md cursor-pointer"
                            >
                              {/* <a
                                aria-label="banner"
                                data-fancybox="banner"
                                href={cardItem.event_bg}
                                className="w-full h-full relative"
                              >
                              </a> */}
                              <Image
                                priority
                                //@ts-ignore
                                src={cardItem.event_bg}
                                alt="banner"
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                className="w-full h-full hover:scale-110 duration-300 transition-all"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </section>
                ))
            : null}
        </Fancybox>
      </div>
    </>
  );
}
