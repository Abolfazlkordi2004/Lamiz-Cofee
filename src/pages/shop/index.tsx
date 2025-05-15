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
      <div className="bg-white w-full h-[2500px]">
        <div className="flex items-start justify-center gap-5 mt-10 px-4">
          <MainSection  />
          <CategorySection />
        </div>
      </div>
    </div>
  );
}

export default Shop;