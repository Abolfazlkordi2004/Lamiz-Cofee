"use client";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [openShop, setOpenShop] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [openAnother, setOpenAnother] = useState(false);
  return (
    <header>
      <div className="flex flex-row items-center justify-around bg-black h-[90px] w-full px-50">
        <div className="flex flex-row items-center space-x-6">
          <div>
            <a href="#">
              <Image
                src="/icons/icons8-account-50.png"
                alt="account"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <Image
                src="/icons/icons8-favourite-50.png"
                alt="favourite"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <Image
                src="/icons/icons8-shopping-cart-24.png"
                alt="shopping-cart"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <ul className="flex flex-row items-center space-x-6 text-white text-sm ">
            <li
              className="hover:text-[#ff6e1f] relative"
              onMouseEnter={() => setOpenAnother(true)}
              onMouseLeave={() => setOpenAnother(false)}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff6e1f] ">
                <Image
                  src="/icons/icons8-down-arrow-24.png"
                  alt="arrow down"
                  width={32}
                  height={32}
                  className="invert hover:text-[#ff6e1f]"
                />
                <a href="#" className="text-lg">
                  سایر 
                </a>
              </div>
              {openAnother && (
                <ul className="absolute top-full right-0 mt-2 w-45 rounded-md bg-white shadow-lg z-50">
                  {[
                    "سیاست مرجوعی و عودت",
                    "انتقادات و پیشنهادات",
                    "قوانین و مقررات",
                    "قوانین",
                    "مقررات",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li
              className="hover:text-[#ff6e1f] relative "
              onMouseEnter={() => setOpenCall(true)}
              onMouseLeave={() => setOpenCall(false)}
            >
              <div className="flex items-center hover:text-[#ff6e1f] cursor-pointer gap-2">
                <Image
                  src="/icons/icons8-down-arrow-24.png"
                  alt="arrow down"
                  width={32}
                  height={32}
                  className="invert hover:text-[#ff6e1f]"
                />
                <a href="#" className="text-lg">
                  تماس با ما
                </a>
              </div>
              {openCall && (
                <ul className="absolute top-full right-0 mt-2 w-25 rounded-md bg-white shadow-lg z-50">
                  {["درباره ما", "تماس با ما "].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="hover:text-[#ff6e1f]">
              <a href="#" className="text-lg">
                فرم درخواست همکاری با ما
              </a>
            </li>
            <li className="hover:text-[#ff6e1f]">
              <a href="#" className="text-lg">
                سفارش از اسنپ فود
              </a>
            </li>
            <li className="hover:text-[#ff6e1f]">
              <a href="#" className="text-lg">
                شعبه های قهوه لمیز
              </a>
            </li>
            <li className="hover:text-[#ff6e1f]">
              <a href="#" className="text-lg">
                منو قهوه لمیز
              </a>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setOpenShop(true)}
              onMouseLeave={() => setOpenShop(false)}
            >
              <div className="flex items-center gap-2 cursor-pointer hover:text-[#ff6e1f]">
                <Image
                  src="/icons/icons8-down-arrow-24.png"
                  alt="arrow down"
                  width={32}
                  height={32}
                  className="invert"
                />
                <a href="#" className="text-lg">
                  فروشگاه محصولات
                </a>
              </div>
              {openShop && (
                <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white shadow-lg z-50 ">
                  {[
                    "قهوه ها",
                    "قهوه ترکیبی",
                    "قهوه تک خاستگاه",
                    "قهوه بدون کافئین",
                    "قهوه ترک",
                    "لمیزپرسو",
                    "قهوه سرد دم نیترو",
                    "شکلات لمیز",
                    "طعم دهنده ها",
                    "دم افزار ها",
                    "سایر محصولات",
                  ].map((item) => (
                    <li
                      key={item}
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer whitespace-nowrap text-right text-lg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center">
          <a href="#">
            <Image
              src="/icons/Lamiz-logo.webp"
              alt="lamiz-logo"
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
