import React from "react";
import Image from "next/image";

function ShopCart() {
  return (
    <div className="w-[230px] h-[300px] items-center justify-center">
      <div className="relative w-[200px] h-[150px] mt-13 mx-2 group">
        <Image
          src="/img/LAMIZ-PROSO-BARISTA-COMBINATION.webp"
          alt="LAMIZ-PROSO-BARISTA-COMBINATION"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
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
      <div className="flex flex-col justify-items items-center mt-12">
        <p>کپسول لمیزپرسو باریستا</p>
        <p className="text-[#ff6e1f] mt-3">
          219800 <span>تومان</span>
        </p>
      </div>
    </div>
  );
}

export default ShopCart;
