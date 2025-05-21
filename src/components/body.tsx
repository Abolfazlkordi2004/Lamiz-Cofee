import Image from "next/image";
import Link from "next/link";
import React from "react";

function Body() {
  return (
    <div>
      <div className="relative w-full h-[650px]">
        <Image
          src="/img/background-img.webp"
          alt="background-lamiz"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full h-[3200px] [background-image:linear-gradient(to_bottom,_black_0%,_black_85%,_#E2E2B6_95%,_#E2E2B6_100%)]">
        <div className="flex justify-center items-center gap-40 p-10">
          <div className="w-[500px]" dir="rtl">
            <p className="text-xl text-white text-justify">
              سرو قهوه فوق‌العاده، کیک‌ها و شیرینی‌های تازه و ارائه بهترین سرویس
              در فضاهای زنده و به‌یادماندنی از جمله ارزش‌های ما در مجموعه‌ قهوه
              لمیز است. همه هدف ما، تلاش ما و امید ما ارائه بهترین محصول با
              بهترین قیمت و کیفیت است.
            </p>
          </div>
          <div className="jusify-center text-center">
            <h1 className="text-5xl text-[#ff6e1f] py-5 font-bold">
              ما قهوه لمیز هستیم
            </h1>
            <h2 className="text-[#CFCFCF] text-4xl font-bold">
              و بی نهایت عاشق کاری که انجام می‌دهیم
            </h2>
          </div>
        </div>
        <div className="py-8 text-center">
          <h2 className="text-[#555555] text-4xl">LAMIZ COFFEE</h2>
        </div>
        <div className="w-[1200px] bg-white grid grid-cols-3 mx-auto mt-3 rounded">
          <div
            className="bg-[#3F3F3F] w-[400px] h-[400px] text-center flex justify-center items-center"
            dir="rtl"
          >
            <p className="text-justify text-white text-xl px-10">
              مجموعه <span className="text-[#ff6e1f]">قهوه لمیز</span> با تنوع
              بیش از ۱۰۰ نوع محصول در فروشگاه آنلاین و شعبه ها آماده ارائه
              محصولات قهوه با کیفیت‌ به همراه مناسب‌ترین قیمت به شما مشتریان
              عزیز است.
            </p>
          </div>
          <div className="bg-[#333333] w-[400px] h-[400px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[#BDBDBD] font-bold text-5xl py-5">products</h2>
            <h2 className="text-white font-bold text-5xl py-5">محصولات</h2>
            <h2 className="text-[#ff6e1f] font-bold text-5xl py-5">
              قهوه لمیز
            </h2>
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/img/Index-Shop-Icon.webp"
              alt="Shop Icon"
              fill
              className="object-cover z-0"
            />
            <div className="bg-[#211F1C]/30 backdrop-blur-md w-[180px] h-[50px] translate-x-[-50%] translate-y-[200%] z-10 absolute flex justify-center items-center top-1/2 left-1/2 rounded">
              <button className="cursor-pointer text-white font-bold text-xl">
                <Link href="/shop"> فروشگاه محصولات</Link>
              </button>
            </div>
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/img/Menu-Index.webp"
              alt="Menu-logo"
              fill
              className="object-cover z-0"
            />
            <div className="bg-[#211F1C]/30 backdrop-blur-md w-[180px] h-[50px] translate-x-[-50%] translate-y-[200%] z-10 absolute flex justify-center items-center top-1/2 left-1/2 rounded">
              <button className="cursor-pointer text-white font-bold text-xl">
                <Link href="/lamiz-coffee-menu"> منو قهوه لمیز</Link>
              </button>
            </div>
          </div>
          <div
            className="bg-[#3F3F3F] w-[400px] h-[400px] text-center flex justify-center items-center"
            dir="rtl"
          >
            <p className="text-justify text-white text-xl px-10">
              منو مجموعه <span className="text-[#ff6e1f]"> قهوه لمیز</span> شامل
              نوشیدنی‌های گرم، نوشیدنی‌های سرد، ماچاها، کیک‌ها و شیرینی‌های سالم
              و تازه‌پخت است که طعم خوش و ماندگاری را برای شما به یادگار
              می‌گذارد.
            </p>
          </div>
          <div className="bg-[#333333] w-[400px] h-[400px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[#BDBDBD] font-bold text-5xl py-5">
              Lamiz Menu
            </h2>
            <h2 className="text-[#ff6e1f] font-bold text-5xl py-5">
              منوی تخصصی
            </h2>
            <h2 className="text-white font-bold text-5xl py-5">و متنوع</h2>
          </div>
          <div
            className="bg-[#3F3F3F] w-[400px] h-[400px] text-center flex justify-center items-center"
            dir="rtl"
          >
            <p className="text-justify text-white text-xl px-10">
              مجموعه <span className="text-[#ff6e1f]"> قهوه لمیز</span> با ۳۱
              شعبه فعال به همراه ۱۵ شعبه اسنپ فود تهران، اصفهان، رویان، متل‌قو،
              قم، کیش، کرج و … در تمامی ایام هفته مشتاق و منتظر دیدار و
              خدمت‌رسانی به شما مشتریان عزیز است..
            </p>
          </div>
          <div className="bg-[#333333] w-[400px] h-[400px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[#BDBDBD] font-bold text-5xl py-5">Branches</h2>
            <h2 className="text-white font-bold text-5xl py-5">شعب</h2>
            <h2 className="text-[#ff6e1f]  font-bold text-5xl py-5">
              قهوه لمیز
            </h2>
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/img/karaj-branches-cover.webp"
              alt="Menu-logo"
              fill
              className="object-cover z-0"
            />
            <div className="bg-[#211F1C]/30 backdrop-blur-md w-[180px] h-[50px] translate-x-[-50%] translate-y-[200%] z-10 absolute flex justify-center items-center top-1/2 left-1/2 rounded">
              <button className="cursor-pointer text-white font-bold text-xl">
                <Link href="/branches">شعب قهوه لمیز</Link>
              </button>
            </div>
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/img/Promot-1404.webp"
              alt="Menu-logo"
              fill
              className="object-cover z-0"
            />
            <div className="bg-[#211F1C]/30 backdrop-blur-md w-[180px] h-[50px] translate-x-[-50%] translate-y-[200%] z-10 absolute flex justify-center items-center top-1/2 left-1/2 rounded">
              <button className="cursor-pointer text-white font-bold text-xl">
                <Link href="/lamiz-coffee-menu">نوشیدنی‌های فصلی</Link>
              </button>
            </div>
          </div>
          <div
            className="bg-[#3F3F3F] w-[400px] h-[400px] text-center flex justify-center items-center "
            dir="rtl"
          >
            <p className="text-justify text-white text-xl px-10">
              مجموعه <span className="text-[#ff6e1f]"> قهوه لمیز</span> برای هر
              فصل پیشنهادها و نوشیدنی‌های منحصر بفردی را برای شما ابداع و خلق
              می‌کند که با قیمت‌های اقتصادی در تمامی شعبه ها موجود می‌شوند.
            </p>
          </div>
          <div className="bg-[#333333] w-[400px] h-[400px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[#BDBDBD] font-bold text-5xl py-5">
              promotions
            </h2>
            <h2 className="text-white font-bold text-5xl py-5">نوشیدنی‌های</h2>
            <h2 className="text-[#ff6e1f]  font-bold text-5xl py-5">فصلی</h2>
          </div>
          <div
            className="bg-[#3F3F3F] w-[400px] h-[400px] text-center flex justify-center items-center"
            dir="rtl"
          >
            <p className="text-justify text-white text-xl px-10">
              احترام به نیازهای مشتریان، در دسترس بودن، سرعت در آماده سازی
              سفارش، خلاقیت و نوآوری در خلق آیتم‌های منو نوشیدنی و محصولات از
              جمله اهداف <span className="text-[#ff6e1f]"> قهوه لمیز</span> بوده
              است.
            </p>
          </div>
          <div className="bg-[#333333] w-[400px] h-[400px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[#BDBDBD] font-bold text-5xl py-5">
              vision & <br /> mission
            </h2>
            <h2 className="text-white font-bold text-5xl py-5">اهداف</h2>
            <h2 className="text-[#ff6e1f]  font-bold text-5xl py-5">
              و ارزش‌ها
            </h2>
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/img/jordan.webp"
              alt="Menu-logo"
              fill
              className="object-cover z-0"
            />
          </div>
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/img/our-partners.webp"
              alt="Menu-logo"
              fill
              className="object-cover z-0"
            />
          </div>
          <div
            className="bg-[#3F3F3F] w-[400px] h-[400px] text-center flex justify-center items-center "
            dir="rtl"
          >
            <p className="text-justify text-white text-xl px-10">
              مجموعه‌ <span className="text-[#ff6e1f]"> قهوه لمیز</span> دارای
              نمایندگی انحصاری سیروپ مونین، پولی کف و کفِ تو در ایران و دارای
              مشتریان قابل توجهی است.
            </p>
          </div>
          <div className="bg-[#333333] w-[400px] h-[400px] text-center flex flex-col items-center justify-center">
            <h2 className="text-[#BDBDBD] font-bold text-5xl py-5">
              our partners
            </h2>
            <h2 className="text-white font-bold text-5xl py-5">همکاران</h2>
            <h2 className="text-[#ff6e1f]  font-bold text-5xl py-5">
              تجاری ما
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 mx-10">
          <div className="group relative w-55 h-75 [perspective:1000px]">
            <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <Image
                src="/img/Caribbean-syrup-1.webp"
                alt="img"
                width={180}
                height={180}
                className="object-cover rounded-lg backface-hidden"
              />

              <div className="absolute inset-0 bg-[#211F1C] text-white p-4 rounded-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                <h3 className="text-xl font-bold mb-10 text-[#ff6e1f]">
                  سیروپ کاربین مونین
                </h3>
                <p className="text-l text-center mb-5">
                  سیروپ کاریبین مونین برای ارائه موکتل های مبتنی بر رام طراحی
                  شده است.
                </p>
                {/* <div className="w-25 h-8 border rounded flex justify-center items-center cursor-pointer hover:bg-black">
                  <button>مشاهده</button>
                </div> */}
              </div>
            </div>
          </div>

          <div className="group relative w-55 h-75 [perspective:1000px]">
            <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <Image
                src="/img/Monin-Almond-Syrup.webp"
                alt="img"
                width={180}
                height={180}
                className="object-cover rounded-lg backface-hidden"
              />

              <div className="absolute inset-0 bg-[#211F1C] text-white p-4 rounded-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                <h3 className="text-xl font-bold mb-10 text-[#ff6e1f]">
                  سیروپ بادام مونین
                </h3>
                <p className="text-l text-center mb-5">
                  بادام میوه درخت بادام است که به خاطر گلهای معطر صورتی و سفیدش
                  مشهور است.
                </p>
                {/* <div className="w-25 h-8 border rounded flex justify-center items-center cursor-pointer hover:bg-black">
                  <button>مشاهده</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="group relative w-55 h-75 [perspective:1000px]">
            <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <Image
                src="/img/Monin-Green-Mint-Syrup.webp"
                alt="img"
                width={180}
                height={180}
                className="object-cover rounded-lg backface-hidden"
              />

              <div className="absolute inset-0 bg-[#211F1C] text-white p-4 rounded-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                <h3 className="text-xl text-center font-bold mb-10 text-[#ff6e1f]">
                  سیروپ نعنا‌ سبز مونین
                </h3>
                <p className="text-l text-center mb-5">
                  نعناع گیاهی تازه ، شیرین و معطر با طعم خنک به عنوان طعم دهنده
                  برای قهوه و چای استفاده می شود
                </p>
                {/* <div className="w-25 h-8 border rounded flex justify-center items-center cursor-pointer hover:bg-black">
                  <button>مشاهده</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="group relative w-55 h-75 [perspective:1000px]">
            <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <Image
                src="/img/Monin-Ice-Mint-Syrup.webp"
                alt="img"
                width={180}
                height={180}
                className="object-cover rounded-lg backface-hidden"
              />

              <div className="absolute inset-0 bg-[#211F1C] text-white p-4 rounded-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                <h3 className="text-xl text-center font-bold mb-10 text-[#ff6e1f]">
                  سیروپ نعنا‌ یخی مونین
                </h3>
                <p className="text-l text-center mb-5">
                  سیروپ نعنا‌یخی مونین با طعم بسیار خنک و سرشار از منتول نعنا و
                  پونه کوهی
                </p>
                {/* <div className="w-25 h-8 border rounded flex justify-center items-center cursor-pointer hover:bg-black">
                  <button>مشاهده</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="group relative w-55 h-75 [perspective:1000px]">
            <div className="absolute inset-0 transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
              <Image
                src="/img/Monin-Triple_Sec-Syrup.webp"
                alt="img"
                width={180}
                height={180}
                className="object-cover rounded-lg backface-hidden"
              />

              <div className="absolute inset-0 bg-[#211F1C] text-white px-4  rounded-lg flex flex-col justify-center items-center rotate-y-180 backface-hidden">
                <h3 className="text-xl text-center font-bold mb-10 text-[#ff6e1f]">
                  سیروپ تریپل سک کراسائو
                </h3>
                <p className="text-l text-center text-white mb-5">
                  سیروپ تریپل سک کراسائو یکی از طعم های بکر مونین، که نسخه لیکور
                  پرتقال تلخ و شیرین معروف است
                </p>
                {/* <div className="w-25 h-8 border rounded flex justify-center items-center cursor-pointer hover:bg-black">
                  <button>مشاهده</button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
