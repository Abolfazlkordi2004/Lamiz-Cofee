import Image from "next/image";
import Link from "next/link";
import React from "react";

type IBranch = {
  img: string;
  header: string;
};

function Branch({ img, header }: IBranch) {
  return (
    <div className="w-[260px] h-[280px] relative rounded overflow-hidden">
  <Link href={""}>
    <Image src={img} alt="image-branch" fill className="object-cover" />
  </Link>
  <div className="absolute w-full p-4 z-10 flex justify-center bottom-2">
    <h2 className="text-white text-lg font-semibold">{header}</h2>
  </div>
</div>

  );
}

export default Branch;
