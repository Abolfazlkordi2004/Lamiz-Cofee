"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

const images = [
  "/img/60-dark-chocolate-box.webp",
  "/img/60-dark-chocolate-mug.webp",
  "/img/83-dark-chocolate-mug.webp",
];

export default function ImageSlider() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="rounded-lg overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[550px]">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
