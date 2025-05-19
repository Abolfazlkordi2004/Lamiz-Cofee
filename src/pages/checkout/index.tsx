import Image from "next/image";
import React from "react";

function Checkout() {
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
      <div className="w-[1140px] h-[2000px] flex flex-row gap-5 mb-10 bg-white rounded">
        <div className="w-[530px] my-5 mx-5 bg-[#F9F9F9] flex flex-col items-center">
          <div className="w-full flex justify-center mt-10">
            <h2 className="text-2xl">سفارش شما</h2>
          </div>
          <div className="w-[490px] h-[520px] bg-[#F0F0F0] mt-10"></div>
          <div
            className="flex flex-col text-right w-[490px] my-8 space-y-10 "
            dir="rtl"
          >
            <div className="flex flex-row item-center">
              <input type="radio" name="work" />
              <span className="mr-2">بانک سامان</span>
              <Image
                src="/img/SWI-Icon.png"
                alt="logo"
                width={30}
                height={30}
                className="mx-2"
              />
            </div>
            <div className="flex flex-row item-center">
              <input type="radio" name="work" />
              <span className="mr-2">بانک امن ایریا</span>
              <Image
                src="/img/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="mx-2"
              />
            </div>
          </div>
          <hr className="w-[480px] border-gray-300" />
          <div className="w-[490px] my-8" dir="rtl">
            <p className="text-justify text-gray-500">
              اطلاعات شخصی شما برای پردازش سفارش شما، پشتیبانی از تجربه شما در
              سراسر این وب سایت و برای اهدافی که در سیاست حفظ حریم خصوصی ذکر شده
              است استفاده می شود
            </p>
          </div>
          <hr className="w-[480px] border-gray-300" />
          <div className="flex flex-row-reverse gap-2">
            <input type="checkbox" />
            <p>من شرایط و مقررات سایت را خوانده ام و آن را می پذیرم</p>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Checkout;
