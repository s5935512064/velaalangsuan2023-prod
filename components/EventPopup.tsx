"use client";

import React, { FC, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import axios, { AxiosRequestConfig } from "axios";

const configAxios: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_BEARER_TOKEN}`,
  },
};

interface Props {}

type EventObject = {
  id: number;
  eventId: string;
  bgImage: string;
  profileImg: string;
  signImg: string;
  name: string;
  color: string;
  text1: string;
  text2: string;
  text3: string;
  startDate: Date;
  endDate: Date;
  active: boolean;
  websiteId: string;
  createdAt: string;
  updatedAt: string;
};

const EventPopup: FC<Props> = (): JSX.Element => {
  let [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<EventObject | null>(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchEvent();
    async function fetchEvent() {
      try {
        const response = await axios.get(
          `https://cms.ssdapp.net/api/events?websiteId=VEL`,
          configAxios
        );

        if (
          response.status == 200 &&
          response.data != "No event found in the database."
        ) {
          setData(response.data[0]);
          setIsOpen(true);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error("Error message:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    }
  }, []);

  if (data == null) return <></>;

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => false}
        className="fixed inset-0 flex w-screen items-center justify-center bg-black/30 p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-50"
      >
        <Dialog.Panel
          as="div"
          className="h-fit w-fit rounded-md space-y-4 p-6 md:p-8 xl:p-14 relative overflow-hidden "
          style={{
            backgroundImage: `url('${data.bgImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <button
            type="button"
            className="w-7 h-7 md:w-10 md:h-10 bg-white text-black rounded-full absolute right-4 top-4 flex justify-center items-center z-20"
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="w-full min-h-[65vh] md:min-h-[50vh] z-10 grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-2  gap-2 xl:gap-4 justify-items-center md:-translate-y-4">
            <div className="min-h-[300px] w-full h-full flex  relative !row-span-2 md:row-span-1 -mt-4 md:mt-0  ">
              <Image
                src={data.profileImg}
                alt="profile"
                sizes="100vw"
                quality={100}
                width={0}
                height={0}
                className="w-full h-full object-contain object-center absolute inset-0 scale-[0.80] md:scale-[0.9] drop-shadow-md "
              />
              <div className="w-20 h-20 md:w-32 md:h-32 absolute top-4 left-0  md:hidden     ">
                <Image
                  src={data.signImg}
                  alt="sign"
                  sizes="100vw"
                  quality={100}
                  width={0}
                  height={0}
                  className="w-full h-full object-contain object-center   "
                />
              </div>
            </div>

            <div
              style={{ color: data.color }}
              className="flex flex-col justify-center items-center gap-2 md:gap-2 max-w-sm -mt-2 md:mt-0 md:-translate-x-5 scale-95 md:scale-100"
            >
              <div className="w-32 h-32 relative hidden md:block">
                <Image
                  src={data.signImg}
                  alt="sign"
                  sizes="100vw"
                  quality={100}
                  width={0}
                  height={0}
                  className="w-full h-full object-contain object-center  "
                />
              </div>
              <p
                className={` text-center !whitespace-pre-line text-sm md:text-base xl:text-lg drop-shadow-sm`}
              >
                {data.text1.replace(new RegExp("\r?\n", "g"), "<br />")}
              </p>

              <div className="flex flex-col md:gap-2 ">
                <p
                  className={` text-center !whitespace-pre-line text-3xl md:text-4xl xl:text-5xl font-semibold drop-shadow-sm`}
                >
                  {data.text2.replace(new RegExp("\r?\n", "g"), "<br />")}
                </p>

                <div className="w-full relative">
                  <Image
                    src={
                      "https://res.cloudinary.com/dndcgytjh/image/upload/fl_preserve_transparency/v1721820504/divide_royal_plj7op.jpg?_s=public-apps"
                    }
                    alt="divide"
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="w-full h-full object-contain object-center drop-shadow-sm"
                  />
                </div>
              </div>
              <p
                className={` text-center whitespace-pre-line text-sm md:text-base xl:text-lg drop-shadow-sm `}
              >
                {data.text3.replace(new RegExp("\r?\n", "g"), "<br />")}
              </p>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default EventPopup;
