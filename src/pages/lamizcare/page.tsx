import DropdownInputCare from "@/components/dropDownInputCare";
import HeaderOther from "@/components/headerOther";
import axios from "axios";
import React from "react";

async function LamizCare() {
  const response = await axios.get("http://localhost:3001/branchName");
  const branch = response.data;
  return (
    <div>
      <HeaderOther
        header={"انتقادات و پیشنهادات"}
        text={"انتقادات و پیشنهادت خود را با ما در میان بگذارید"}
      />
      <div className="h-auto w-full">
        <div className="w-[1100px] mx-auto mt-15" dir="rtl">
          <h2 className="text-2xl font-semibold">انتقادات و پیشنهادات</h2>
          <p className="text-gray-500 text-lg mt-3">
            ما مشتاقیم نظرات و پیشنهادات شما را بشنویم. تمام سعی ما در این است
            که تجربه‌ای فراموش نشدنی برای مشتریان قهوه لمیز فراهم کنیم. با شنیدن
            نظرات و پیشنهادات شما در مورد تجربه قهوه لمیز (از نوشیدنی‌ها گرفته
            تا سرویس به مشتری و غیره) ما بهتر می‌توانیم در خدمت شما باشیم.
          </p>
          <hr className="mt-10 w-full text-gray-500" />
          <div className="relative w-full text-right mt-15">
            <label htmlFor="" className="text-lg font-semibold text-gray-800">
              شماره تماس
            </label>
            <input
              type="text"
              placeholder=" شماره تماس"
              className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right mt-5"
            />
          </div>
          <div className="flex flex-col mt-10">
            <label
              htmlFor=""
              className="text-lg font-semibold text-gray-800 mb-5"
            >
              به کدام شعبه قهوه لمیز مراجعه کردید؟
            </label>
            <DropdownInputCare name={branch} />
          </div>
          <div className="relative w-full text-right mt-15">
            <label htmlFor="" className="text-lg font-semibold text-gray-800">
              چه نوشیدنی و کیکی را سفارش دادید؟
            </label>
            <input
              type="text"
              className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right mt-5"
            />
          </div>
          <div className="flex flex-col mt-10">
            <h2 className="text-lg font-semibold text-gray-800">
              آیا سابقه کاری (مرتبط یا غیر مرتبط) دارید؟ (اختیاری)
            </h2>
            <div className="flex flex-row gap-5 mt-5">
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">ظروف سرامیکی</span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">یکبار مصرف</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <h2 className="text-lg font-semibold text-gray-800">
              از کیفیت محصول خریداری‌شده راضی بودید؟
            </h2>
            <div className="flex flex-row gap-5 mt-5">
              <div>
                <input type="radio" name="work" />
                <span className="mr-2"> بله </span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">خیر</span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">متوسط</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <h2 className="text-lg font-semibold text-gray-800">
              از نحوه برخورد پرسنل رضایت داشتید؟
            </h2>
            <div className="flex flex-row gap-5 mt-5">
              <div>
                <input type="radio" name="work" />
                <span className="mr-2"> بله </span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">خیر</span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">متوسط</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <h2 className="text-lg font-semibold text-gray-800">
              آیا از رعایت بهداشت توسط پرسنل و نظافت محیط راضی بودید؟
            </h2>
            <div className="flex flex-row gap-5 mt-5">
              <div>
                <input type="radio" name="work" />
                <span className="mr-2"> بله </span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">خیر</span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">متوسط</span>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col mt-10">
            <h2 className="text-lg font-semibold text-gray-800">
              شعار ما در قهوه لمیز که روی لیوان ها و محیط قهوه لمیز با آن آشنا
              هستید &quot;YOU&apos;RE GOING TO FEEL BETTER SOON&quot; ، است .
              آیا شعبه ما را با احساس بهتری ترک می‌کنید؟
            </h2>
            <div className="flex flex-row gap-5 mt-5">
              <div>
                <input type="radio" name="work" />
                <span className="mr-2"> بله </span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">خیر</span>
              </div>
              <div>
                <input type="radio" name="work" />
                <span className="mr-2">نمیدانم</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-15">
            <h2 className="text-lg font-semibold text-gray-800">
              آیا پیشنهاد یا انتقادی دارید؟
            </h2>

            <div
              className="h-[400px] mt-5 border-gray-500 border rounded"
              dir="rtl"
            >
              <textarea className="w-full h-full"></textarea>
            </div>
          </div>
          <div className="w-[200px] h-[50px] bg-[#FE6E1F] mt-15 rounded flex items-center justify-center text-white text-lg font-semibold cursor-pointer mb-15">
            <button>ارسال انتقادات و پیشنهادات</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LamizCare;
