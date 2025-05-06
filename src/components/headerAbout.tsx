import React from "react";
import Image from "next/image";
import MotionCounter from "@/components/MotionCounter";

function HeaderAbout() {
  return (
    <div className="w-full h-[400px] relative flex items-center justify-center">
      <Image
        src="/img/about-us-background.webp"
        alt="shop-background"
        fill
        className="object-cover z-0"
      />
      <div className="w-full h-full bg-black opacity-70 flex items-center justify-center">
        <div className="flex w-[1100px] h-[200px] items-center justify-between z-10">
          <div>
            <div className="rounded-full bg-[#ff6e1f] mb-3 cursor-pointer hover:bg-[#885F45]">
              <Image
                src="/icons/icons8-instagram-50.png"
                alt="instagram"
                width={35}
                height={35}
                className="invert px-1 py-1"
              />
            </div>
            <div className="rounded-full bg-[#ff6e1f] mb-3 cursor-pointer hover:bg-[#885F45]">
              <Image
                src="/icons/icons8-linkedin-50.png"
                alt="linkedin"
                width={35}
                height={35}
                className="invert px-1 py-1"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <h1 className="text-white font-bold text-5xl">
                ما قهوه لمیز هستیم
              </h1>
            </div>
            <div className="text-2xl text-[#FE6E1F] mt-5">
              <p>و بی نهایت عاشق کاری که انجام می‌دهیم</p>
            </div>
            <div className="grid grid-cols-4 gap-8 mt-5">
              <div className="flex flex-col items-center">
                <MotionCounter to={500} />
                <p className="text-white text-xl">باریستا</p>
              </div>
              <div className="flex flex-col items-center">
                <MotionCounter to={70} duration={3} />
                <p className="text-white text-xl"> نوشیدنی </p>
              </div>
              <div className="flex flex-col items-center">
                <MotionCounter to={15} duration={3} />
                <p className="text-white text-xl"> سال فعالیت </p>
              </div>
              <div className="flex flex-col items-center">
                <MotionCounter to={32} duration={3} />
                <p className="text-white text-xl">شعبه فعال </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAbout;
