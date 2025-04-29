"use client";
import Image from "next/image";
import React, { useState } from "react";

function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  return (
    <header>
      <div className="flex flex-row items-center justify-around bg-black h-[90px] w-full px-50">
        {/* آیکن‌ها */}
        <div className="flex flex-row items-center space-x-6">
          {[
            { href: "#", src: "/icons/icons8-account-50.png", alt: "account" },
            {
              href: "#",
              src: "/icons/icons8-favourite-50.png",
              alt: "favourite",
            },
            {
              href: "#",
              src: "/icons/icons8-shopping-cart-24.png",
              alt: "shopping-cart",
            },
          ].map(({ href, src, alt }) => (
            <div key={alt}>
              <a href={href}>
                <Image
                  src={src}
                  alt={alt}
                  width={24}
                  height={24}
                  className="invert"
                />
              </a>
            </div>
          ))}
        </div>

        {/* منو */}
        <div className="flex flex-row items-center">
          <ul className="flex flex-row items-center space-x-6 text-white text-sm">
            {/* منوی سایر */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("another")}
              onMouseLeave={() => setHoveredMenu(null)}
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
                  سایر
                </a>
              </div>
              {hoveredMenu === "another" && (
                <div className="absolute top-full right-0 mt-0 w-48 z-50">
                  <ul className="rounded-md bg-white shadow-lg">
                    {[
                      "سیاست مرجوعی و عودت",
                      "انتقادات و پیشنهادات",
                      "قوانین و مقررات",
                      "سوالات متداول",
                      "مقالات ",
                    ].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-lg hover:text-[#ff6e1f]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* منوی تماس با ما */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("call")}
              onMouseLeave={() => setHoveredMenu(null)}
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
                  تماس با ما
                </a>
              </div>
              {hoveredMenu === "call" && (
                <div className="absolute top-full right-0 mt-0 w-32 z-50">
                  <ul className="rounded-md bg-white shadow-lg">
                    {["درباره ما", "تماس با ما"].map((item) => (
                      <li
                        key={item}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-lg hover:text-[#ff6e1f]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* آیتم‌های ساده */}
            {[
              { href: "#", text: "فرم درخواست همکاری با ما" },
              { href: "#", text: "سفارش از اسنپ فود" },
              { href: "#", text: "شعبه های قهوه لمیز" },
              { href: "#", text: "منو قهوه لمیز" },
            ].map(({ href, text }) => (
              <li key={text} className="hover:text-[#ff6e1f]">
                <a href={href} className="text-lg">
                  {text}
                </a>
              </li>
            ))}

            {/* منوی فروشگاه */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredMenu("shop")}
              onMouseLeave={() => setHoveredMenu(null)}
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
              {hoveredMenu === "shop" && (
                <div className="absolute top-full right-0 mt-0 w-52 z-50">
                  <ul className="rounded-md bg-white shadow-lg">
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
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-lg hover:text-[#ff6e1f]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>

        {/* لوگو */}
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
