import CoffeeCart from "@/components/coffeeCart";
import HeaderSection from "@/components/headerSection";
import Link from "next/link";
import React from "react";

function Coffee() {
  const data = [
    {
      img: "/img/NUMBER-23-COFFEE-250.webp",
      header: "قهوه ترکیبی",
      productCount: "8 محصول",
      href: "/product-category/coffee/combinatorial",
    },
    {
      img: "/img/GUJI-COFFEE-250GR.webp",
      header: "قهوه تک خاستگاه",
      productCount: "7 محصول",
      href: "/product-category/coffee/single_origin",
    },
    {
      img: "/img/GUJI-COFFEE-250GR.webp",
      header: "قهوه بدون کافئین",
      productCount: "2 محصول",
      href: "/product-category/coffee/coffeinless",
    },
    {
      img: "/img/Turkish-Coffee-250GR.webp",
      header: "قهوه ترک",
      productCount: "4 محصول",
      href: "/product-category/coffee/turk",
    },
    {
      img: "/img/LAMIZ-PROSO-WITHOUTCAFFEINE.webp",
      header: "لمیزپرسو",
      productCount: "6 محصول",
      href: "/product-category/coffee/lamizpresso",
    },
  ];
  return (
    <div>
      <HeaderSection img="/img/shop-background.webp" header="قهوه ها" />
      <div className="flex justify-center my-10">
        <div
          className="w-[1300px] h-[900px] rounded border border-gray-400 grid grid-cols-4"
          dir="rtl"
        >
          {data.map((item) => (
            <Link href={item.href} key={item.header}>
              <CoffeeCart
                img={item.img}
                header={item.header}
                productCount={item.productCount}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coffee;
