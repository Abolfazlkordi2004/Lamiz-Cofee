import DropdownInput from "@/components/dropDownInput";
import HeaderSection from "@/components/headerSection";
import axios from "axios";
import React from "react";

type DayItem = {
  id: number;
  number: number;
};

async function Form() {
  const responseDays = await axios.get<DayItem[]>("http://localhost:3001/days");
  const days = responseDays.data;

  const responseMonth = await axios.get<DayItem[]>(
    "http://localhost:3001/months"
  );
  const months = responseMonth.data;

  const responseYears = await axios.get<DayItem[]>(
    "http://localhost:3001/year"
  );
  const years = responseYears.data;

  return (
    <div>
      <HeaderSection
        img="/img/employer-background-e1727095444273.webp"
        header="درخواست همکاری با قهوه لمیز"
      />

      <div className="w-full h-[2000px]">
        <div className=" border border-gray-500 w-3/4 h-[1700px] mx-auto my-15">
          <div className="flex justify-end mt-10 mx-5">
            <h1 className="text-2xl">
              درخواست همکاری با شعبه های قهوه لمیز ( باریستا )
            </h1>
          </div>
          <div className="flex flex-row-reverse mt-10">
            <div>
              <label htmlFor="">نام</label>
              <input type="text" placeholder="نام" />
            </div>
            <div>
              <label htmlFor="">نام خانوادگی</label>
              <input type="text" placeholder="نام خانوادگی" />
            </div>
          </div>
          <div className="flex flex-row-reverse mt-10">
            <div>
              <label htmlFor="">کد ملی</label>
              <input type="text" placeholder="کد ملی" />
            </div>
            <div>
              <label htmlFor=""> تلفن همراه </label>
              <input type="text" placeholder="تلفن همراه" />
            </div>
          </div>
          <div className="flex flex-row-reverse mt-10">
            <label htmlFor="">تاریخ تولد</label>
            <DropdownInput data={days} placeholder="روز" />
            <DropdownInput data={months} placeholder="ماه" />
            <DropdownInput data={years} placeholder="سال" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
