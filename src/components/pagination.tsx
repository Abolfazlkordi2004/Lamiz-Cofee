"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ReactPaginate from "react-paginate";

function Pagination({ pageCount }: { pageCount: number }) {
  const router = useRouter();
  const handlePageClick = (e: { selected: number }) => {
    const page = e.selected + 1;
    router.push(`/shop?page=${page}&per_page=20`);
  };
  return (
    <div className="mt-5" dir="rtl">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex flex-row gap-1 justify-center text-lg"
        pageClassName="border border-gray-300 rounded-lg bg-[#8D6145]"
        pageLinkClassName="px-4 py-4 cursor-pointer"
        activeClassName="bg-[#FE6E1F] text-white"
        previousClassName="border border-gray-300 rounded-lg bg-[#8D6145]"
        previousLinkClassName="px-4 py-4 cursor-pointer"
        nextClassName="border border-gray-300 rounded-lg bg-[#8D6145]"
        nextLinkClassName="px-4 py-4 cursor-pointer "
        breakClassName="border border-gray-300 rounded-lg"
        breakLinkClassName="px-4 py-4"
        disabledClassName="opacity-50 cursor-not-allowed"
      />
    </div>
  );
}

export default Pagination;
