import Image from "next/image";
import React from "react";

type ICartItemProps = {
  name: string;
  price: string;
  quantity: number;
  onRemove: () => void;
};

function CartCheckout({
  name,
  price,
  quantity,
  onRemove,
}: ICartItemProps) {
  return (
    <div className="w-[470px] h-auto">
      <div
        className="flex flex-row justify-around items-center my-2 min-h-[50px]"
        dir="rtl"
      >
        <button onClick={onRemove} className="flex justify-start">
          <Image
            src="/icons/icons8-trash-can-48.png"
            alt="icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </button>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-nowrap">{name}</div>
          <div className="text-sm text-center">{quantity}</div>
        </div>
        <div className="text-sm text-left">{price}</div>
      </div>
      <hr className="border-gray-500 w-[470px] my-5 mx-2" />
    </div>
  );
}

export default CartCheckout;
