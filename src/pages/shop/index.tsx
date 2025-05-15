import React from "react";
import CategorySection from "@/components/categorySection";
import HeaderSection from "@/components/headerSection";
import MainSection from "@/components/mainSection";

function Shop() {
  return (
    <div>
      <HeaderSection
        img={"/img/shop-background.webp"}
        header={"محصولات قهوه لمیز"}
      />
      <div className="bg-white w-full h-[2100px]">
        <div className="flex flex-row items-center justify-center mt-12 gap-5">
          <div>
            <MainSection />
          </div>
          <div className="mb-[550px]">
            <CategorySection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
