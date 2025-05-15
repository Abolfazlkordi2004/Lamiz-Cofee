"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ShopCart from "./shopCart";
import Pagination from "./pagination";

type IProduct = {
  id: number;
  img: string;
  title: string;
  price: string;
};

type IproductProps = {
  first: number;
  items: number;
  last: number;
  next: number;
  pages: number;
  prev: number;
  data: IProduct[];
};

function MainSection() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<IproductProps | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const page = searchParams ? searchParams.get("page") ?? "1" : "1";
        const per_page = searchParams
          ? searchParams.get("per_page") ?? "20"
          : "20";

        const result = await fetch(
          `http://localhost:3001/productShop?_page=${page}&_per_page=${per_page}`
        );
        if (!result.ok) {
          throw new Error("Failed to fetch products");
        }
        const jsonData = (await result.json()) as IproductProps;
        setData(jsonData);
      } catch {
        setError("خطا در دریافت محصولات");
      }
    }
    fetchData();
  }, [searchParams]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>در حال بارگذاری...</div>;
  }

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-center w-[1100px] h-[2000px] rounded border border-gray-500">
          <div className="grid grid-cols-4 gap-5">
            {data.data.map((e) => (
              <ShopCart
                key={e.id}
                img={e.img}
                price={e.price}
                title={e.title}
              />
            ))}
          </div>
        </div>
        <Pagination pageCount={data.pages} />
      </div>
    </>
  );
}

export default MainSection;
