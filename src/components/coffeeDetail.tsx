import React, { useState } from "react";
import Image from "next/image";
import Dropdown from "./dropDown";
import { Product, useCart } from "./cartContext";

type ICoffeeDetail = {
  id: string;
  img: string;
  header: string;
  price: string;
};

const data = [
  "انتخاب کنید",
  "دانه قهوه",
  "اسپرسو ماشین صنعتی",
  "اسپرسو ماشین خانگی",
  "فیلتر کاغذی",
  "فیلتر فلزی",
  "فرنچ پرس",
  "ائروپرس",
  "موکاپات",
];

function CoffeeDetail({ img, header, price, id }: ICoffeeDetail) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const product: Product = {
      id: id,
      img,
      header,
      price,
      quantity,
    };
    console.log("Product being added:", product);
    addToCart(product);
    setTimeout(() => {
      console.log("After adding to cart:", product);
    }, 500);
  };

  return (
    <div
      className="w-[920px] h-[450px] flex flex-row rounded bg-white"
      dir="rtl"
    >
      <div className="w-1/2 relative h-full rounded">
        <Image src={img} alt="" fill className="object-cover" />
      </div>
      <div className="w-1/2 mx-6 my-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{header}</h1>
          <p className="text-2xl mt-5 text-[#FE6E1F]">{price + "تومان"}</p>
          <div className="flex flex-row items-center gap-3 mt-5">
            <p>درجه آسیاب:</p>
            <Dropdown data={data} />
          </div>
          <div className="flex flex-row-reverse justify-end my-10">
            <div>
              <button
                className="bg-[#FE6E1F] text-white rounded w-[150px] h-[40px] cursor-pointer"
                onClick={handleAddToCart}
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
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetail;
