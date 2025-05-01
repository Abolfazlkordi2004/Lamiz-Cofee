// import Branch from "@/components/branch";
import Branch from "@/components/branch";
import HeaderSection from "@/components/headerSection";
import React from "react";

function BranchPage() {
  const data = [
    {
      img: "/img/branchs/Cover-4rahvaliasr.webp",
      header: "شعبه چهار راه ولیعصر",
    },
    {
      img: "/img/branchs/Cover-Bagh-Ferdos.webp",
      header: "شعبه باغ فردوس",
    },
    {
      img: "/img/branchs/Cover-Esfehan.webp",
      header: "شعبه اصفهان",
    },
    {
      img: "/img/branchs/Cover-Izadshahr.webp",
      header: "شعبه ایزدشهر",
    },
    {
      img: "/img/branchs/Cover-Mirdamad.webp",
      header: "شعبه  میرداماد ",
    },
    {
      img: "/img/branchs/Cover-Paydar-Fard.webp",
      header: "شعبه  پایدار فرد ",
    },
    {
      img: "/img/branchs/Cover-Pol-Romi.webp",
      header: "شعبه پل رومی ",
    },
    {
      img: "/img/branchs/Cover-qom.webp",
      header: "شعبه قم ",
    },
    {
      img: "/img/branchs/Cover-Sadabad-1.webp",
      header: "شعبه  سعداباد  ",
    },
    {
      img: "/img/branchs/Cover-Shahrak-e-Gharb.webp",
      header: "شعبه شهرک غرب ",
    },
    {
      img: "/img/branchs/Cover-Tochal.webp",
      header: "شعبه توچال ",
    },
    {
      img: "/img/branchs/Enghelab-Branches-Cover.webp",
      header: "شعبه انقلاب ",
    },
    {
      img: "/img/branchs/Fakhar-Moghadam-Branches.webp",
      header: "شعبه فخارمقدم ",
    },
    {
      img: "/img/branchs/Farmanieh.webp",
      header: "شعبه فرمانیه ",
    },
    {
      img: "/img/branchs/FATEMI-COVER.jpg",
      header: "شعبه فاطمی ",
    },
    {
      img: "/img/branchs/Gisha-Cover-Branche.webp",
      header: "شعبه گیشا ",
    },
    {
      img: "/img/branchs/Iranmal-Covers.webp",
      header: "شعبه ایرانمال ",
    },
    {
      img: "/img/branchs/Jam-Cover-Branch.webp",
      header: "شعبه جم ",
    },
    {
      img: "/img/branchs/Jordan.webp",
      header: "شعبه جردن ",
    },
    {
      img: "/img/branchs/Kish.webp",
      header: "شعبه کیش ",
    },
    {
      img: "/img/branchs/Lavasan-Cover.webp",
      header: "شعبه لواسان ",
    },
    {
      img: "/img/branchs/Modireat-bridge-Covers.webp",
      header: "شعبه مدیریت ",
    },
    {
      img: "/img/branchs/Motahari-Branches-Cover.webp",
      header: "شعبه مطهری ",
    },
    {
      img: "/img/branchs/Motel-Ghoo-Cover.webp",
      header: "شعبه متل قو ",
    },
    {
      img: "/img/branchs/Pasdaran.webp",
      header: "شعبه پاسداران ",
    },
    {
      img: "/img/branchs/Royan-Branches-Cover.webp",
      header: "شعبه رویان ",
    },
    {
      img: "/img/branchs/saatdat-abad-cover.webp",
      header: "شعبه سعادت اباد  ",
    },
    {
      img: "/img/branchs/Tajrish-Monin.webp",
      header: "شعبه مونین ",
    },
    {
      img: "/img/branchs/Vanak-Branches-Cover.webp",
      header: "شعبه ونک ",
    },
    {
      img: "/img/branchs/Yosef-Abad-Cover-Branches.jpg",
      header: "شعبه یوسف اباد  ",
    },
    {
      img: "/img/branchs/karaj-branches-cover.webp",
      header: "شعبه کرج ",
    },
    {
      img: "/img/branchs/Heravi-Branches-Cover.webp",
      header: "شعبه هروی ",
    },
  ];
  return (
    <div>
      <HeaderSection
        img={"/img/menu-background.webp"}
        header={"شعبه های قهوه لمیز"}
      />
      <div className="bg-[#212121] w-full h-[2500px] flex justify-center items-center mt-[-100px]" dir="rtl">
        <div className="grid grid-cols-5 gap-3 mt-5">
          {data.map((item) => (
            <Branch img={item.img} header={item.header} key={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BranchPage;
