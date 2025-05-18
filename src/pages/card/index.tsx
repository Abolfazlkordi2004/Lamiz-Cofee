import React from "react";

function Cards() {
  return (
    <div className="bg-[#F0F0F0]">
      <div className="w-[1140px] h-[90px] bg-[#FE6E1F]">
        <h1>مشتری گرامی !</h1>
        <p>
          سفارشات ثبت شده از طریق تیپاکس ( پس کرایه ) در بازه‌ی ۲ الی ۵ روز کاری
          ارسال می‌گردد.
        </p>
      </div>
      <div className="w-[1140px] h-[1000px] bg-white flex flex-row">
        <div className="w-[355px] h-[485px] flex justify-center items-center">
          <div className="flex flex-col">
            <h1>جمع کل سبد خرید</h1>
            <div className="flex flex-row justify-evenly">
              <p>جمع جزء</p>
              <p>0</p>
            </div>
            <hr />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Cards;
