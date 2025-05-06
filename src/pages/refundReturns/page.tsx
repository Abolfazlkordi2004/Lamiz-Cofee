import HeaderOther from "@/components/headerOther";
import Image from "next/image";
import React from "react";

function RefundPage() {
  return (
    <div>
      <HeaderOther
        header="سیاست مرجوعی و عودت"
        text="راهنمای سیاست مرجوعی و عودت کالا در قهوه لمیز"
      />
      <div className="w-full h-[1200px]">
        <div className="flex flex-col w-[1500px] bg-gray-600 h-[900px] mx-auto mt-15">
          <div className="flex flex-row-reverse mt-15 px-5">
            <Image
              src="/icons/icons8-shopping-basket-50.png"
              alt="icons"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">ثبت سفارش و ارسال کالا</h2>
            
          </div>
          <div className="flex flex-row-reverse mt-15 px-5">
            <Image
              src="/icons/icons8-undo-48.png"
              alt="icons"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">بازگرداندن کالا</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RefundPage;
