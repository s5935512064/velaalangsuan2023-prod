import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title:
    "๔ กรกฎาคม ๒๕๖๗ เนื่องในโอกาสวันคล้ายวันประสูติ สมเด็จพระเจ้าน้องนางเธอ เจ้าฟ้าจุฬาภรณ์วลัยลักษณ์ อัครราชกุมารี กรมพระศรีสวางควัฒน วรขัตติยราชนารี",
  description:
    "Velaa หลังสวน Community Mall แห่งใหม่ใจกลางเมือง บนถนนหลังสวน มาพร้อม Villa Market และหลากร้านอาหารและบริการชั้นนำกว่า 26 ร้านค้า",
};

export default function Welcome() {
  var expired = true;

  if (expired) return redirect("/");

  return (
    <>
      <div className="min-h-screen w-full relative bg-[url('/assets/king2565/01_background.webp')] bg-center bg-cover bg-no-repeat flex justify-center items-center px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="w-full flex flex-col items-center gap-4 max-w-[1440px] py-10 font-Noto ">
          <div className="relative  w-fit flex px-7 gap-4 translate-y-4 xl:translate-y-0">
            <div className="w-12 sm:w-14 md:w-16 absolute -left-[3%] -top-[10%] lg:-left-[15%]  lg:-top-[7%]  ">
              <Image
                src={"/assets/king2565/royal_sign.webp"}
                alt="queen"
                sizes="100vw"
                width={0}
                height={0}
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="w-full h-full md:scale-125"
              />
            </div>
            <div className="relative h-[50vh] sm:h-[50vh]">
              <Image
                src={"/assets/king2565/02_profile.webp"}
                alt="queen"
                sizes="100vw"
                width={0}
                height={0}
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="w-full h-full scale-90 md:scale-95"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className=" text-[#d33d16] text-sm sm:text-base md:text-xl text-center">
              ๔ กรกฎาคม ๒๕๖๗ เนื่องในโอกาสวันคล้ายวันประสูติ
              <br />
              สมเด็จพระเจ้าน้องนางเธอ เจ้าฟ้าจุฬาภรณ์วลัยลักษณ์ อัครราชกุมารี
              กรมพระศรีสวางควัฒน วรขัตติยราชนารี
            </h2>

            <h1 className="text-[#d33d16] text-3xl sm:text-4xl md:text-5xl font-medium drop-shadow-md ">
              ทรงพระเจริญ
            </h1>

            <h2 className=" text-[#d33d16]  text-center text-sm sm:text-base md:text-lg">
              ด้วยเกล้าด้วยกระหม่อม
              <br />
              ข้าพระพุทธเจ้า คณะผู้บริหาร และบุคลากร โครงการ เวลา แอท
              สินธรวิลเลจ ในเครือบริษัท สยามสินธร จำกัด
            </h2>
          </div>
          <div className="w-40 sm:w-48 h-12  relative flex justify-center items-center group mt-2 ">
            <Link
              href={"/"}
              className="text-white text-center md:group-hover:text-xl px-4 py-2  absolute w-full h-full  flex items-center justify-center  transition-all duration-200 font-medium text-base md:text-lg bg-[#d33d16] rounded-full"
            >
              <span> เข้าสู่เว็บไซต์</span>
            </Link>
            {/* <Image
              src={"/assets/king2565/border.webp"}
              alt="border"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
