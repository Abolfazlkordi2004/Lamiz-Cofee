"use client";

import Image from "next/image";
import React, { useState } from "react";
import ShopCart from "@/components/shopCart";
import { ChevronDown, ChevronUp } from "lucide-react";

function Page() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    "قهوه ها": false,
    "ماشین الات و تجهیرات": false,
    "سایرمحصولات ": false,
  });

  const toggleSubMenu = (category: string) => {
    setExpanded((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categories = [
    { name: "شکلات لمیز" },
    {
      name: "قهوه ها",
      subItems: [
        "قهوه ترکیبی",
        "قهوه تک خاستگاه",
        "قهوه بدون کافئین ",
        "قهوه ترک",
        "لمیزپرسو",
      ],
    },
    { name: "قهوه سرد دم نیترو " },
    { name: "طعم دهنده ها  " },
    {
      name: "ماشین الات و تجهیرات",
      subItems: ["دم افزار ها"],
    },
    {
      name: "سایرمحصولات",
      subItems: ["شاخه وانیل ", "لیوان صد بار مصرف"],
    },
  ];
  const weightProducts = [
    { name: "وزن محصولات", subItems: ["250 گرم", "1 کیلوگرم"] },
    {
      name: "میزان کافئین",
      subItems: ["متوسط به بالا", "بالا", "متوسط", "بدون کافئین"],
    },
    {
      name: "درجه اسیاب",
      subItems: [
        "دانه قهوه",
        "آسیاب شده برای متد قهوه ترک",
        "اسپرسو ماشین صنعتی",
        "اسپرسو ماشین خانگی",
        "جذوه یا ایبریک",
        "فیلتر کاغذی",
        "فیلتر فلزی",
        "فرنچ پرس",
        "ائروپرس",
        "موکاپات",
      ],
    },
    {
      name: "ترکیب قهوه",
      subItems: [
        "100% عربیکا",
        "100% ربوستا",
        "100% عربیکا تک خاستگاه",
        "70% عربیکا، 30% ربوستا",
        "50% عربیکا، 50% ربوستا",
        "ترکیب تمام محصولات",
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[400px] relative flex items-center justify-center">
        <Image
          src="/img/shop-background.webp"
          alt="shop-background"
          fill
          className="object-cover z-0"
        />
        <div className="flex w-[1100px] h-[200px] items-center justify-between z-10">
          <div>
            <div className="rounded-full bg-[#ff6e1f] mb-3">
              <Image
                src="/icons/icons8-instagram-50.png"
                alt="instagram"
                width={30}
                height={30}
                className="invert px-1 py-1"
              />
            </div>
            <div className="rounded-full bg-[#ff6e1f] mb-3">
              <Image
                src="/icons/icons8-linkedin-50.png"
                alt="linkedin"
                width={30}
                height={30}
                className="invert px-1 py-1"
              />
            </div>
          </div>
          <div>
            <h1 className="text-white font-bold text-4xl">محصولات قهوه لمیز</h1>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-white w-full h-[1200px] ">
        <div className="flex items-center justify-center gap-5 mt-20">
          <div className="w-[920px] h-[1500px] rounded border border-gray-400 grid grid-cols-4">
            <ShopCart />
            <ShopCart />
            <ShopCart />
            <ShopCart />
          </div>

          {/* Category Filter */}
          <div className="w-[250px] h-[500px] rounded border border-gray-400 translate-y-[-100%] overflow-y-auto">
            <div className="flex justify-end">
              <h2 className="text-xl px-3 py-3 font-bold">دسته بندی محصولات</h2>
            </div>
            <div>
              {categories.map(({ name, subItems }) => (
                <div key={name} className="mx-3 my-3">
                  <div
                    className="flex items-center justify-end cursor-pointer "
                    onClick={() => subItems && toggleSubMenu(name)}
                  >
                    {subItems &&
                      (expanded[name] ? (
                        <ChevronUp className="w-5 h-5 flex justify-start" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      ))}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{name}</span>
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-green-600"
                      />
                    </div>
                  </div>
                  {subItems && expanded[name] && (
                    <ul className="mt-2 pr-5 text-right text-lg">
                      {subItems.map((item) => (
                        <div
                          key={item}
                          className="flex flex-row justify-end space-x-3"
                        >
                          <li className="py-1">{item}</li>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-green-600"
                            />
                          </div>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div>
              {weightProducts.map(({ name, subItems }) => (
                <div key={name} className="mx-3 my-3">
                  <div
                    className="flex items-center justify-end cursor-pointer "
                    onClick={() => subItems && toggleSubMenu(name)}
                  >
                    {subItems &&
                      (expanded[name] ? (
                        <ChevronUp className="w-5 h-5 flex justify-start" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      ))}
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{name}</span>
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-green-600"
                      />
                    </div>
                  </div>
                  {subItems && expanded[name] && (
                    <ul className="mt-2 pr-5 text-right text-lg">
                      {subItems.map((item) => (
                        <div
                          key={item}
                          className="flex flex-row justify-end space-x-3"
                        >
                          <li className="py-1">{item}</li>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-green-600"
                            />
                          </div>
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
