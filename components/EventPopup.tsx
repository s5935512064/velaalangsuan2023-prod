"use client";

import Link from "next/link";
import React, { FC, useEffect, useState, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

interface Props {
  opened: boolean;
}

const EventPopup: FC<Props> = ({ opened }): JSX.Element => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={openModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-10 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="transform p-4 text-left align-middle transition-all max-w-4xl  lg:max-w-5xl xl:max-w-5xl w-full bg-[url('/assets/king2565/01_background.webp')] lg:bg-[url('/assets/king2565/01_background.webp')] bg-no-repeat bg-cover bg-top h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[75vh] relative flex justify-center items-center py-10">
                  {/* <div className="absolute bottom-0 h-1/2 bg-gradient-to-t from-white z-0 w-full left-0" /> */}

                  <div className="absolute -top-7 -right-1 ">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="z-50 border-none outline-none "
                    >
                      <svg
                        className=" text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 18 18"
                        fill="currentColor"
                      >
                        <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                      </svg>
                      <span className="sr-only">close</span>
                    </button>
                  </div>

                  <div className="w-full h-full relative max-w-xl lg:max-w-7xl">
                    {/* <span className="sr-only border-img">class-border</span> */}

                    {/* <div className="w-20 h-20 sm:w-28 sm:h-28 bg-[url('/assets/king2565/03_sign.svg')] bg-contain bg-no-repeat bg-right sm:bg-center absolute -top-4 right-0 md:hidden " /> */}

                    <div className="w-full h-full relative grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-1 gap-2 my-2 lg:mt-0">
                      <div className="bg-[url('/assets/king2565/02_picture.webp')] bg-no-repeat bg-contain bg-center  lg:bg-center flex items-center justify-center h-full relative row-span-2 opacity-100 scale-[.80]  -translate-y-2 " />

                      <div className="h-full w-full relative justify-center grid grid-cols-1 justify-items-center lg:grid-rows-2 items-end gap-3 lg:-translate-x-10  mt-4">
                        {/* <div className="w-full max-h-[250px] h-full relative bg-[url('/assets/king2565/03_sign.svg')] bg-no-repeat bg-center bg-contain hidden md:block "></div> */}

                        <div className="w-full h-full relative justify-center items-center  hidden lg:flex row-span-2  ">
                          <Image
                            unoptimized
                            priority={true}
                            src="/assets/king2565/04_text.webp"
                            alt="text"
                            sizes="100vw"
                            width="0"
                            height="0"
                            style={{
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                            className="w-full h-full scale-95"
                          />
                        </div>

                        <div className="w-full h-full  relative  -translate-y-5 lg:hidden ">
                          <Image
                            unoptimized
                            priority={true}
                            src="/assets/king2565/04_text.webp"
                            alt="text"
                            sizes="100vw"
                            width="0"
                            height="0"
                            style={{
                              objectFit: "contain",
                              objectPosition: "center",
                            }}
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
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

export default EventPopup;
