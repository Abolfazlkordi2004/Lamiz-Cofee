import Image from "next/image";
import React from "react";

type ICartItemProps = {
  name: string;
  price: string;
  quantity: number;
  totalPrice: string;
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
    <div className="w-[705px] h-auto">
      <div
        className="grid grid-cols-[50px_2fr_100px_120px_150px] gap-4 items-center text-center min-h-[50px]"
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
        <div className="text-sm text-right">{name}</div>
        <div className="text-sm text-right">{price}</div>
        <div className="text-sm text-center">{quantity}</div>
        <div className="text-sm text-center">{totalPrice}</div>
      </div>
      <hr className="border-gray-500 w-[650px] my-5" />
    </div>
  );
}

export default CartItem;
