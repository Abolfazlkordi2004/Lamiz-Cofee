"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type IMenuCoffee = {
  name: string;
  slug: string;
  img: string;
};

type ISideBar = {
  selected: string;
  onSelect: (category: string) => void;
};

export default function Sidebar({ selected, onSelect }: ISideBar) {
  const [menuCategories, setMenuCategories] = useState<IMenuCoffee[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get<IMenuCoffee[]>(
          "http://localhost:3001/menuCategorys"
        );
        setMenuCategories(response.data);
      } catch (error) {
        console.error("خطا در دریافت دسته‌بندی‌ها:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <aside className="w-40 self-stretch p-4">
      <ul className="space-y-4">
        {menuCategories.map((cat) => (
          <li
            key={cat.slug}
            className={`cursor-pointer p-2 rounded ${
              selected === cat.slug
                ? "underline text-[#FE6E1F]"
                : "hover:bg-gray-200"
            }`}
            onClick={() => onSelect(cat.slug)}
          >
            <div className="flex flex-col justify-center items-center">
              <Image src={cat.img} alt="image" width={80} height={80} />
              <p className="text-nowrap mt-2 text-l">{cat.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
