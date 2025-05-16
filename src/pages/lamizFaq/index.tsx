"use client";  

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

const Faq: React.FC = () => {
  
  const [branchData, setBranchData] = useState<IData[]>([]);
  const [accountData, setAccountData] = useState<IData[]>([]);
  const [orderData, setOrderData] = useState<IData[]>([]);
  const [productData, setProductData] = useState<IData[]>([]);
 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

   
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
     
        const [branchResponse, accountResponse, orderResponse, productResponse] =
          await Promise.all([
            axios.get<IData[]>("http://localhost:3001/giveBranch"),
            axios.get<IData[]>("http://localhost:3001/account"),
            axios.get<IData[]>("http://localhost:3001/order"),
            axios.get<IData[]>("http://localhost:3001/productFaq"),
          ]);

       
        setBranchData(branchResponse.data);
        setAccountData(accountResponse.data);
        setOrderData(orderResponse.data);
        setProductData(productResponse.data);
      } catch (err) {
       
        setError("خطایی در بارگذاری داده‌ها رخ داد. لطفاً دوباره تلاش کنید.");
        console.error("Error fetching FAQ data:", err);
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
      <HeaderOther header="سوالات متداول" text="سوالات متداول قهوه لمیز" />
      <div className="w-full h-auto">
        <div className="flex flex-col mx-50 my-15 px-10">
         
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-building-50.png"
              alt="شعبه"
              width={28}
              height={28}
            />
            <h2 className="text-2xl font-bold mx-5">اعطاء نمایندگی</h2>
          </div>
          <div className="flex flex-col px-10">
            {branchData.map((item) => (
              <DropdownMenu
                text={item.title}
                items={item.content}
                key={item.id}
              />
            ))}
          </div>

      
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-user-circle-24.png"
              alt="حساب کاربری"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">ورود و ثبت‌نام در سایت</h2>
          </div>
          <div className="flex flex-col px-10">
            {accountData.map((item) => (
              <DropdownMenu
                text={item.title}
                items={item.content}
                key={item.id}
              />
            ))}
          </div>

          
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-shopping-bag-50.png"
              alt="سفارشات"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">ثبت و پیگیری سفارشات</h2>
          </div>
          <div className="flex flex-col px-10">
            {orderData.map((item) => (
              <DropdownMenu
                text={item.title}
                items={item.content}
                key={item.id}
              />
            ))}
          </div>

         
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-coffee-24.png"
              alt="محصولات"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">محصولات</h2>
          </div>
          <div className="flex flex-col px-10">
            {productData.map((item) => (
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

export default Faq;