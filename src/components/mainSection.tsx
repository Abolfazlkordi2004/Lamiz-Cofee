import React from "react";
import ShopCart from "./shopCart";

function MainSection() {
  return (
    <div className="w-[940px] h-[1500px] rounded border border-gray-400 grid grid-cols-4">
      <ShopCart />
      <ShopCart />
      <ShopCart />
      <ShopCart />
    </div>
  );
}

export default MainSection;
