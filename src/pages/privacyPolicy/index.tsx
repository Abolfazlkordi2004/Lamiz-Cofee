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

const Privacy: React.FC = () => {
  // State for data
  const [policyData, setPolicyData] = useState<IData[]>([]);
  const [privacyData, setPrivacyData] = useState<IData[]>([]);
  // State for loading and error handling
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch data concurrently
        const [policyResponse, privacyResponse] = await Promise.all([
          axios.get<IData[]>("http://localhost:3001/policy"),
          axios.get<IData[]>("http://localhost:3001/privacy"),
        ]);

        // Update state with fetched data
        setPolicyData(policyResponse.data);
        setPrivacyData(privacyResponse.data);
      } catch (err) {
        // Handle errors
        setError("خطایی در بارگذاری داده‌ها رخ داد. لطفاً دوباره تلاش کنید.");
        console.error("Error fetching Privacy data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  // Render loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">در حال بارگذاری...</p>
      </div>
    );
  }

  // Render error state
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
        header="قوانین و مقررات"
        text="قوانین و مقررات قهوه لمیز"
      />
      <div className="w-full h-auto">
        <div className="flex flex-col mx-50 my-15 px-10">
          {/* Policy Section */}
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-info-50.png"
              alt="قوانین"
              width={28}
              height={28}
            />
            <h2 className="text-2xl font-bold mx-5">قوانین و مقررات</h2>
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

          {/* Privacy Section */}
          <div className="flex flex-row-reverse mt-15 px-5 mb-10">
            <Image
              src="/icons/icons8-copyright-48.png"
              alt="حریم خصوصی"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-bold mx-5">حریم خصوصی</h2>
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
};

export default Privacy;