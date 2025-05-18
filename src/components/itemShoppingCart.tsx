import React from "react";
import Image from "next/image";

type ItemShoppingCartData = {
  img: string;
  title: string;
  price: string;
};

function ItemShoppingCart({ img, title, price }: ItemShoppingCartData) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-[5/5] group" dir="ltr">
        <Image
          src={img}
          alt="image"
          width={300}
          height={300}
          className="object-cover rounded"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity space-y-2 bg-white w-[40px] h-[80px] rounded shadow flex flex-col justify-center items-center">
          <div className="w-7 h-7 relative cursor-pointer">
            <a href="#">
              <Image
                src="/icons/icons8-shopping-cart-50.png"
                alt="shopping-cart"
                width={28}
                height={28}
                className="object-contain"
              />
            </a>
          </div>
          <div className="w-7 h-7 relative cursor-pointer">
            <a href="#">
              <Image
                src="/icons/icons8-search-50.png"
                alt="search"
                width={28}
                height={28}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8">
        <p className="text-lg">{title}</p>
        <p className="text-[#ff6e1f] mt-5 text-lg" dir="rtl">
          {price}
        </p>
      </div>
    </div>
  );
}

export default ItemShoppingCart;
