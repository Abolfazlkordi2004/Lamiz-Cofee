"use client";
import HeaderOther from "@/components/headerOther";
import ProductCart from "@/components/productCart";
import Sidebar from "@/components/sideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IProductcCartProps } from "@/components/productCart";

const Menu: React.FC = () => {
  const [allProducts, setAllProducts] = useState<IProductcCartProps[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("hotdrink");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<IProductcCartProps[]>(
          "http://localhost:3001/coffeeMenu"
        );
        console.log(response.data);
        setAllProducts(response.data);
      } catch (error) {
        console.error("خطا در دریافت منو:", error);
      }
    };

    fetchData();
  }, []);
  console.log(
    "همه محصولات:",
    allProducts.map((p) => p.category)
  );
  const filteredProduct = allProducts.filter(
    (product) => product.category === selectedCategory
  );
  console.log("دسته‌بندی انتخاب‌شده:", selectedCategory);

  return (
    <div>
      <HeaderOther
        header="منو قهوه لمیز"
        text="سرو در همه شعبه های قهوه لمیز"
      />
      <div
        className="bg-[#F0F0F0] mx-8 my-8 flex flex-row gap-8 items-start rounded-xl p-8"
        dir="rtl"
      >
        <Sidebar selected={selectedCategory} onSelect={setSelectedCategory} />
        <ProductCart products={filteredProduct} />
      </div>
    </div>
  );
};

export default Menu;
