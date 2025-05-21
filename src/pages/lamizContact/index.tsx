"use client";
import ContactComp from "@/components/contactComponent";
import HeaderSection from "@/components/headerSection";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const DynamicMap = dynamic(() => import("@/components/map"), {
  ssr: false,
});

type FormValues = {
  Name: string;
  email: string;
  phone: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("اطلاعات ارسال‌شده:", data);
  };
  return (
    <div className="bg-[#F0F0F0]">
      <HeaderSection
        header="ارتباط با ما"
        img="/img/about-us-background.webp"
      />
      <div className="w-full mih-h-[1700px] h-auto">
        <div className="flex flex-row-reverse justify-around mx-25 mt-10">
          <ContactComp
            img="/icons/icons8-address-50.png"
            header="آدرس"
            text="شهرک صنعتی نظرآباد، بلوار دکتر حسابی، خیابان افرا، گروه صنعتی زال ایرانیان پلاک ۴۱G"
          />
          <ContactComp
            img="/icons/icons8-phone-50.png"
            header="تلفن تماس"
            text="۰۲۱۵۴۴۲۹۰۰۰"
          />
          <ContactComp
            img="/icons/icons8-email-50.png"
            header="پست الکترونیک"
            text="info@LamizCoffee.com"
          />
          <ContactComp
            img="/icons/icons8-clock-32.png"
            header="ساعت کاری دفتر مرکزی"
            text="از شنبـــه تا چهارشنبه
                8:۰۰ صبح الی ۱۷:۲۰ عصر"
          />
        </div>
        <div className="flex flex-row justify-center gap-10 mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[540px] min-h-[650px] h-auto rounded bg-[#EBEAEA]">
              <div className="px-8 py-5 flex justify-end">
                <h2 className="text-2xl font-semibold">تماس با ما</h2>
              </div>
              <div className="flex flex-col  items-center">
                <div className="relative w-[480px] text-right mb-8">
                  <label
                    htmlFor=""
                    className="text-lg text-gray-800 font-semibold mb-10"
                  >
                    نام و نام خانوادگی
                  </label>
                  <input
                    {...register("Name", {
                      required: "پر کردن نام و نام خانوادگی الزامی است",
                    })}
                    type="text"
                    placeholder="نام و نام خانوادگی "
                    className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                  />
                  {errors.Name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.Name.message}
                    </p>
                  )}
                </div>
                <div className="relative w-[480px] text-right mb-8">
                  <label
                    htmlFor=""
                    className="text-lg text-gray-800 font-semibold mb-5"
                  >
                    ادرس ایمیل
                  </label>
                  <input
                    {...register("email", {
                      required: "پر کردن ایمیل الزامی است",
                    })}
                    type="text"
                    placeholder=" ادرس ایمیل"
                    className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="relative w-[480px] text-right mb-8">
                  <label
                    htmlFor=""
                    className="text-lg text-gray-800 font-semibold mb-5"
                  >
                    شماره تماس
                  </label>
                  <input
                    {...register("phone", {
                      required: "پر کردن شماره تماس الزامی است",
                    })}
                    type="text"
                    placeholder="شماره تماس"
                    className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col" dir="rtl">
                  <label
                    htmlFor=""
                    className="text-lg text-gray-800 font-semibold"
                  >
                    پیام شما
                  </label>
                  <textarea className="w-[480px] h-[120px] border-gray-700 border"></textarea>
                </div>
                <div className="bg-[#FF6600] rounded w-[150px] h-[50px] text-white flex items-center justify-center cursor-pointer my-10 ml-80">
                  <button className="cursor-pointer text-l">
                    ارسال فرم تماس با ما
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="w-[650px] h-[650px] flex flex-col items-center">
            <div className="relative w-[450px] h-[400px]">
              <Image
                src="/img/MUG-ORANGE-SLOGAN-LAMIZ.webp"
                alt="Mug-orange"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl text-center font-bold">
                ما همیشه مشتاق شنیدن نظرات و پیشنهادات شما در راستای ارائه
                بهترین سرویس و خدمات هستیم
              </h2>
            </div>
            <div className="mt-5 text-wrap">
              <p className="text-center text-lg text-gray-500">
                برای ارسال پیشنهادات و نظرات‌ تان لطفا فرم را تکمیل کنید تا
                کارشناسان ما بعد از بررسی با شما ارتباط بگیرند
              </p>
            </div>
            <div className="bg-[#FE6E1F] w-[200px] h-[40px] flex items-center justify-center rounded mt-5 text-white cursor-pointer text-xl">
              <Link href="\lamizcare">
                <button className="cursor-pointer">انتقادات و پیشنهادات</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <DynamicMap />
        </div>
        <div className="flex flex-col items-center mt-20 w-4/5 mx-auto">
          <div>
            <h2 className="text-3xl font-bold">لیست همکاران قهوه لمیز</h2>
          </div>
          <div className="mt-10 flex flex-row">
            <div className="relative w-[150px] h-[150px] mx-15">
              <Image
                src="/img/cafetto-150x150.webp"
                alt="Picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[150px] h-[150px] mx-15">
              <Image
                src="/img/animo-150x150.webp"
                alt="Picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[150px] h-[150px] mx-15">
              <Image
                src="/img/puly-150x150.webp"
                alt="Picture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[150px] h-[150px] mx-15">
              <Image
                src="/img/monin-150x150.webp"
                alt="Picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
