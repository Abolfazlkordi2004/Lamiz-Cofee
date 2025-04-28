import Image from "next/image";
import React from "react";

function HomePage() {
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
      <div className="w-full h-[3000px] [background-image:linear-gradient(to_bottom,_black_0%,_black_85%,_#E2E2B6_95%,_#E2E2B6_100%)]">
        <div className="flex justify-center items-center gap-40 p-10">
          <div className="w-[500px]">
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
        <div className="w-[1140px] bg-white grid grid-cols-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
