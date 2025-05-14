// components/mainSection.tsx
import React, { useEffect, useState } from "react";
import ShopCart from "./shopCart";
import { useFormatPrice } from "@/hooks/formatPrice";
import { useRouter } from "next/router";

const ITEMS_PER_PAGE = 20;

type IProductShop = {
  id: number;
  img: string;
  title: string;
  price: string;
};

function MainSection() {
  const router = useRouter();
  const formatPrice = useFormatPrice();

  const currentPage = parseInt((router.query.page as string) || "1");
  const [data, setData] = useState<IProductShop[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3001/productShop?_page=${currentPage}&_limit=${ITEMS_PER_PAGE}`)
      .then((res) => {
        const total = res.headers.get("X-Total-Count");
        if (total) setTotalCount(parseInt(total));
        return res.json();
      })
      .then((json) => setData(json));
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    router.push(`/product-category/blowers?page=${page}`);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <ShopCart
            key={item.id}
            img={item.img}
            title={item.title}
            price={formatPrice(item.price)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 border rounded ${
              currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-white text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MainSection;
