import Branch from "@/components/branch";
import HeaderSection from "@/components/headerSection";
import React from "react";

function BranchPage() {
  const data = [
    {
      img: "/img/branchs/Cover-4rahvaliasr.webp",
      header: "شعبه چهار راه ولیعصر",
      slug: "4rahValiasr",
    },
    {
      img: "/img/branchs/Cover-Bagh-Ferdos.webp",
      header: "شعبه باغ فردوس",
      slug: "Bagh-Ferdos",
    },
    {
      img: "/img/branchs/Cover-Esfehan.webp",
      header: "شعبه اصفهان",
      slug: "Esfehan",
    },
    {
      img: "/img/branchs/Cover-Izadshahr.webp",
      header: "شعبه ایزدشهر",
      slug: "Izadshahr",
    },
    {
      img: "/img/branchs/Cover-Mirdamad.webp",
      header: "شعبه  میرداماد ",
      slug: "Mirdamad",
    },
    {
      img: "/img/branchs/Cover-Paydar-Fard.webp",
      header: "شعبه  پایدار فرد ",
      slug: "Paydar-Fard",
    },
    {
      img: "/img/branchs/Cover-Pol-Romi.webp",
      header: "شعبه پل رومی ",
      slug: "Pol-Romi",
    },
    {
      img: "/img/branchs/Cover-qom.webp",
      header: "شعبه قم ",
      slug: "qom",
    },
    {
      img: "/img/branchs/Cover-Sadabad-1.webp",
      header: "شعبه  سعداباد  ",
      slug: "Sadabad",
    },
    {
      img: "/img/branchs/Cover-Shahrak-e-Gharb.webp",
      header: "شعبه شهرک غرب ",
      slug: "Shahrak-e-Gharb",
    },
    {
      img: "/img/branchs/Cover-Tochal.webp",
      header: "شعبه توچال ",
      slug: "Tochal",
    },
    {
      img: "/img/branchs/Enghelab-Branches-Cover.webp",
      header: "شعبه انقلاب ",
      slug: "Enghelab",
    },
    {
      img: "/img/branchs/Fakhar-Moghadam-Branches.webp",
      header: "شعبه فخارمقدم ",
      slug: "Fakhar-Moghadam",
    },
    {
      img: "/img/branchs/Farmanieh.webp",
      header: "شعبه فرمانیه ",
      slug: "Farmanieh",
    },
    {
      img: "/img/branchs/FATEMI-COVER.jpg",
      header: "شعبه فاطمی ",
      slug: "Fatemi",
    },
    {
      img: "/img/branchs/Gisha-Cover-Branche.webp",
      header: "شعبه گیشا ",
      slug: "Gisha",
    },
    {
      img: "/img/branchs/Iranmal-Covers.webp",
      header: "شعبه ایرانمال ",
      slug: "Iranmal",
    },
    {
      img: "/img/branchs/Jam-Cover-Branch.webp",
      header: "شعبه جم ",
      slug: "Jam",
    },
    {
      img: "/img/branchs/Jordan.webp",
      header: "شعبه جردن ",
      slug: "Jordan",
    },
    {
      img: "/img/branchs/Kish.webp",
      header: "شعبه کیش ",
      slug: "Kish",
    },
    {
      img: "/img/branchs/Lavasan-Cover.webp",
      header: "شعبه لواسان ",
      slug: "Lavasan",
    },
    {
      img: "/img/branchs/Modireat-bridge-Covers.webp",
      header: "شعبه مدیریت ",
      slug: "Modireat",
    },
    {
      img: "/img/branchs/Motahari-Branches-Cover.webp",
      header: "شعبه مطهری ",
      slug: "Motahari",
    },
    {
      img: "/img/branchs/Motel-Ghoo-Cover.webp",
      header: "شعبه متل قو ",
      slug: "Motel-Ghoo",
    },
    {
      img: "/img/branchs/Pasdaran.webp",
      header: "شعبه پاسداران ",
      slug: "Pasdaran",
    },
    {
      img: "/img/branchs/Royan-Branches-Cover.webp",
      header: "شعبه رویان ",
      slug: "Royan",
    },
    {
      img: "/img/branchs/saatdat-abad-cover.webp",
      header: "شعبه سعادت اباد  ",
      slug: "saatdat-abad",
    },
    {
      img: "/img/branchs/Tajrish-Monin.webp",
      header: "شعبه مونین ",
      slug: "Tajrish-Monin",
    },
    {
      img: "/img/branchs/Vanak-Branches-Cover.webp",
      header: "شعبه ونک ",
      slug: "Vanak",
    },
    {
      img: "/img/branchs/Yosef-Abad-Cover-Branches.jpg",
      header: "شعبه یوسف اباد  ",
      slug: "Yosef-Abad",
    },
    {
      img: "/img/branchs/karaj-branches-cover.webp",
      header: "شعبه کرج ",
      slug: "Karaj",
    },
    {
      img: "/img/branchs/Heravi-Branches-Cover.webp",
      header: "شعبه هروی ",
      slug: "Heravi",
    },
  ];
  return (
    <div>
      <HeaderSection
        img={"/img/menu-background.webp"}
        header={"شعبه های قهوه لمیز"}
      />
      <div
        className="bg-[#212121] w-full h-[2500px] flex justify-center items-center mt-[-100px]"
        dir="rtl"
      >
        <div className="grid grid-cols-5 gap-3 mt-5">
          {data.map((item) => (
            <Branch
              img={item.img}
              header={item.header}
              slug={item.slug}
              key={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BranchPage;
