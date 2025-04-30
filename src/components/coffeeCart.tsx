import React from "react";
import Image from "next/image";

type ICoffeeCart = {
  img: string;
  header: string;
  productCount: string;
};

function CoffeeCart({ img, header, productCount }: ICoffeeCart) {
  return (
    <div className="w-[250px] h-[350px]  items-center justify-center">
      <div className="relative w-[280px] h-[250px] mt-13 mx-4 group overflow-hidden hover:h-[300px]">
        <Image
          src={img}
          alt="image-coffee"
          fill
          className="object-cover transition-transform ease-in-out duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col justify-items items-center mt-10 mr-15">
        <p className="font-bold text-2xl"> {header} </p>
        <p className="text-gray-500">{productCount}</p>
      </div>
    </div>
  );
}

export default CoffeeCart;
