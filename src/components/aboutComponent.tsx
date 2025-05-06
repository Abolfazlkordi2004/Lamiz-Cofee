import React from "react";
import Image from "next/image";

type IAboutComponent = {
  img: string;
  header: string;
  text: string;
};

function AboutComponent({ img, header, text }: IAboutComponent) {
  return (
    <div className="flex flex-col items-center w-[400px]">
      <Image src={img} alt="map" width={32} height={32} />
      <h2 className="text-2xl font-bold mt-5"> {header} </h2>
      <p className="text-wrap mt-5 text-lg text-justify">{text}</p>
    </div>
  );
}

export default AboutComponent;
