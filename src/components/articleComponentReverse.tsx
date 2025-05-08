import TrainingComp from "./trainingComponent";
import Image from "next/image";
import React from "react";

type IArticleComp={
  img:string,
  title:string,
  text:string
}

export default function ArticleCompReverse({ img, title, text }: IArticleComp) {
  return (
    <div className="flex flex-row-reverse relative z-0 h-[450px]">
      
      <div className="w-1/2 h-full relative">
        <Image src={img} alt="image" fill className="object-cover" />
      </div>

      
      <div className="absolute left-[970px] top-3/5 -translate-x-1/2 -translate-y-1/2 z-10">
        <TrainingComp />
      </div>

     
      <div className="flex flex-col items-center justify-center w-1/2 h-full bg-[#F3F2F2]">
        <div className="w-[500px] text-justify" dir="rtl">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg mt-5">{text}</p>
        </div>
        <div className="w-[150px] h-[40px] rounded text-white cursor-pointer bg-[#FE6E1F] flex justify-center items-center text-xl mt-10">
          <button className="cursor-pointer">بیشتر بخوانید </button>
        </div>
      </div>
    </div>
  );
}
