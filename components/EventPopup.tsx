"use client";

import React, { FC, useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface Props { }

type BannerObject = {
  id: string;
  title: string;
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  seq: number;
  linkUrl: string;
  altText: string;
  target: string;
  ctaLabel: string;
  ctaLink: string | null;
  ctaTarget: string;
};

const EventPopup: FC<Props> = (): JSX.Element | null => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<BannerObject[]>([]);
  const [loading, setLoading] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch("/api/get-banners");

        if (!response.ok) {
          throw new Error("Failed to fetch banners");
        }

        const res = await response.json();
        if (
          res.success &&
          Array.isArray(res.data) &&
          res.data.length > 0
        ) {
          const sortedBanners = [...res.data].sort(
            (a: BannerObject, b: BannerObject) => a.seq - b.seq
          );

          setData(sortedBanners);
          setIsOpen(true);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);


  if (loading || data.length === 0) {
    return null;
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => false}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        p-3 md:p-6

        bg-black/25
       
      "
    >
      <DialogPanel
        as="div"
        className="
          relative
          min-w-0
          w-[85vw] md:w-full!
          max-w-[360px] md:max-w-2xl
          max-h-[80vh] md:max-h-[90vh]
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close modal"
          className="
            absolute right-2 top-2 z-30

            flex items-center justify-center

            size-9 md:size-11

            rounded-full
            bg-white/85
            text-black

            shadow-xl
            backdrop-blur-md

            transition-all duration-200
            hover:scale-105
            hover:bg-white
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-5 md:size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Slider */}
        <div className="overflow-hidden rounded-xl">
          <Swiper
            slidesPerView={1}
            centeredSlides
            loop={data.length > 1}
            autoHeight
            speed={800}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            modules={[
              Autoplay,
              Pagination,
              Navigation,
              EffectFade,
            ]}
            className="w-full"
          >
            {data.map((banner) => (
              <SwiperSlide key={banner.id}>
                {banner.linkUrl ? (
                  <a
                    href={banner.linkUrl}
                    target={banner.target || "_self"}
                    rel={
                      banner.target === "_blank"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block w-full"
                  >
                    <BannerImages banner={banner} />
                  </a>
                ) : (
                  <BannerImages banner={banner} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

const BannerImages = ({
  banner,
}: {
  banner: BannerObject;
}) => {
  const fallbackImage =
    banner.mobileImage || banner.tabletImage || banner.desktopImage;

  return (
    <div
      className="
        relative
        flex items-center justify-center

        w-full!
        min-h-[240px]
        md:min-h-[320px]
        lg:min-h-[420px]

        overflow-hidden
        rounded-xl
        bg-black/50
      "
    >
      {/* Blurred Background */}
      <img
        src={fallbackImage}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="
          absolute inset-0

          h-full w-full

          object-cover
          blur-3xl
          scale-110
          opacity-100
        "
      />

      {/* Main Image */}
      <picture className="relative z-10 flex items-center justify-center w-full">
        <source
          media="(min-width: 1024px)"
          srcSet={banner.desktopImage}
        />

        <source
          media="(min-width: 768px)"
          srcSet={banner.tabletImage || banner.desktopImage}
        />

        <img
          src={fallbackImage}
          alt={banner.altText || banner.title}
          loading="lazy"
          draggable={false}
          className="
            block

            w-auto
            h-auto

            max-w-full
            max-h-[85vh]

            object-contain
            object-center

            select-none
          "
        />
      </picture>
    </div>
  );
};

export default EventPopup;