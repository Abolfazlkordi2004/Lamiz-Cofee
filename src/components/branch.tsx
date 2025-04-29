import Image from "next/image";
import Link from "next/link";
import React from "react";

function Branch() {
  return (
    <div className="w-[260px] h-[280px] relative rounded">
      <Link href={""}>
        <Image
          src="/img/Cover-4rahvaliasr.webp"
          alt="4rahvaliasr"
          fill
          className="object-cover"
        />
      </Link>
    </div>
  );
}

export default Branch;
