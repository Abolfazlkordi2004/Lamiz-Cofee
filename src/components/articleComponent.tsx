import Image from "next/image";
import React from "react";
import TrainingComp from "./trainingComponent";

type IArticleComp = {
  img: string;
  title: string;
  text: string;
};

function ArticleComp({ img, title, text }: IArticleComp) {
  return (
    <div className="flex flex-row z-0">
      <div className="w-1/2 h-[450px] relative">
        <Image src={img} alt="image" fill className="object-cover" />
      </div>
      <div className="w-[300px] h-[50px] z-10">
        <TrainingComp />
      </div>
      <div className="flex flex-col items-center justify-center w-1/2 h-[450px] bg-[#F3F2F2]">
        <div className="w-[500px] text-justify" dir="rtl">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-lg mt-5">{text}</p>
        </div>
        <div className="w-[150px] h-[40px] rounded text-white cursor-pointer bg-[#FE6E1F] flex justify-center items-center text-xl mt-10 mr-90">
          <button className="cursor-pointer">بیشتر بخوانید </button>
        </div>
      </div>
    </div>
  );
}

export default ArticleComp;
