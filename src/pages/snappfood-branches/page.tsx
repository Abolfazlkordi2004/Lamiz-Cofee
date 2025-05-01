import HeaderSection from "@/components/headerSection";
import SnappFoodCart from "@/components/snappFoodCart";
import React from "react";

type IData = {
  id: number;
  img: string;
  text: string;
};

async function SnappFood() {
  const res = await fetch(`http://localhost:3001/branchSnapp`);
  const data = (await res.json()) as IData[];
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
            <SnappFoodCart img={e.img} title={e.text} key={e.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SnappFood;
