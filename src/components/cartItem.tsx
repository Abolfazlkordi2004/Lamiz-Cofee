import Image from "next/image";
import React from "react";

type ICartItemProps = {
  name: string;
  price: string;
  quantity: number;
  totalPrice: number;
  onRemove: () => void;
};

function CartItem({
  name,
  price,
  quantity,
  totalPrice,
  onRemove,
}: ICartItemProps) {
  return (
    <div className="w-[650px] h-auto">
      <div className="flex flex-row-reverse justify-between items-center ml-15 w-full h-[50px]">
        <button onClick={onRemove}>
          <Image
            src="/icons/icons8-trash-can-48.png"
            alt="iccon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </button>
        <div className="">
          <p className="text-sm text-wrap">{name}</p>
        </div>
        <div className="">
          <p className="text-sm">{price}</p>
        </div>
        <div className=" ">
          <p className="text-sm">{quantity}</p>
        </div>
        <div>
          <p className="text-sm">{totalPrice}</p>
        </div>
      </div>
      <hr className="border-gray-500 w-[700px] my-5" />
    </div>
  );
}

export default CartItem;
