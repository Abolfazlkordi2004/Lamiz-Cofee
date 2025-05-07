import Image from "next/image";
import React from "react";

function TrainingComp() {
  return (
    <div className="bg-white rounded w-full h-full">
      <div className="flex flex-row-reverse items-center justify-center gap-5">
        <Image
          src="/img/Logo-black.webp"
          alt="Logo-black"
          width={42}
          height={42}
          className="rounded-full"
        />
        <div className="flex flex-col text-right">
          <h3 className="text-lg">دپارتمان آموزش قهوه لمیز</h3>
          <p>Training Center</p>
        </div>
      </div>
    </div>
  );
}

export default TrainingComp;
