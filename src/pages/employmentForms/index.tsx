import DropdownInput from "@/components/dropDownInput";
import HeaderSection from "@/components/headerSection";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type DayItem = {
  id: number;
  number: number;
};

type FormValues = {
  firstName: string;
  lastName: string;
  city: string;
  district: string;
  area: string;
  birthdayDay: string;
  birthdayMonth: string;
  birthdayYear: string;
  workExperience?: string;
  motivation?: string;
  interests?: string;
  howDidYouFindUs?: string;
};

export default function Form() {
  const [days, setDays] = useState<DayItem[]>([]);
  const [months, setMonths] = useState<DayItem[]>([]);
  const [years, setYears] = useState<DayItem[]>([]);
  const [region, setRegion] = useState<DayItem[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("اطلاعات ارسال‌شده:", data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [daysRes, monthsRes, yearsRes, regionRes] = await Promise.all([
          axios.get<DayItem[]>("http://localhost:3001/days"),
          axios.get<DayItem[]>("http://localhost:3001/months"),
          axios.get<DayItem[]>("http://localhost:3001/year"),
          axios.get<DayItem[]>("http://localhost:3001/regions"),
        ]);

        setDays(daysRes.data);
        setMonths(monthsRes.data);
        setYears(yearsRes.data);
        setRegion(regionRes.data);
      } catch (err) {
        console.error("خطا در دریافت داده‌ها:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    register("birthdayDay", { required: "تکمیل تاریخ تولد الزامی است" });
    register("birthdayMonth", { required: "تکمیل تاریخ تولد الزامی است" });
    register("birthdayYear", { required: "تکمیل تاریخ تولد الزامی است" });
    register("district", { required: "انتخاب منطقه شهرداری الزامی است" });
  }, [register]);

  return (
    <div>
      <HeaderSection
        img="/img/employer-background-e1727095444273.webp"
        header="درخواست همکاری با قهوه لمیز"
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div className="border border-gray-500 w-3/4 h-[2150px] mx-auto my-15">
            <div className="flex justify-end mt-20 mx-25">
              <h1 className="text-2xl">
                درخواست همکاری با شعبه های قهوه لمیز ( باریستا )
              </h1>
            </div>

            <div className="flex flex-row-reverse mt-20 gap-10 justify-center">
              <div className="relative w-[500px] text-right">
                <label className="text-lg text-gray-800">نام</label>
                <input
                  {...register("firstName", {
                    required: "پر کردن نام الزامی است",
                  })}
                  type="text"
                  placeholder="نام"
                  className="w-full border border-gray-700 rounded px-4 py-2 text-right"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="relative w-[500px] text-right">
                <label className="text-lg text-gray-800">نام خانوادگی</label>
                <input
                  {...register("lastName", {
                    required: "پر کردن نام خانوادگی الزامی است",
                  })}
                  type="text"
                  placeholder="نام خانوادگی"
                  className="w-full border border-gray-700 rounded px-4 py-2 text-right"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-20 justfiy-center mr-25">
              <div className="flex justify-end">
                <label className="text-lg text-gray-800">تاریخ تولد</label>
              </div>
              <div className="flex flex-row-reverse gap-8">
                <DropdownInput
                  data={days}
                  placeholder="روز"
                  onChange={(val) => setValue("birthdayDay", val.toString())}
                />
                <DropdownInput
                  data={months}
                  placeholder="ماه"
                  onChange={(val) => setValue("birthdayMonth", val.toString())}
                />
                <DropdownInput
                  data={years}
                  placeholder="سال"
                  onChange={(val) => setValue("birthdayYear", val.toString())}
                />
              </div>
              {(errors.birthdayDay ||
                errors.birthdayMonth ||
                errors.birthdayYear) && (
                <p className="text-red-500 text-sm mt-1 text-right">
                  تکمیل تاریخ تولد الزامی است
                </p>
              )}
            </div>

            <div className="flex flex-row-reverse mt-20 gap-8 justify-center">
              <div className="relative w-[500px] text-right">
                <label className="text-lg text-gray-800">شهر محل سکونت</label>
                <input
                  {...register("city", { required: "پر کردن شهر الزامی است" })}
                  type="text"
                  placeholder="شهر محل سکونت"
                  className="w-full border border-gray-700 rounded px-4 py-2 text-right"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.city.message}
                  </p>
                )}
              </div>
              <div className="text-right text-gray-800">
                <label className="text-lg">آدرس منطقه شهرداری</label>
                <DropdownInput
                  data={region}
                  placeholder="منطقه"
                  onChange={(val) => setValue("district", val.toString())}
                />
                {errors.district && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.district.message}
                  </p>
                )}
              </div>
              <div className="relative w-[220px] text-right">
                <label className="text-lg text-gray-800">
                  محدوده محل سکونت
                </label>
                <input
                  {...register("area", {
                    required: "پر کردن محدوده محل سکونت الزامی است",
                  })}
                  type="text"
                  placeholder="محدوده محل سکونت"
                  className="w-full border border-gray-700 rounded px-4 py-2 text-right"
                />
                {errors.area && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.area.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col mt-20 mr-25">
              <div className="flex justify-end">
                <h2 className="text-lg text-gray-800">
                  آیا سابقه کاری (مرتبط یا غیر مرتبط) دارید؟ (اختیاری)
                </h2>
              </div>
              <div className="flex justify-end gap-5 mt-5">
                <div>
                  <span className="mr-2">خیر</span>
                  <input type="radio" name="work" />
                </div>
                <div>
                  <span className="mr-2">بله</span>
                  <input type="radio" name="work" />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-20 mr-25">
              <div className="flex justify-end">
                <h2 className="text-lg text-gray-800">
                  انگیزه شما برای انتخاب این شغل چیست؟ (اختیاری)
                </h2>
              </div>
              <div
                className="w-[1050px] h-[400px] flex justify-end ml-25 mt-5 border-gray-500 border text-right"
                dir="rtl"
              >
                <textarea className="w-full h-full"></textarea>
              </div>
            </div>
            <div className="flex flex-col mt-20 mr-25">
              <div className="flex justify-end">
                <h2 className="text-lg text-gray-800">
                  خوشحال میشویم اگر از علایق کلی شما بیشتر بشنویم ؟ (اختیاری)
                </h2>
              </div>
              <div
                className="w-[1050px] h-[400px] flex justify-end ml-25 mt-5 border-gray-500 border"
                dir="rtl"
              >
                <textarea className="w-full h-full"></textarea>
              </div>
            </div>
            <div className="flex flex-col mt-20 mr-25">
              <div className="flex justify-end">
                <h2 className="text-lg text-gray-800">
                  نحوه آشنایی با ما ؟ (اختیاری)
                </h2>
              </div>
              <div className="flex justify-end gap-5 mt-5">
                <div>
                  <span className="mr-2">سایر</span>
                  <input type="radio" className="text-lg" name="ref" />
                </div>
                <div>
                  <span className="mr-2">دوستان و آشنایان</span>
                  <input type="radio" className="text-lg" name="ref" />
                </div>
                <div>
                  <span className="mr-2">تلگرام</span>
                  <input type="radio" className="text-lg" name="ref" />
                </div>
                <div>
                  <span className="mr-2"> اینستاگرام </span>
                  <input type="radio" className="text-lg" name="ref" />
                </div>
                <div>
                  <span className="mr-2">وب سایت قهوه لمیز</span>
                  <input type="radio" className="text-lg" name="ref" />
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 ml-[900px] bg-[#FF6600] text-white text-sm w-[250px] h-[50px] rounded items-center justify-center cursor-pointer">
              <button type="submit">
                درخواست همکاری با شعبه های قهوه لمیز
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
