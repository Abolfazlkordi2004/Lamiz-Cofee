import DropdownMenu from "@/components/dropDownMenu";
import HeaderOther from "@/components/headerOther";
import axios from "axios";
import Image from "next/image";
import React from "react";

type IData = {
  id: number;
  title: string;
  content: string[];
};

async function Faq() {
  const response = await axios.get<IData[]>("http://localhost:3001/giveBranch");
  const branchData = response.data;

  const responseAccount = await axios.get<IData[]>(
    "http://localhost:3001/account"
  );
  const accountData = responseAccount.data;

  const responseOrder = await axios.get<IData[]>("http://localhost:3001/order");
  const orderData = responseOrder.data;

  const responseProduct = await axios.get<IData[]>(
    "http://localhost:3001/productFaq"
  );
  const productData = responseProduct.data;

  return (
    <div>
      <HeaderOther header="سوالات متداول" text="سوالات متداول قهوه لمیز" />
      <div className="w-full h-auto">
        <div className="flex flex-col mx-50 my-15 px-10">
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-building-50.png"
              alt="icons"
              width={28}
              height={28}
            />
            <h2 className="text-2xl font-bold mx-5"> اعطاء نمایندگی</h2>
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
              alt="icons"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">ورود و ثبت‌نام در سایت </h2>
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
              alt="icons"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5"> ثبت و پیگیری سفارشات </h2>
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
              alt="icons"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5"> محصولات </h2>
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
}

export default Faq;
