import HeaderSection from "@/components/headerSection";
import ColdBrewCart from "@/components/coldBrewCart";
import React from "react";

type INitroCold = {
  id: number;
  img: string;
  title: string;
  price: string;
};

async function NitroCold() {
  const res = await fetch(`http://localhost:3001/nitro-cold-brew-coffee`);
  const data = (await res.json()) as INitroCold[];

  return (
    <div>
      <HeaderSection
        img="/img/shop-background.webp"
        header="قهوه سرد دم نیترو"
      />
      <div className="flex justify-center my-10">
        <div className="w-full max-w-[1300px] border border-gray-400 rounded px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <ColdBrewCart
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NitroCold;
