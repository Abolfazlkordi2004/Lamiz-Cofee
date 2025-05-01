import Image from "next/image";
import Link from "next/link";
import React from "react";

type ISnappFoodCart = {
  img: string;
  title: string;
};

function SnappFoodCart({ img, title }: ISnappFoodCart) {
  return (
    <div>
      <div className=" relative w-[220px] h-[250px] cursor-pointer">
        <Link href="#">
          <Image
            src={img}
            alt="branch image"
            fill
            className="object-cover rounded"
          />
        </Link>
      </div>
      <div className="bg-[#FE6E1F] mt-5 rounded h-[40px]  text-white flex justify-center items-center cursor-pointer">
        <Link href="#">
          <span className="text-lg">{title}</span>
        </Link>
      </div>
    </div>
  );
}

export default SnappFoodCart;
