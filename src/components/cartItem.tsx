import Image from "next/image";
import React from "react";

type ICartItemProps = {
  img: string;
};

function CartItem({ img }: ICartItemProps) {
  return (
    <div className="w-[650px] h-[115px]">
      <div className="flex flex-row-reverse justify-between items-center ml-15 w-full">
        <Image src="/icons/icons8-trash-can-48.png" alt="iccon" width={20} height={20} className="cursor-pointer"/>
        <Image
          src={img}
          alt="product-image"
          width={80}
          height={80}
          className="ml-15"
        />
        <div className="ml-40">
          <p>1</p>
        </div>
        <div className="ml-40">
          <p>1</p>
        </div>
        <div className="flex flex-row ml-25">
          <div>
            <button className="w-[25px] h-[35px] text-black border border-gray-400 rounded hover:bg-[#FE6E1F] cursor-pointer">
              +
            </button>
          </div>
          <div className="flex justify-center items-center border border-gray-400 w-[25px] h-[35px] rounded">
            <button className="text-black">1</button>
          </div>
          <div>
            <button className="w-[25px] h-[35px] text-black border border-gray-400 rounded hover:bg-[#FE6E1F] cursor-pointer">
              -
            </button>
          </div>
        </div>
        <div>
          <p>1</p>
        </div>
      </div>
      <hr className="border-gray-500 w-[700px] my-5" />
    </div>
  );
}

export default CartItem;
