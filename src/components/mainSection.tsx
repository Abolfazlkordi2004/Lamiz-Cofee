// pages/shop.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/compat/router"; // استفاده از next/compat/router
import ShopCart from "@/components/shopCart"; // مسیر را با پروژه خود تنظیم کنید
import { useFormatPrice } from "@/hooks/formatPrice";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 20;

type IProductShop = {
  id: number;
  img: string;
  title: string;
  price: string;
};

export default function MainSection() {
  const router = useRouter();
  const formatPrice = useFormatPrice();

  const currentPage = parseInt((router?.query.page as string) || "1", 10) - 1; // React Paginate از صفر شروع می‌کند
  const [data, setData] = useState<IProductShop[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!router?.isReady) return;
    setIsLoading(true);
    fetch(
      `http://localhost:3001/productShop?_page=${
        currentPage + 1
      }&_limit=${ITEMS_PER_PAGE}`
    )
      .then((res) => {
        const total = res.headers.get("X-Total-Count");
        if (total) setTotalCount(parseInt(total, 10));
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setData([]);
        setIsLoading(false);
      });
  }, [router?.isReady, currentPage]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = ({ selected }: { selected: number }) => {
    router?.push(`/shop?page=${selected + 1}`);
  };

  return (
    <div>
      <div className="w-[940px] rounded border border-gray-400 grid grid-cols-4 gap-4 p-4">
        {isLoading ? (
          <div className="col-span-4 text-center p-10">در حال بارگذاری...</div>
        ) : data.length ? (
          data.map((item) => (
            <ShopCart
              key={item.id}
              img={item.img}
              title={item.title}
              price={formatPrice(item.price)}
            />
          ))
        ) : (
          <div className="col-span-4 text-center p-10">داده‌ای یافت نشد</div>
        )}
      </div>
      <div className="flex justify-center mt-8 gap-2">
        <ReactPaginate
          previousLabel="قبلی"
          nextLabel="بعدی"
          breakLabel="..."
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          containerClassName="pagination flex gap-2"
          pageClassName="page-item"
          pageLinkClassName="px-4 py-2 border rounded text-black hover:bg-gray-100"
          activeLinkClassName="bg-orange-500 text-white border-orange-500"
          previousClassName="page-item"
          previousLinkClassName="px-4 py-2 border rounded text-black hover:bg-gray-100"
          nextClassName="page-item"
          nextLinkClassName="px-4 py-2 border rounded text-black hover:bg-gray-100"
          disabledClassName="opacity-50 cursor-not-allowed"
          breakClassName="page-item"
          breakLinkClassName="px-4 py-2 border rounded text-black"
          previousAriaLabel="صفحه قبلی"
          nextAriaLabel="صفحه بعدی"
        />
      </div>
    </div>
  );
}
