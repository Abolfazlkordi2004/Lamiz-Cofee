import { useCart } from "@/components/cartContext";
import { useFormatPrice } from "@/hooks/formatPrice";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  company: string;
  area: string;
  city: string;
  street: string;
  codePost: string;
  phone: string;
  email: string;
};

function Checkout() {
  const formatPrice = useFormatPrice();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = (data: FormValues) => {
    console.log("اطلاعات ارسال‌شده:", data);
  };

  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const offPrice = (10 * totalPrice) / 100;
  const total = totalPrice + offPrice;
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

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
      <div
        className="w-[1140px] h-auto flex flex-row gap-5 mb-10 bg-white rounded"
        dir="rtl"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-5 w-full"
        >
          <div className="w-[550px] my-5">
            <div className="flex justify-center my-5">
              <h2 className="text-2xl">صورت حساب و حمل و نقل</h2>
            </div>
            <div className="flex flex-row-reverse mt-10 gap-10 justify-center">
              <div className="relative w-[230px] text-right">
                <label htmlFor="firstName">نام</label>
                <input
                  {...register("firstName", {
                    required: "پر کردن نام الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="relative w-[230px] text-right">
                <label htmlFor="lastName">نام خانوادگی</label>
                <input
                  {...register("lastName", {
                    required: "پر کردن نام خانوادگی الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="company">نام شرکت</label>
                <input
                  {...register("company", {
                    required: "پر کردن نام شرکت الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.company.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="area">کشور/منطقه</label>
                <p>ایران</p>
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="area">استان</label>
                <input
                  {...register("area", {
                    required: "پر کردن نام استان الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.area && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.area.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="city">شهر</label>
                <input
                  {...register("city", {
                    required: "پر کردن نام شهر الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="street">آدرس خیابان</label>
                <input
                  {...register("street", {
                    required: "پر کردن نام خیابان الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.street && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.street.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="codePost">
                  کدپستی (بدون فاصله و با اعداد انگلیسی)
                </label>
                <input
                  {...register("codePost", {
                    required: "پر کردن کد پستی الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.codePost && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.codePost.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="phone">شماره تلفن همراه</label>
                <input
                  {...register("phone", {
                    required: "پر کردن شماره تلفن الزامی است",
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex mt-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label htmlFor="email">آدرس ایمیل</label>
                <input
                  {...register("email", {
                    required: "پر کردن ایمیل الزامی است",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "ایمیل نامعتبر است",
                    },
                  })}
                  type="text"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="my-8 mx-5 w-[500px] text-right">
              <h2 className="text-2xl">توضیحات تکمیلی</h2>
            </div>
            <div className="flex flex-col mt-10 mx-5 w-[500px]">
              <div className="flex justify-start">
                <h2 className="text-l text-gray-800">
                  توضیحات سفارش (اختیاری)
                </h2>
              </div>
              <div
                className="h-[200px] w-full flex justify-end mt-5 border-gray-500 border text-right"
                dir="rtl"
              >
                <textarea className="w-full h-full px-4 py-2"></textarea>
              </div>
            </div>
          </div>

          <div className="w-[530px] my-5 mx-5 bg-[#F9F9F9] flex flex-col items-center">
            <div className="w-full flex justify-center mt-10">
              <h2 className="text-2xl">سفارش شما</h2>
            </div>
            <div className="w-[490px] h-[550px] bg-[#F0F0F0] mt-10">
              <div className="flex justify-start items-center mx-3 my-3">
                <p>محصول</p>
              </div>
              <hr className="w-[470px] mx-auto border-gray-500" />
              <div className="flex flex-row justify-between items-center mx-3 my-3">
                <p className="text-xl">مجموع</p>
                <p className="text-[#FE6E1F] text-xl">
                  {formatPrice(total.toString())}
                </p>
              </div>
            </div>
            <div
              className="flex flex-col text-right w-[490px] my-8 space-y-10"
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
                سراسر این وب سایت و برای اهدافی که در سیاست حفظ حریم خصوصی ذکر
                شده است استفاده می شود
              </p>
            </div>
            <hr className="w-[480px] border-gray-300" />
            <div className="flex flex-row gap-2 my-5 w-[480px]">
              <input
                type="checkbox"
                onChange={(e) => {
                  setIsTermsAccepted(e.target.checked);
                }}
              />
              <p>من شرایط و مقررات سایت را خوانده ام و آن را می پذیرم</p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#FE6E1F] rounded h-[50px] w-[130px] text-white cursor-pointer my-5"
                disabled={!isTermsAccepted}
              >
                ثبت سفارش
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
