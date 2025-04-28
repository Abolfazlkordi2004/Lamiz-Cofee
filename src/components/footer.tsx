import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <header>
      <div className="w-full h-[350px] bg-black">
        <div className="flex flex-row-reverse justify-around items-center py-10 px-40">
          <div>
            <Image
              src="/icons/Lamiz-logo.webp"
              alt="Lamiz-logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">دسترسی سریع</h3>
            <ul className="text-center mt-8 cursor-pointer hover:text-[#ff6e1f]">
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                منو قهوه لمیز
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                شعبه‌های قهوه لمیز
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                پیگیری سفارشات
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                فروشگاه محصولات
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                مقالات
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">منوی قهوه لمیز</h3>
            <ul className="text-center mt-8 cursor-pointer hover:text-[#ff6e1f]">
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                درباره ما
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                ارتباط با ما
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                سوالات متداول
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                قوانین و مقررات
              </li>
              <li className="text-white text-lg hover:text-[#ff6e1f] mt-1">
                سیاست مرجوعی
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-xl">مجوزهای قهوه لمیز</h3>
            <div className="text-center mt-10">
              <Image
                src="/img/logo-enamd.png"
                alt="enamad"
                width={100}
                height={100}
              />
              <div className="flex gap-3 justify-center items-center mt-5 ">
                <div>
                  <Image
                    src="/icons/icons8-instagram-50.png"
                    alt="instagram"
                    width={25}
                    height={25}
                    className="invert cursor-pointer"
                  />
                </div>
                <div>
                  <Image
                    src="/icons/icons8-linkedin-50.png"
                    alt="linkedin"
                    width={25}
                    height={25}
                    className="invert cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-right mt-1">
          <p className=" text-white px-5 ">
            تمامی حقوق این وبسایت برای قهوه لمیز محفوظ می‌باشد.©
          </p>
        </div>
      </div>
    </header>
  );
}

export default Footer;
