"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import React, { useState, useEffect, useRef, FC } from "react";

interface Props {}

const comment = [
  {
    id: 9,
    name: "egg phuket",
    comment:
      "ศูนย์การค้า ทันสมัย ใหม่ล่าสุด ย่านหลังสวน มีร้านอาหารมากมาย จอดรถสะดวก มีวิลลามาเกตสินค้ามากมาย",
    rating: 5,
    src: "/assets/review/review1.png",
  },
  {
    id: 8,
    name: "Daniel Wylie",
    comment:
      "Excellent Lifestyle neighborhood shopping center. There are numerous restaurants and retail shops and a Villa Supermarket. The parking garage has a good car wash too.",
    rating: 5,
    src: "/assets/review/review3.png",
  },
  {
    id: 7,
    name: "Sittichai Tem.",
    comment:
      "สถานที่ สะอาด มีร้านอาหารมากหลาย ทั้งอาหาร ไทย จีน ฝรั่ง พิชซ่า ก๋วยเตี๊ยวลูกชิ้นปลา ชาบู ร้านกาแฟก็ เปิดหลายร้านครับ ติดโรงแรม มีสวนสวยไว้ เดินเล่น สถานที่สะอาดมียามดูแลตลอด",
    rating: 5,
    src: "/assets/review/review4.png",
  },
  {
    id: 1,
    name: "Sp inggy",
    comment:
      "สถานที่สวยงาม สะอาด ร้านอาหารดu คนต่างชาติเยอะ มีสวนอยู่ระหว่างร้านอาหารและโรงแรม Villa Market อยู่ชั้นใต้ดิน ที่จอดรถ ใต้ดิน",
    rating: 4,
    src: "/assets/review/review2.png",
  },
  {
    id: 2,
    name: "kay Uchuvadhana",
    comment:
      "สะอาด น่าเดินร้านเยอะ คุณภาพ หลากหลายสไตล์ มีร้านกาแฟ ร้านชา ร้านTapas และอื่นๆ เหมาะนั่งชิว และ มาทานกับเพื่อน และครอบครัว",
    rating: 5,
    src: "/assets/review/review1.png",
  },
  {
    id: 3,
    name: "Puky Puky",
    comment:
      "สถานที่สะอาด ร่มรื่น ด้านหลังมีสวนขนาดใหญ่ ทำให้ดูสบายตา วันศุกร์-อาทิตย์ก็จะมีตลาดนัด แบบเก๋ๆๆ มีของหลากหลายชนิด น่ามาเดินเล่น ร้านอาหารมีให้เลือกเยอะ เลือกได้ตามชอบ",
    rating: 4,
    src: "/assets/review/review3.png",
  },
  {
    id: 4,
    name: "paiphop kong-um",
    comment: "สถานที่สวยมากเหมือนอยู่ต่างประเทศ รวมร้านอาหารดังๆไว้ที่นี่",
    rating: 5,
    src: "/assets/review/review4.png",
  },
  {
    id: 5,
    name: "N Reo",
    comment:
      "น่าเดิน ตกแต่งประณีต ให้ความสำคัญกับ landscape พื้นที่ส่วนกลางร่มรื่น โปร่งสบายตา ต่อเนื่องกับทางเข้าโรงแรม อลังการ ทันสมัยไม่แพ้ต่างประเทศ พนักงานให้การดูแลใส่ใจร้านค้ามีหลากหลายไทย จีน ฝรั่ง ญี่ปุ่น น่ารับประทานทุกร้าน ตลาดนัดของดูดีมีราคาคนขายหน้าตาดี ดูมีฐานะ วิลลามาร์เก็ตสะดวกกับผู้พักเรสซิเดนท์และโรงแรม Malai",
    rating: 5,
    src: "/assets/review/review5.png",
  },
  {
    id: 6,
    name: "zOm aZy",
    comment:
      "Community Mall บนถนนหลังสวน พื้นที่เยอะ ตกแต่งสวย โปร่ง โล่งๆ เดินเล่นสบาย มีร้านอาหารและคาเฟ่ประมาณนึง ทุกร้านตกแต่งสวยดี มี Villa Market ที่ชั้นใต้ดินด้วย",
    rating: 4,
    src: "/assets/review/review3.png",
  },
];

const ReviewCard: FC<Props> = (): JSX.Element => {
  return (
    <>
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
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        className="h-full w-full relative !py-5 !pb-10  "
      >
        {comment.map((item, index) => (
          <SwiperSlide key={index} className=" relative flex justify-center">
            <div className="w-full h-60 bg-white rounded-3xl shadow-sm p-4 px-6 flex items-center flex-col justify-start relative mx-2">
              <div className="w-16 h-16 rounded-full  -mt-16 absolute top-12 overflow-hidden">
                <Image
                  unoptimized
                  priority
                  src={item.src}
                  alt="review"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="w-full h-full "
                />
              </div>

              <div className="inline-flex w-full justify-center  opacity-75 mt-10">
                {[...Array(item.rating)].map((_, index) => (
                  <div key={index}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_23_22)">
                        <path
                          d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z"
                          fill="#F4A825"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23_22">
                          <rect width="96" height="96" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ))}

                {[...Array(5 - item.rating)].map((_, index) => (
                  <div key={index}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_23_22)">
                        <path
                          d="M57.72 40L48 8L38.28 40H8L32.72 57.64L23.32 88L48 69.24L72.72 88L63.32 57.64L88 40H57.72Z"
                          fill="#ccc"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_23_22">
                          <rect width="96" height="96" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ))}
              </div>

              <p className="text-sm opacity-75 text-center mt-2">
                {item.comment.slice(0, 160).concat("")}
              </p>

              <p className="absolute bottom-2 right-5 opacity-50 text-sm italic">
                {item.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewCard;
