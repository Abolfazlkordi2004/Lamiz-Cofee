import CoffeeCart from "@/components/coffeeCart";
import HeaderSection from "@/components/headerSection";
import React from "react";

function Coffee() {
  const data = [
    {
      img: "/img/NUMBER-23-COFFEE-250.webp",
      header: "قهوه ترکیبی",
      productCount: "8 محصول",
    },
    {
      img: "/img/GUJI-COFFEE-250GR.webp",
      header: "قهوه تک خاستگاه",
      productCount: "7 محصول",
    },
    {
      img: "/img/GUJI-COFFEE-250GR.webp",
      header: "قهوه بدون کافئین",
      productCount: "2 محصول",
    },
    {
      img: "/img/Turkish-Coffee-250GR.webp",
      header: "قهوه ترک",
      productCount: "4 محصول",
    },
    {
      img: "/img/LAMIZ-PROSO-WITHOUTCAFFEINE.webp",
      header: "لمیزپرسو",
      productCount: "6 محصول",
    },
  ];
  return (
    <div>
      <HeaderSection img="/img/shop-background.webp" header="قهوه ها" />
      <div className="flex justify-center my-10">
        <div className="w-[1200px] h-[900px] rounded border border-gray-400 grid grid-cols-4" dir="rtl">
          {data.map((item) => (
            <CoffeeCart
              img={item.img}
              header={item.header}
              productCount={item.productCount}
              key={item.header}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coffee;