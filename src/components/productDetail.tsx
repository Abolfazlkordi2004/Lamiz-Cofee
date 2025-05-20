import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "./cartContext";

type IProductDetail = {
  img: string;
  header: string;
  price: string;
};

function ProductDetail({ img, header, price }: IProductDetail) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <div className="w-[900px] h-[350px] flex flex-row" dir="rtl">
      <div className="w-1/2 relative h-full">
        <Image src={img} alt="" fill className="object-cover" />
      </div>
      <div className="w-1/2 mx-6 my-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{header}</h1>
          <p className="text-2xl mt-5 text-[#FE6E1F]">{price + "تومان"}</p>
          <div className="flex flex-row-reverse justify-end my-10">
            <div>
              <button
                className="bg-[#FE6E1F] text-white rounded w-[150px] h-[40px] cursor-pointer"
                onClick={() => {
                  addToCart({ img, price, header, quantity });
                }}
              >
                افزودن به سبد خرید
              </button>
            </div>
            <div className="flex flex-row mx-5">
              <div>
                <button
                  className="w-[30px] h-[40px] text-black border border-gray-400 rounded hover:bg-[#FE6E1F] cursor-pointer"
                  onClick={handleIncrease}
                >
                  +
                </button>
              </div>
              <div className="flex justify-center items-center border border-gray-400 w-[30px] h-[40px] rounded">
                <button className="text-black">{quantity}</button>
              </div>
              <div>
                <button
                  className="w-[30px] h-[40px] text-black border border-gray-400 rounded hover:bg-[#FE6E1F] cursor-pointer"
                  onClick={handleDecrease}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          {/* <hr />
          <div className="flex flex-row my-5">
            <p>دسته:</p>
            <p className="text-gray-500"> لمیزپرسو </p>
          </div>
          <div className="flex flex-row">
            <p>برچسب:</p>
            <p className="text-gray-500">قهوه,قهوه باریستا</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
