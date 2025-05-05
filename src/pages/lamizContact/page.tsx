import ContactComp from "@/components/contactComponent";
import HeaderSection from "@/components/headerSection";
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
        <div className="flex flex-row justify-center gap-10">
          <div className="bg-[#EBEAEA] w-[540px] h-[600px] rounded">
            <div className="px-8 py-5 flex justify-end">
              <h2 className="text-2xl">تماس با ما</h2>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[480px] text-right">
                <label
                  htmlFor=""
                  className="text-lg text-gray-800 font-semibold mb-5"
                >
                  نام و نام خانوادگی
                </label>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی "
                  className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
              </div>
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
