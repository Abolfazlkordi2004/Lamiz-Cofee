import Image from "next/image";
import React from "react";

type IinfoBranchProps = {
  map: string;
  phone: string;
};

function InfoBranch({ map, phone }: IinfoBranchProps) {
  return (
    <div className="flex flex-row">
      <div className="relative w-[150px] h-[150px] mr-5 cursor-pointer">
        <Image src={map} alt="map-image" fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row-reverse gap-2 mb-2 cursor-pointer">
          <Image
            src="/icons/icons8-telephone-50.png"
            alt="phone"
            width={20}
            height={20}
            className="invert"
          />
          <p className="text-white text-sm">{phone}</p>
        </div>
        <div className="flex flex-row-reverse gap-2 mb-2 cursor-pointer">
          <Image
            src="/icons/icons8-email-50.png"
            alt="email-address"
            width={20}
            height={20}
            className="invert"
          />
          <p className="text-white text-sm">info@lamizcoffee.com</p>
        </div>
        <div className="flex flex-row items-center justify-center mt-2 gap-2 cursor-pointer">
          <Image
            src="/icons/icons8-instagram-50.png"
            alt="instagram"
            width={20}
            height={20}
            className="invert"
          />
          <Image
            src="/icons/icons8-linkedin-50.png"
            alt="linkdien"
            width={20}
            height={20}
            className="invert"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoBranch;
