import Image from "next/image";
import React from "react";

function TrainingComp() {
  return (
    <div className="bg-white rounded-xl w-[400px] h-[100px]">
      <div className="flex flex-row-reverse items-center justify-start gap-5 w-full h-full pr-5">
        <Image
          src="/img/Logo-black.webp"
          alt="Logo-black"
          width={50}
          height={50}
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
