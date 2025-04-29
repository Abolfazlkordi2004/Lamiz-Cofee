import Branch from "@/components/branch";
import HeaderSection from "@/components/headerSection";
import React from "react";

function BranchPage() {
  return (
    <div>
      <HeaderSection />
      <div className="bg-[#212121] w-full h-[1000px] flex justify-center items-center mt-[-100px]">
        <div className="grid grid-cols-5 gap-3">
          <Branch />
          <Branch />
          <Branch />
          <Branch />
          <Branch />
        </div>
      </div>
    </div>
  );
}

export default BranchPage;
