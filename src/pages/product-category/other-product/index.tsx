"use client";
import HeaderSection from "@/components/headerSection";
import React, { useEffect, useState } from "react";
import ItemShoppingCart from "@/components/itemShoppingCart";
import { useFormatPrice } from "@/hooks/formatPrice";

type IOtherProduct = {
  id: number;
  img: string;
  title: string;
  price: string;
};

function OtherProduct() {
  const [data, setData] = useState<IOtherProduct[]>([]);
  const formatPrice = useFormatPrice();

  useEffect(() => {
    fetch("http://localhost:3001/other-product")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <HeaderSection img="/img/shop-background.webp" header="سایر محصولات" />
      <div className="flex justify-center my-10">
        <div
          className="w-full max-w-[1300px] border border-gray-400 rounded px-6 py-6"
          dir="rtl"
        >
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

export default OtherProduct;
