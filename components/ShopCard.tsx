"use client";

import React, { useState, useEffect, useRef, Fragment, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

interface Props {
  data: any;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const ShopCard: FC<Props> = ({ data }): JSX.Element => {
  let [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    // console.log(props);
    setIsOpen(true);
  }

  return (
    <>
      <div
        // data-aos="zoom-in"
        onClick={openModal}
        className=" w-full h-fit relative rounded-lg  drop-shadow-sm bg-white group overflow-hidden hover:cursor-pointer"
      >
        {data.new == true ? (
          <div className="ribbon-container z-20">
            <div className="ribbon text-xs">New</div>
          </div>
        ) : null}

        <Image
          unoptimized
          priority
          src={data.shopImg}
          alt="shopLogo"
          width="0"
          height="0"
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="w-full h-full group-hover:scale-110 duration-500 cursor-pointer "
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center relative ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="min-h-[50vh] max-w-2xl h-fit transform overflow-hidden rounded-2xl bg-white p-6  text-left align-middle shadow-xl transition-all relative">
                  <div className="absolute  flex justify-end right-5 top-5">
                    <button onClick={closeModal} className="z-50">
                      <svg
                        className="fill-current text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 18 18"
                      >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                      </svg>
                    </button>
                  </div>

                  <div className=" w-full  grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" flex flex-col items-center  justify-center relative h-full">
                      <div className="w-40 h-40 rounded-full border overflow-hidden relative bg-white ">
                        <Image
                          unoptimized
                          src={data.shopImg}
                          alt="logo"
                          width="0"
                          height="0"
                          sizes="100vw"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                          className="w-full h-full"
                        />
                      </div>
                    </div>

                    <div className=" flex flex-col gap-3 justify-center relative">
                      <Dialog.Title
                        as="h3"
                        className=" text-2xl md:text-3xl font-bold  uppercase text-center md:text-left  "
                      >
                        {data.name}
                      </Dialog.Title>

                      <p className="text-sm text-gray-500 font-light ">
                        {showMore ? data.about : data.about.substring(0, 200)}

                        <button
                          type="button"
                          className={classNames(
                            data.about.length > 199
                              ? "text-sm text-black "
                              : "hidden"
                          )}
                          onClick={() => setShowMore(!showMore)}
                        >
                          {showMore ? "...show less" : "read more..."}
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="md:mt-2 py-6 grid grid-cols-1 md:grid-cols-2 items-center md:justify-items-center gap-4 ">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-4 text-sm text-gray-500 font-light">
                        <div className="w-24 flex justify-between font-medium">
                          <p>Open Time</p>
                          <p>:</p>
                        </div>

                        <div className="whitespace-pre-line">
                          {data.datetime}
                        </div>
                      </div>

                      <div className="flex gap-4 text-sm text-gray-500 font-light">
                        <div className="w-24 flex justify-between font-medium">
                          Phone
                          <p>:</p>
                        </div>

                        <a href={"tel:" + data.tel}>{data.tel}</a>
                      </div>
                    </div>

                    <div className="w-full flex flex-col gap-3">
                      <div className="flex  gap-3 justify-center">
                        <div
                          className={
                            data.facebook != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300"
                              : "hidden"
                          }
                        >
                          <Link href={data.facebook} legacyBehavior passHref>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className=""
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="58"
                                height="58"
                                viewBox="0 0 32.84 32.84"
                                className="cursor-pointer"
                              >
                                <path
                                  id="Path_548020"
                                  data-name="Path 548020"
                                  d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
                                  transform="translate(-71.834 -38.578)"
                                  fill="#000"
                                />
                              </svg>
                            </a>
                          </Link>
                        </div>

                        <div
                          className={
                            data.ig != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300"
                              : "hidden"
                          }
                        >
                          <Link href={data.ig} legacyBehavior passHref>
                            <a target="_blank" rel="noopener noreferrer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 32.84 32.84"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="26"
                                  height="24"
                                  viewBox="0 0 32.84 32.84"
                                >
                                  <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                    fill="#000"
                                    transform="translate(9 10)"
                                  />
                                </svg>
                              </svg>
                            </a>
                          </Link>
                        </div>

                        <div
                          className={
                            data.line != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300"
                              : "hidden"
                          }
                        >
                          <Link href={data.line} legacyBehavior passHref>
                            <a target="_blank" rel="noopener noreferrer">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 33.492 33.499"
                                className="cursor-pointer"
                              >
                                <path
                                  id="Path_548022"
                                  data-name="Path 548022"
                                  d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
                                  transform="translate(-197.758 -38.248)"
                                  fill="#000"
                                />
                              </svg>
                            </a>
                          </Link>
                        </div>
                      </div>

                      <div className="flex gap-3 justify-center">
                        <div
                          className={
                            data.deliver != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300 overflow-hidden p-[6px]"
                              : "hidden"
                          }
                        >
                          <Link href={data.deliver} legacyBehavior passHref>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative w-full h-full bg-[url('/assets/shop-icon/fast-delivery.svg')] bg-cover"
                            ></a>
                          </Link>
                        </div>

                        <div
                          className={
                            data.grabfood != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300 p-[1px]"
                              : "hidden"
                          }
                        >
                          <Link href={data.grabfood} legacyBehavior passHref>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative w-full h-full bg-[url('/assets/shop-icon/grab.png')] bg-cover"
                            ></a>
                          </Link>
                        </div>

                        <div
                          className={
                            data.lineman != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300 p-1"
                              : "hidden"
                          }
                        >
                          <Link href={data.lineman} legacyBehavior passHref>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative w-full h-full bg-[url('/assets/shop-icon/lineman.png')] bg-cover"
                            ></a>
                          </Link>
                        </div>

                        <div
                          className={
                            data.robinhood != "#"
                              ? "w-12 h-12  rounded-full flex justify-center items-center border border-black hover:scale-125 duration-300 p-1"
                              : "hidden"
                          }
                        >
                          <Link href={data.robinhood} legacyBehavior passHref>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative w-full h-full bg-[url('/assets/shop-icon/robinhood.png')] bg-cover "
                            ></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-72 w-full relative  border-t pt-4">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      centeredSlides={true}
                      loop={true}
                      // loopfilmdroupwithblank={true}
                      speed={1500}
                      pagination={{
                        clickable: true,
                      }}
                      autoplay={{
                        delay: 3000,
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
                      className="!h-full w-full relative !py-5 !pb-10  "
                    >
                      {data.gallery.map((item: any, index: number) => (
                        <SwiperSlide
                          key={index}
                          className="opacity-100 relative overflow-hidden rounded-md shadow-md"
                        >
                          <div className="w-full h-full bg-[#fff] loading">
                            <div className="image w-full h-full relative ">
                              <Image
                                unoptimized={true}
                                src={item.src}
                                alt="shopGallery"
                                width="0"
                                height="0"
                                sizes="100vw"
                                style={{
                                  objectFit: "cover",
                                  objectPosition: "center",
                                }}
                                className="w-full h-full  "
                              />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ShopCard;
