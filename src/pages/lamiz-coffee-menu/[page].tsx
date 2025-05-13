"use client"
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import Image from "next/image";

type IData = {
  id: number;
  img: string;
  entitle: string;
  fastitle: string;
  size: string[];
  description: string;
};

export default function MenuCategoryPage() {
  const [menu, setMenu] = useState<IData[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/coffee")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  });
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">منوی</h1>
      <div className="grid grid-cols-1 gap-4">
        {menu.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg shadow">
            <Image src={item.img} alt="coffee-image" />
            <h2 className="text-xl font-semibold">{item.fastitle}</h2>
            <h2 className="text-xl font-semibold">{item.entitle}</h2>
            <p className="text-gray-600">{item.size.join("/")}</p>
            <p className="text-yellow-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
