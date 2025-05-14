"use client"
import CategorySection from "@/components/categorySection";
import HeaderSection from "@/components/headerSection";
import MainSection from "@/components/mainSection";

function ShopPage() {
  return (
    <div>
      <HeaderSection
        img={"/img/shop-background.webp"}
        header={"محصولات قهوه لمیز"}
      />
      <div className="bg-white w-full h-[1200px] ">
        <div className="flex items-center justify-center gap-5 mt-20">
          <MainSection />
          <CategorySection />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
