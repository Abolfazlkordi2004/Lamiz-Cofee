"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "./cartContext";

function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { cartCount } = useCart();

  return (
    <header className="sticky z-50 top-0">
      <div className="flex flex-row items-center justify-around bg-black h-[90px] w-full px-50">
        <div className="flex flex-row items-center space-x-6">
          {[
            { href: "/login", src: "/icons/icons8-account-50.png", alt: "account" },
            // {
            //   href: "#",
            //   src: "/icons/icons8-favourite-50.png",
            //   alt: "favourite",
            // },
            {
              href: "/card",
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
          <div className="rounded-full w-5 h-5 bg-[#ff6e1f] justify-center text-center translate-x-[-230%] translate-y-[-60%] text-white">
            {cartCount}
          </div>
        </div>
        <div className="flex flex-row items-center">
          <ul className="flex flex-row items-center space-x-6 text-white text-sm">
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
                <a href="#" className="text-[16px]">
                  سایر
                </a>
              </div>
              {hoveredMenu === "another" && (
                <div className="absolute top-full right-0 mt-0 w-50 z-50">
                  <ul className="rounded-md bg-white shadow-lg">
                    {[
                      {
                        href: "/refundReturns",
                        text: "سیاست مرجوعی و انتقادات",
                      },
                      {
                        href: "/lamizcare",
                        text: "انتقادات و پیشنهادات",
                      },
                      {
                        href: "/privacyPolicy",
                        text: "قوانین و مقررات",
                      },
                      {
                        href: "/lamizFaq",
                        text: "سوالات متداول",
                      },
                      {
                        href: "/article",
                        text: "مقالات",
                      },
                    ].map(({ href, text }) => (
                      <li
                        key={text}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-[16px] hover:text-[#ff6e1f]"
                      >
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
                <a href="#" className="text-[16px] text-nowrap">
                  تماس با ما
                </a>
              </div>
              {hoveredMenu === "call" && (
                <div className="absolute top-full right-0 mt-0 w-32 z-50">
                  <ul className="rounded-md bg-white shadow-lg">
                    {[
                      { href: "/lamizCoffeeAbout", text: "درباره ما" },
                      { href: "/lamizContact", text: "ارتباط با ما" },
                    ].map(({ href, text }) => (
                      <li
                        key={text}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-[16px] text-nowrap hover:text-[#ff6e1f]"
                      >
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {[
              { href: "/employmentForms", text: "فرم درخواست همکاری با ما" },
              { href: "/snappfood-branches", text: "سفارش از اسنپ فود" },
              { href: "/branches", text: "شعبه‌های قهوه لمیز" },
              { href: "/lamiz-coffee-menu", text: "منو قهوه لمیز" },
            ].map(({ href, text }) => (
              <li key={text} className="hover:text-[#ff6e1f]">
                <Link href={href} className="text-[16px] text-nowrap">
                  {text}
                </Link>
              </li>
            ))}
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
                <Link href="/shop" className="text-[16px] text-nowrap">
                  فروشگاه محصولات
                </Link>
              </div>
              {hoveredMenu === "shop" && (
                <div className="absolute top-full right-0 mt-0 w-52 z-50">
                  <ul className="rounded-md bg-white shadow-lg">
                    {[
                      { text: "قهوه‌ها", href: "/product-category/coffee" },
                      {
                        text: "قهوه ترکیبی",
                        href: "/product-category/coffee/combinatorial",
                      },
                      {
                        text: "قهوه تک‌خاستگاه",
                        href: "/product-category/coffee/single_origin",
                      },
                      {
                        text: "قهوه بدون کافئین",
                        href: "/product-category/coffee/coffeinless",
                      },
                      {
                        text: "قهوه ترک",
                        href: "/product-category/coffee/turk",
                      },
                      {
                        text: "لمیزپرسو",
                        href: "/product-category/coffee/lamizpresso",
                      },
                      {
                        text: "قهوه سرد دم نیترو",
                        href: "/product-category/nitro-cold-brew",
                      },
                      {
                        text: "شکلات لمیز",
                        href: "/product-category/lamiz-chocolate",
                      },
                      {
                        text: "طعم‌دهنده‌ها",
                        href: "/product-category/flavoring",
                      },
                      {
                        text: "دم‌افزارها",
                        href: "/product-category/blowers",
                      },
                      {
                        text: "سایر محصولات",
                        href: "/product-category/other-product",
                      },
                    ].map(({ text, href }) => (
                      <li
                        key={text}
                        className="px-4 py-2 text-gray-700 hover:bg-gray-100 text-right cursor-pointer whitespace-nowrap text-[16px] hover:text-[#ff6e1f]"
                      >
                        <Link href={href}>{text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="flex flex-row items-center ml-5">
          <Link href="/">
            <Image
              src="/icons/Lamiz-logo.webp"
              alt="lamiz-logo"
              width={60}
              height={60}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
