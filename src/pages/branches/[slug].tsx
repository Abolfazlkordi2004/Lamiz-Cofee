"use client";
import ImageSlider from "@/components/imageSlider";
import InfoBranch from "@/components/infoBranch";
import MapBranch from "@/components/mapBranch";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type IbranchProps = {
  id: number;
  slug: string;
  image: [];
  map: string;
  phone: string;
  address: string;
  img: string;
  name: string;
  time: string;
};

function BranchDetailsPage() {
  const params = useParams();
  const [branch, setBranch] = useState<IbranchProps | null>(null);

  useEffect(() => {
    const slug = params?.slug;

    if (slug && typeof slug === "string") {
      axios
        .get<IbranchProps[]>("http://localhost:3001/infoBranch")
        .then((res) => {
          const foundBranch = res.data.find((item) => item.slug === slug);
          setBranch(foundBranch || null);
        })
        .catch((error) => {
          console.error("Error fetching branch data:", error);
        });
    }
  }, [params?.slug]);

  if (!branch) {
    return (
      <div className="text-white">در حال بارگذاری یا شعبه‌ای پیدا نشد</div>
    );
  }

  return (
    <div>
      <ImageSlider images={branch.image} />
      <div className="bg-black w-full h-[170px] flex items-center justify-around px-4">
        <InfoBranch map={branch.map} phone={branch.phone} />
        <MapBranch
          address={branch.address}
          img={branch.img}
          name={branch.name}
          time={branch.time}
        />
      </div>
    </div>
  );
}

export default BranchDetailsPage;
