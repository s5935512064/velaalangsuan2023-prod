import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "๓ มิถุนายน ๒๕๖๗ เนื่องในโอกาสวันเฉลิมพระชนมพรรษา สมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี",
  description:
    "Velaa หลังสวน Community Mall แห่งใหม่ใจกลางเมือง บนถนนหลังสวน มาพร้อม Villa Market และหลากร้านอาหารและบริการชั้นนำกว่า 26 ร้านค้า",
};

export default function Welcome() {
  return (
    <>
      <div className="min-h-screen w-full relative bg-[url('/assets/king2565/01_background.webp')] bg-center bg-cover bg-no-repeat flex justify-center items-center px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="w-full flex flex-col items-center gap-4 max-w-[1440px] py-10 font-Noto ">
          <div className="relative  w-fit flex px-7 gap-4 translate-y-4 xl:translate-y-0">
            <div className="w-12 sm:w-14 md:w-16 absolute -left-[3%] -top-[10%] lg:-left-[15%]  lg:-top-[7%]  ">
              <Image
                src={"/assets/king2565/royal_suthida.webp"}
                alt="queen"
                sizes="100vw"
                width={0}
                height={0}
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="w-full h-full"
              />
            </div>
            <div className="relative h-[50vh] sm:h-[50vh]">
              <Image
                src={"/assets/king2565/Asset 2.webp"}
                alt="queen"
                sizes="100vw"
                width={0}
                height={0}
                style={{ objectFit: "contain", objectPosition: "center" }}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="max-w-screen-md text-white text-sm sm:text-base md:text-xl text-center">
              ๓ มิถุนายน ๒๕๖๗ เนื่องในโอกาสวันเฉลิมพระชนมพรรษา
              <br />
              สมเด็จพระนางเจ้าสุทิดา พัชรสุธาพิมลลักษณ พระบรมราชินี
            </h2>

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium drop-shadow-md ">
              ทรงพระเจริญ
            </h1>

            <h2 className="max-w-screen-md text-white  text-center text-sm sm:text-base md:text-lg">
              ด้วยเกล้าด้วยกระหม่อม
              <br />
              ข้าพระพุทธเจ้า คณะผู้บริหาร และบุคลากร โครงการ เวลา แอท
              สินธรวิลเลจ ในเครือบริษัท สยามสินธร จำกัด
            </h2>
          </div>
          <div className="w-40 sm:w-48  relative flex justify-center items-center group mt-2 ">
            <Link
              href={"/"}
              className="text-white text-center md:group-hover:text-xl px-4 py-2  absolute w-full h-full  flex items-center justify-center  transition-all duration-200 font-medium text-base md:text-lg "
            >
              <span> เข้าสู่เว็บไซต์</span>
            </Link>
            <Image
              src={"/assets/king2565/border.webp"}
              alt="border"
              sizes="100vw"
              width={0}
              height={0}
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
