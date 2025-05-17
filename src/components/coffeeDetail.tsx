import React from "react";
import Image from "next/image";
import Dropdown from "./dropDown";

type ICoffeeDetail = {
  img: string;
  header: string;
  price: string;
  description: string;
};

function CoffeeDetail({ img, header, price, description }: ICoffeeDetail) {
  return (
    <div className="w-[950px] h-[450px] flex flex-row" dir="rtl">
      <div className="w-1/2 relative h-full">
        <Image src={img} alt="" fill className="object-cover" />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{header}</h1>
          <p className="text-xl mt-3">{price}</p>
          <p className="mt-3 text-gray-500">{description}</p>
          <div className="flex flex-row items-center gap-3 mt-3">
            <p>درجه آسیاب:</p>
            <Dropdown />
          </div>
          <div className="flex flex-row-reverse justify-end my-8">
            <div>
              <button className="bg-[#FE6E1F] text-white rounded w-[150px] h-[40px] cursor-pointer">
                افزودن به سبد خرید
              </button>
            </div>
            <div className="flex flex-row mx-5">
              <div>
                <button className="w-[30px] h-[40px] text-black border border-gray-400 rounded hover:bg-[#FE6E1F]">
                  +
                </button>
              </div>
              <div className="flex justify-center items-center border border-gray-400 w-[30px] h-[40px] rounded">
                <button className="text-black">1</button>
              </div>
              <div>
                <button className="w-[30px] h-[40px] text-black border border-gray-400 rounded hover:bg-[#FE6E1F]">
                  -
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div className="flex flex-row my-5">
            <p>دسته:</p>
            <p className="text-gray-500">قهوه ترکیبی</p>
          </div>
          <div className="flex flex-row">
            <p>برچسب:</p>
            <p className="text-gray-500">قهوه,قهوه باریستا</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetail;
