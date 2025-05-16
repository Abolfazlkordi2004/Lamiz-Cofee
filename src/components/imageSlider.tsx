"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";



type IsliderProps={
  images:[],
}

export default function ImageSlider({images}:IsliderProps) {
  return (
    <div className="w-full">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[750px]">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
