import HeaderSection from "@/components/headerSection";
import React from "react";
import ChocolateCart from "@/components/chocolateCart";

type Iblowers = {
  id: number;
  img: string;
  title: string;
  price: string;
};

async function Blowers() {
  const res = await fetch(`http://localhost:3001/blowers`);
  const data = (await res.json()) as Iblowers[];

  return (
    <div>
      <HeaderSection img="/img/shop-background.webp" header=" طعم دهنده‌ها " />
      <div className="flex justify-center my-10" dir="rtl">
        <div className="w-full max-w-[1300px] border border-gray-400 rounded px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <ChocolateCart
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blowers;
