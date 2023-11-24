"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import React, { useState, useEffect, useRef, FC } from "react";
import axios from "axios";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

import moment from "moment";
import "moment/locale/th";
moment.locale("en");

interface Props {}

const URL = `https://iservices.ssdapp.net/get-feed-facebook?site=velaalangsuan`;

const fetcher = async (url: string) =>
  await axios
    .get(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch(function (err) {
      console.log(err);
    });

const Promotion: FC<Props> = (): JSX.Element => {
  const { data, error } = useSWR(URL, fetcher);
  const [resulteData, setResultData] = useState<Array<IPost>>();

  useEffect(() => {
    if (data) {
      setResultData(data.data);
    }
  }, [data]);

  if (!resulteData) {
    return <Skeleton width={"100%"} height={"300px"} />;
  }

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={false}
        loop={false}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="!h-[28rem] w-full relative !py-5 !pb-10  "
      >
        {resulteData &&
          resulteData.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" relative overflow-hidden rounded-md shadow-md "
            >
              <Link href={item.permalink_url} legacyBehavior passHref>
                <a aria-label="news" target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-full absolute bg-white/75 z-10 opacity-0 hover:opacity-100 duration-500 cursor-pointer flex justify-center items-center ">
                    <button
                      type="button"
                      className="hover:scale-105 duration-300  w-fit px-6 py-3 bg-white text-black text-xs items-center rounded-3xl inline-flex shadow-md"
                    >
                      EXPLORE MORE
                      <i className="ml-2 ">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 80 80"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72C22.36 72 8 57.64 8 40ZM-1.74846e-06 40C-7.83308e-07 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 -2.7136e-06 40 -1.74846e-06C17.92 -7.83308e-07 -2.7136e-06 17.92 -1.74846e-06 40ZM40 36L24 36L24 44L40 44L40 56L56 40L40 24L40 36Z"
                            fill="currentColor"
                          />
                        </svg>
                      </i>
                    </button>
                  </div>
                </a>
              </Link>

              <Image
                priority
                unoptimized={true}
                src={item.full_picture}
                alt={item.id}
                width="0"
                height="0"
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "top" }}
                className="w-full h-full "
              />

              <div className="w-full h-1/2 bottom-0 absolute bg-gradient-to-t from-slate-50 flex items-end p-4 text-sm">
                <p>{item.message.substring(0, 50)}</p>
              </div>

              <div className="h-10 w-fit min-w-[150px] px-2 py-1 bg-black/75 absolute top-5 right-5 rounded-3xl text-white flex justify-center items-center">
                <p className="text-sm">
                  {moment(item.created_time).format("LL")}
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Promotion;
