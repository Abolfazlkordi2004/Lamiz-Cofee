import React from "react";
import Image from "next/image";

type IChocolateCart = {
  img: string;
  title: string;
  price: string;
};

function ChocolateCart({ img, title, price }: IChocolateCart) {
  return (
    <div className="flex flex-col items-center" dir="ltr">
      <div className="relative w-full aspect-[5/5] group">
        <Image
          src={img}
          alt="image-coldBrew"
          fill
          className="object-cover rounded"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity space-y-2 p-2">
          <div className="w-7 h-7 relative cursor-pointer">
            <a href="#">
              <Image
                src="/icons/icons8-shopping-cart-50.png"
                alt="shopping-cart"
                fill
                className="object-contain"
              />
            </a>
          </div>
          <div className="w-7 h-7 relative cursor-pointer">
            <a href="#">
              <Image
                src="/icons/icons8-search-50.png"
                alt="search"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <p className="text-lg">{title}</p>
        <p className="text-[#ff6e1f] mt-5 text-lg" dir="rtl">
          {Number(price).toLocaleString("fa-IR")} تومان
        </p>
      </div>
    </div>
  );
}

export default ChocolateCart;
