import React from "react";
import Image from "next/image";
import { useFormatPrice } from "@/hooks/formatPrice";
import { useCart } from "./cartContext";

type IShopCart = {
  img: string;
  title: string;
  price: string;
  onSearchClick: () => void;
};

function ShopCart({ img, title, price, onSearchClick }: IShopCart) {
  const formatPrice = useFormatPrice();
  const { addToCart } = useCart();

  return (
    <div className="w-[235px] h-[300px] items-center justify-center my-5">
      <div className="relative w-[200px] h-[200px] mx-2 group">
        <Image src={img} alt="lamiz_product" fill className="object-cover bg-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity space-y-2 bg-white w-[40px] h-[80px] rounded shadow flex flex-col justify-center items-center"
          dir="ltr"
        >
          <div className="w-6 h-6 relative cursor-pointer">
            <a href="#" onClick={(e) => { e.preventDefault(); addToCart(); }}>
              <Image
                src="/icons/icons8-shopping-cart-50.png"
                alt="shopping-cart"
                fill
                className="object-contain"
              />
            </a>
          </div>
          <div className="w-6 h-6 relative cursor-pointer" onClick={onSearchClick}>
            <Image
              src="/icons/icons8-search-50.png"
              alt="search"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-items items-center mt-12" dir="rtl">
        <p className="text-lg text-wrap text-center"> {title} </p>
        <p className="text-[#ff6e1f] mt-3 text-lg text-center">{formatPrice(price)}</p>
      </div>
    </div>
  );
}

export default ShopCart;
