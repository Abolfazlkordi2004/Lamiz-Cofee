import React from "react";
import Image from "next/image";

function HeaderSection() {
  return (
    <div className="w-full h-[400px] relative flex items-center justify-center">
      <Image
        src="/img/shop-background.webp"
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
          <div>
            <h1 className="text-white font-bold text-4xl">محصولات قهوه لمیز</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
