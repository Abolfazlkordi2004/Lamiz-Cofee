import { useFormatPrice } from "@/hooks/formatPrice";
import Image from "next/image";
import React from "react";

type ICartItemProps = {
  name: string;
  price: string;
  quantity: number;
  onRemove: () => void;
};

function CartCheckout({ name, price, quantity, onRemove }: ICartItemProps) {
  const formatPrice = useFormatPrice();
  return (
    <div className="w-[470px] h-auto">
      <div
        className="grid grid-cols-[50px_1fr_100px_100px] gap-4 items-center my-2 text-center min-h-[50px]"
        dir="rtl"
      >
        <button onClick={onRemove} className="flex justify-start">
          <Image
            src="/icons/icons8-trash-can-48.png"
            alt="icon"
            width={20}
            height={20}
            className="cursor-pointer mx-5"
          />
        </button>
        <div className="text-sm text-right text-nowrap">{name}</div>
        <div className="text-sm text-center">{quantity}</div>
        <div className="text-sm text-center">{formatPrice(price)}</div>
      </div>
      <hr className="border-gray-500 w-[470px] my-5 mx-2" />
    </div>
  );
}

export default CartCheckout;
