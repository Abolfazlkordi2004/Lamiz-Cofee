
import HeaderSection from "@/components/headerSection";
import SnappFoodCart from "@/components/snappFoodCart";
import React, { useEffect, useState } from "react";

type IData = {
  id: number;
  img: string;
  text: string;
};

export default function SnappFood() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3001/branchSnapp");
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("خطا در دریافت داده‌ها:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <HeaderSection
        img="/img/menu-background.webp"
        header="شعبه های اسنپ فود قهوه لمیز"
      />

      <div
        className="bg-[#212121] w-full h-[1300px] flex justify-center items-center mt-[-100px]"
        dir="rtl"
      >
        <div className="grid grid-cols-5 gap-8 mt-5">
          {data.map((e) => (
            <SnappFoodCart key={e.id} img={e.img} title={e.text} />
          ))}
        </div>
      </div>
    </div>
  );
}
