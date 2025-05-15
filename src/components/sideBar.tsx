"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

type IMenuCoffee = {
  name: string;
  slug: string;
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
    <aside className="w-40 p-4">
      <ul className="space-y-4">
        {menuCategories.map((cat) => (
          <li
            key={cat.slug}
            className={`cursor-pointer p-2 rounded ${
              selected === cat.slug
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => onSelect(cat.slug)} 
          >
            {cat.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
