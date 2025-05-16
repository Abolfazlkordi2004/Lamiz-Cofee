import Image from "next/image";
import React from "react";

type ImapBranchProps = {
  img: string;
  name: string;
  address: string;
  time: string;
};

function MapBranch({ img, name, address, time }: ImapBranchProps) {
  return (
    <div className="flex flex-row-reverse">
      <div className="relative rounded w-[135px] h-[135px]">
        <Image src={img} alt="branch-image" fill className="object-cover z-0" />
        <div className="flex items-center justify-center z-10 mt-30">
          <p className="text-black invert">{name}</p>
        </div>
      </div>
      <div className="flex flex-col item-center justify-center mr-5">
        <div className="flex flex-row-reverse gap-2 cursor-pointer">
          <Image
            src="/icons/icons8-map-marker-50.png"
            alt="map"
            width={20}
            height={20}
            className="invert"
          />
          <p className="text-white text-sm">{address}</p>
        </div>
        <div className="flex flex-row-reverse gap-2 mt-5">
          <Image
            src="/icons/icons8-clock-24.png"
            alt="clock"
            height={20}
            width={20}
            className="invert"
          />
          <p className="text-white text-sm">{time}</p>
        </div>
      </div>
    </div>
  );
}

export default MapBranch;
