import HeaderSection from "@/components/headerSection";
import React from "react";

function OrderTracking() {
  return (
    <div>
      <HeaderSection img="/img/background-img.webp" header="پیگیری سفارشات" />
      <div className="bg-white w-full h-[250px] flex flex-col justify-center items-center">
        <div>
          <p className="text-wrap text-[#7A808A]">
            برای پیگیری سفارش، لطفا شماره سفارش و آدرس ایمیل خود را در کادرهای
            زیر وارد کرده و دکمه پیگیری را فشار دهید. شماره سفارش از طریق رسید و
            ایمیلی که به شما ارسال شده در اختیارتان قرار گرفته است.
          </p>
        </div>
        <div className="flex flex-row-reverse gap-5 items-center justify-center mt-8">
          <div className="flex flex-col" dir="rtl">
            <label htmlFor="">شناسه سفارش (ID)</label>
            <input
              type="text"
              className="w-[480px] h-[40px] mt-3 border border-gray-500 rounded px-4"
              placeholder="شماره سفارش در ایمیل ارسال شده به شما موجود است "
            />
          </div>
          <div className="flex flex-col" dir="rtl">
            <label htmlFor="">ایمیل صورتحساب</label>
            <input
              type="text"
              className="w-[480px] h-[40px] mt-3 border border-gray-500 rounded px-4"
              placeholder="ایمیلی که در هنگام ثبت سفارش وارد کردید"
            />
          </div>
          <div className="flex items-center justify-center w-[135px] h-[42px] bg-[#FE6E1F] text-white rounded font-bold mt-9 cursor-pointer">
            <button>پیگیری</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTracking;
