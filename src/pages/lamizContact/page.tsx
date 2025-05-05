import ContactComp from "@/components/contactComponent";
import HeaderSection from "@/components/headerSection";
import Image from "next/image";
import React from "react";

function Contact() {
  return (
    <div>
      <HeaderSection
        header="ارتباط با ما"
        img="/img/about-us-background.webp"
      />
      <div className="w-full h-[1500px]">
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
          <div className="w-[540px] h-[650px] rounded">
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
                  type="text"
                  placeholder="نام و نام خانوادگی "
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
              </div>
              <div className="relative w-[480px] text-right mb-8">
                <label
                  htmlFor=""
                  className="text-lg text-gray-800 font-semibold mb-5"
                >
                  ادرس ایمیل
                </label>
                <input
                  type="text"
                  placeholder=" ادرس ایمیل"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
              </div>
              <div className="relative w-[480px] text-right mb-8">
                <label
                  htmlFor=""
                  className="text-lg text-gray-800 font-semibold mb-5"
                >
                  شماره تماس
                </label>
                <input
                  type="text"
                  placeholder="شماره تماس"
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
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
              <div className="bg-[#FF6600] rounded w-[150px] h-[50px] text-white flex items-center justify-center cursor-pointer mt-10 ml-80">
                <button className="cursor-pointer text-lg">
                  ارسال فرم تماس با ما
                </button>
              </div>
            </div>
          </div>
          <div className="w-[650px] h-[650px] bg-gray-600">
            <div className="relative w-[150px] h[150px]">
              <Image src="/img/MUG-ORANGE-SLOGAN-LAMIZ.webp" alt="Mug-orange" fill className="object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
