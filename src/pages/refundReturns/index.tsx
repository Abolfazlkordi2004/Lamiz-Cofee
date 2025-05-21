"use client"; // Mark as client component for Next.js

import { useEffect, useState } from "react";
import DropdownMenu from "@/components/dropDownMenu";
import HeaderOther from "@/components/headerOther";
import axios from "axios";
import Image from "next/image";

type IData = {
  id: number;
  title: string;
  content: string[];
};

const RefundPage: React.FC = () => {
  const [refundData, setRefundData] = useState<IData[]>([]);
  const [returnData, setReturnData] = useState<IData[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [refundResponse, returnResponse] = await Promise.all([
          axios.get<IData[]>("http://localhost:3001/refund"),
          axios.get<IData[]>("http://localhost:3001/return"),
        ]);

        setRefundData(refundResponse.data);
        setReturnData(returnResponse.data);
      } catch (err) {
        setError("خطایی در بارگذاری داده‌ها رخ داد. لطفاً دوباره تلاش کنید.");
        console.error("Error fetching Refund data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">در حال بارگذاری...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <HeaderOther
        header="سیاست مرجوعی و عودت"
        text="راهنمای سیاست مرجوعی و عودت کالا در قهوه لمیز"
      />
      <div className="w-full h-auto">
        <div className="flex flex-col mx-50 my-15 px-10">
          {/* Refund Section */}
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-shopping-basket-50.png"
              alt="سفارش و ارسال"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">ثبت سفارش و ارسال کالا</h2>
          </div>
          <div className="flex flex-col px-10">
            {refundData.map((item) => (
              <DropdownMenu
                text={item.title}
                items={item.content}
                key={item.id}
              />
            ))}
          </div>

          {/* Return Section */}
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-undo-48.png"
              alt="بازگرداندن"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">بازگرداندن کالا</h2>
          </div>
          <div className="flex flex-col px-10">
            {returnData.map((item) => (
              <DropdownMenu
                text={item.title}
                items={item.content}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPage;
