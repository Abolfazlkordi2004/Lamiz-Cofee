"use client";
import CoffeeDetail from "@/components/coffeeDetail";
import HeaderSection from "@/components/headerSection";
import ItemShoppingCart from "@/components/itemShoppingCart";
import NitroDetail from "@/components/nitroDetail";
import ProductDetail from "@/components/productDetail";
import ProductModal from "@/components/productModal";
import React, { useEffect, useState } from "react";

type Iblowers = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
};

type IProduct = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
};

function Blowers() {
  const [data, setData] = useState<Iblowers[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  // const formatPrice = useFormatPrice();

  useEffect(() => {
    fetch("http://localhost:3001/blowers")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <HeaderSection img="/img/shop-background.webp" header="دم‌افزارها" />
      <div className="flex justify-center my-10" dir="rtl">
        <div className="w-full max-w-[1300px] border rounded px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <ItemShoppingCart
                id={item.id}
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                onSearchClick={() => setSelectedProduct(item)}
              />
            ))}
          </div>
        </div>
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
    </div>
  );
}

export default Blowers;
