// import Branch from "@/components/branch";
import Branch from "@/components/branch";
import HeaderSection from "@/components/headerSection";
import React from "react";

function BranchPage() {
  const data = [
    {
      img: "/img/Cover-4rahvaliasr.webp",
      header: "شعبه چهار راه ولیعصر",
    },
    {
      img: "/img/Cover-Bagh-Ferdos.webp",
      header: "شعبه باغ فردوس",
    },
    {
      img: "/img/Cover-Esfehan.webp",
      header: "شعبه اصفهان",
    },
    {
      img: "/img/Cover-Izadshahr.webp",
      header: "شعبه ایزدشهر",
    },
    {
      img: "/img/Cover-Mirdamad.webp",
      header: "شعبه  میرداماد ",
    },
    {
      img: "/img/Cover-Paydar-Fard.webp",
      header: "شعبه  پایدار فرد ",
    },
    {
      img: "/img/Cover-Pol-Romi.webp",
      header: "شعبه پل رومی ",
    },
    {
      img: "/img/Cover-qom.webp",
      header: "شعبه قم ",
    },
    {
      img: "/img/Cover-Sadabad-1.webp",
      header: "شعبه  سعداباد  ",
    },
    {
      img: "/img/Cover-Shahrak-e-Gharb.webp",
      header: "شعبه شهرک غرب ",
    },
    {
      img: "/img/Cover-Tochal.webp",
      header: "شعبه توچال ",
    },
    {
      img: "/img/Enghelab-Branches-Cover.webp",
      header: "شعبه انقلاب ",
    },
    {
      img: "/img/Fakhar-Moghadam-Branches.webp",
      header: "شعبه فخارمقدم ",
    },
    {
      img: "/img/Farmanieh.webp",
      header: "شعبه فرمانیه ",
    },
    {
      img: "/img/FATEMI-COVER.jpg",
      header: "شعبه فاطمی ",
    },
    {
      img: "/img/Gisha-Cover-Branche.webp",
      header: "شعبه گیشا ",
    },
    {
      img: "/img/Iranmal-Covers.webp",
      header: "شعبه ایرانمال ",
    },
    {
      img: "/img/Jam-Cover-Branch.webp",
      header: "شعبه جم ",
    },
    {
      img: "/img/Jordan.webp",
      header: "شعبه جردن ",
    },
    {
      img: "/img/Kish.webp",
      header: "شعبه کیش ",
    },
    {
      img: "/img/Lavasan-Cover.webp",
      header: "شعبه لواسان ",
    },
    {
      img: "/img/Modireat-bridge-Covers.webp",
      header: "شعبه مدیریت ",
    },
    {
      img: "/img/Motahari-Branches-Cover.webp",
      header: "شعبه مطهری ",
    },
    {
      img: "/img/Motel-Ghoo-Cover.webp",
      header: "شعبه متل قو ",
    },
    {
      img: "/img/Pasdaran.webp",
      header: "شعبه پاسداران ",
    },
    {
      img: "/img/Royan-Branches-Cover.webp",
      header: "شعبه رویان ",
    },
    {
      img: "/img/saatdat-abad-cover.webp",
      header: "شعبه سعادت اباد  ",
    },
    {
      img: "/img/Tajrish-Monin.webp",
      header: "شعبه تجریش ",
    },
    {
      img: "/img/Vanak-Branches-Cover.webp",
      header: "شعبه ونک ",
    },
    {
      img: "/img/Yosef-Abad-Cover-Branches.jpg",
      header: "شعبه یوسف اباد  ",
    },
  ];
  return (
    <div>
      <HeaderSection
        img={"/img/menu-background.webp"}
        header={"شعبه های قهوه لمیز"}
      />
      <div className="bg-[#212121] w-full h-[2000px] flex justify-center items-center mt-[-100px]">
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
