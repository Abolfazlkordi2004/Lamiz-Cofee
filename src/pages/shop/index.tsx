"use client";  // <- این خط حتماً در خط اول باشه

import React from "react";
import CategorySection from "@/components/categorySection";
import HeaderSection from "@/components/headerSection";
import MainSection from "@/components/mainSection";  // ایمپورت مستقیم

function Shop() {
  return (
    <div>
      <HeaderSection
        img={"/img/shop-background.webp"}
        header={"محصولات قهوه لمیز"}
      />
      <div className="bg-white w-full min-h-screen">
        <div className="flex items-start justify-center gap-5 mt-20 px-4">
          <MainSection />
          <CategorySection />
        </div>
      </div>
    </div>
  );
}

export default Shop;
