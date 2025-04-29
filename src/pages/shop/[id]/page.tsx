import Image from "next/image";
import React from "react";
import ShopCart from "@/components/shopCart";

function Page() {
  return (
    <div>
      <div className="w-full h-[400px] relative flex items-center justify-center">
        <Image
          src="/img/shop-background.webp"
          alt="shop-background"
          fill
          className="object-cover z-0"
        />
        <div className="flex w-[1100px] h-[200px] items-center justify-between z-10">
          <div>
            <div className="rounded-full bg-[#ff6e1f] mb-3">
              <Image
                src="/icons/icons8-instagram-50.png"
                alt="instagram"
                width={30}
                height={30}
                className="invert px-1 py-1"
              />
            </div>
            <div className="rounded-full bg-[#ff6e1f] mb-3">
              <Image
                src="/icons/icons8-linkedin-50.png"
                alt="linkedin"
                width={30}
                height={30}
                className="invert px-1 py-1"
              />
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold text-4xl">محصولات قهوه لمیز</h1>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-[1200px] ">
        <div className="flex items-center justify-center gap-5 mt-20">
          <div className="w-[920px] h-[1500px] rounded border border-gray-400 grid grid-cols-4">
            <ShopCart />
            <ShopCart />
            <ShopCart />
            <ShopCart />
          </div>
          <div className="w-[230px] h-[500px] rounded border border-gray-400 translate-y-[-100%]">
            <div className="flex justify-end">
              <h2 className="text-xl px-3 py-3 font-bold">دسته بندی محصولات</h2>
            </div>
            <div>
              {[
                "شکلات لمیز",
                "قهوه ها",
                "قهوه سرد دم نیترو ",
                "طعم دهنده ها  ",
                "ماشین الات و تجهیرات",
                "سایرمحصولات",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-end
                space-x-2 mx-3 my-3"
                >
                  <span className="text-lg">{item}</span>
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-green-600"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
