import CartItem from "@/components/cartItem";
import React from "react";

function Cards() {
  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center justify-center">
      <div
        className="w-[1140px] h-[90px] bg-[#FE6E1F] text-white my-5 flex items-center"
        dir="rtl"
      >
        <div className="px-5">
          <h1 className="text-xl mb-2">مشتری گرامی !</h1>
          <p>
            سفارشات ثبت شده از طریق تیپاکس ( پس کرایه ) در بازه‌ی ۲ الی ۵ روز
            کاری ارسال می‌گردد.
          </p>
        </div>
      </div>
      <div className="w-[1140px] h-[1000px] bg-white flex flex-row shadow">
        <div className="w-[355px] h-[485px] flex justify-center items-center border rounded border-gray-300 mx-5 my-5">
          <div className="flex flex-col items-center justify-center">
            <div>
              <h1 className="text-xl">جمع کل سبد خرید</h1>
            </div>
            <div className="flex flex-row-reverse justify-between w-full my-5">
              <p>جمع جزء</p>
              <p className="text-gray-500">0</p>
            </div>
            <div className="flex flex-row-reverse justify-between w-full my-5">
              <p>حمل و نقل</p>
              <p>ارسال با تیپاکس</p>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-row-reverse justify-between w-full my-5">
              <p>مالیات</p>
              <p className="text-[#FE6E1F]">129,900</p>
            </div>
            <hr />
            <div className="flex flex-row-reverse justify-between w-full my-5">
              <p className="text-xl">مجموع</p>
              <p>0</p>
            </div>
            <div className="my-5">
              <button className="w-[300px] h-[45px] rounded bg-[#FE6E1F] text-white flex justify-center items-center cursor-pointer">
                ادامه جهت تسویه حساب
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row-reverse justify-between w-[650px] my-5 mx-8">
            <p className="text-lg mr-25">محصول</p>
            <p className="text-lg">قیمت</p>
            <p className="text-lg">تعداد</p>
            <p className="text-lg">جمع جز</p>
          </div>
          <hr className="border-gray-600" />
          <CartItem img="/img/60-dark-chocolate-box.webp"/>
        </div>
      </div>
    </div>
  );
}

export default Cards;
