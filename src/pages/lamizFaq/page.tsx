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
  const response = await axios.get<IData[]>("http://localhost:3001/privacy");
  const privacyData = response.data;

  const responseReturn = await axios.get<IData[]>(
    "http://localhost:3001/policy"
  );
  const policyData = responseReturn.data;
  return (
    <div>
      <HeaderOther
        header="سیاست مرجوعی و عودت"
        text="راهنمای سیاست مرجوعی و عودت کالا در قهوه لمیز"
      />
      <div className="w-full h-auto">
        <div className="flex flex-col mx-50 my-15 px-10">
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-info-50.png"
              alt="icons"
              width={28}
              height={28}
            />
            <h2 className="text-2xl font-bold mx-5"> قوانین و مقررات </h2>
          </div>
          <div className="flex flex-col px-10">
            {policyData.map((item) => (
              <DropdownMenu
                text={item.title}
                items={item.content}
                key={item.id}
              />
            ))}
          </div>
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-copyright-48.png"
              alt="icons"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5"> حریم خصوصی </h2>
          </div>
          <div className="flex flex-col px-10">
            {privacyData.map((item) => (
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
