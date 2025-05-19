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
          <div className="w-[490px] h-[550px] bg-[#F0F0F0] mt-10">
            <div className="flex justify-end items-center mx-3 my-3">
              <p>محصول</p>
            </div>
            <hr className="w-[470px] mx-auto border-gray-500"/>
            <div className="flex flex-row-reverse justify-between items-center mx-3 my-3">
              <p className="text-xl">مجموع</p>
              <p className="text-[#FE6E1F] text-xl">0</p>
            </div>
          </div>
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
          <div className="flex flex-row-reverse gap-2 my-5 w-[480px]">
            <input type="checkbox" />
            <p>من شرایط و مقررات سایت را خوانده ام و آن را می پذیرم</p>
          </div>
          <div>
            <button className="bg-[#FE6E1F] rounded h-[50px] w-[130px] text-white cursor-pointer">
              ثبت سفارش
            </button>
          </div>
        </div>
        <div className="w-[550px]">
          <div className="flex justify-center my-5">
            <h2 className="text-2xl">صورت حساب و حمل و نقل</h2>
          </div>
          <div className="flex flex-row-reverse mt-10 gap-10  justify-center">
            <div className="relative w-[230px] text-right">
              <label htmlFor="">نام</label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
            <div className="relative w-[230px] text-right">
              <label htmlFor="">نام خانوادگی</label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> نام شرکت</label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> کشور/منطقه </label>
              <p>ایران</p>
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> استان </label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> شهر </label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> ادرس خیابان </label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> کدپستی (بدون فاصله و با اعداد انگلیسی) </label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> شماره تلفن همراه</label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <div className="relative w-[500px] text-right">
              <label htmlFor=""> آدرس ایمیل </label>
              <input
                type="text"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
              />
            </div>
          </div>
          <div className="my-8 ml-5 w-[500px] text-right">
            <h2 className="text-2xl">توضیحات تکمیلی</h2>
          </div>
          <div className="flex flex-col mt-10 ml-5 w-[500px]">
            <div className="flex justify-end">
              <h2 className="text-l text-gray-800">توضیحات سفارش (اختیاری)</h2>
            </div>
            <div
              className="h-[200px] w-full flex justify-end mt-5 border-gray-500 border text-right"
              dir="rtl"
            >
              <textarea className="w-full h-full px-4 py-2"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
