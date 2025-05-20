"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Pagination from "./pagination";
import ShopCart from "./shopCart";
import ProductModal from "./productModal";
import CoffeeDetail from "./coffeeDetail";
import NitroDetail from "./nitroDetail";
import ProductDetail from "./productDetail";

type IProduct = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
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
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

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

  if (error) return <div>{error}</div>;
  if (!data) return <div>در حال بارگذاری...</div>;

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center w-[1100px] h-[2000px] rounded border border-gray-500">
          <div className="grid grid-cols-4 gap-5">
            {data.data.map((e) => (
              <ShopCart
                key={e.id}
                img={e.img}
                price={e.price}
                title={e.title}
                onSearchClick={() => setSelectedProduct(e)}
              />
            ))}
          </div>
        </div>
        <Pagination pageCount={data.pages} />
      </div>

      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <ProductModal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
          >
            {selectedProduct.category === "combinatorial" ? (
              <CoffeeDetail
                id={selectedProduct.id}
                img={selectedProduct.img}
                header={selectedProduct.title}
                price={selectedProduct.price}
              />
            ) : selectedProduct.category === "single_origin" ? (
              <CoffeeDetail
                id={selectedProduct.id}
                header={selectedProduct.title}
                img={selectedProduct.img}
                price={selectedProduct.price}
              />
            ) : selectedProduct.category === "nitro" ? (
              <NitroDetail
                id={selectedProduct.id}
                header={selectedProduct.title}
                img={selectedProduct.img}
                price={selectedProduct.price}
              />
            ) : (
              <ProductDetail
                id={selectedProduct.id}
                header={selectedProduct.title}
                img={selectedProduct.img}
                price={selectedProduct.price}
              />
            )}
          </ProductModal>
        )}
      </ProductModal>
    </>
  );
}

export default MainSection;
