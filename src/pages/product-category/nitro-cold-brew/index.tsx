"use client";
import HeaderSection from "@/components/headerSection";
import React, { useEffect, useState } from "react";
import ItemShoppingCart from "@/components/itemShoppingCart";
import { useFormatPrice } from "@/hooks/formatPrice";

type INitroCold = {
  id: number;
  img: string;
  title: string;
  price: string;
};

function NitroCold() {
  const [data, setData] = useState<INitroCold[]>([]);
  const formatPrice = useFormatPrice();

  useEffect(() => {
    fetch("http://localhost:3001/nitro-cold-brew-coffee")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <HeaderSection
        img="/img/shop-background.webp"
        header="قهوه سرد دم نیترو"
      />
      <div className="flex justify-center my-10">
        <div className="w-full max-w-[1300px] border border-gray-400 rounded px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <ItemShoppingCart
                key={item.id}
                img={item.img}
                title={item.title}
                price={formatPrice(item.price)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NitroCold;
