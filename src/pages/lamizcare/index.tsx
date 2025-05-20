"use client";

import { useEffect, useState } from "react";
// import DropdownInputCare from "@/components/dropDownInputCare";
import HeaderOther from "@/components/headerOther";
import axios from "axios";
import { useForm } from "react-hook-form";

// type DropDownItem = {
//   id: number;
//   name: string;
// };

type FormValues = {
  phone: string;
  branch: string;
  order: string;
};

const LamizCare: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const [branch, setBranch] = useState<DropDownItem[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    phone: "",
    branch: "",
    order: "",
    container: "",
    productQuality: "",
    staffBehavior: "",
    hygiene: "",
    feelingBetter: "",
    feedback: "",
  });
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get<string[]>("http://localhost:3001/branchName");
  //       const branchItems: DropDownItem[] = response.data.map((name, index) => ({
  //         id: index + 1,
  //         name,
  //       }));
  //       setBranch(branchItems);
  //     } catch (err) {
  //       setError("خطایی در بارگذاری داده‌ها رخ داد. لطفاً دوباره تلاش کنید.");
  //       console.error("Error fetching branch data:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    register("branch", { required: "تکمیل انتخاب شعبه الزامی است" });
  }, [register]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (data: FormValues) => {
    const submitData = {
      ...formData,
      phone: data.phone,
      branch: data.branch,
      order: data.order,
    };
    try {
      await axios.post("http://localhost:3001/submitFeedback", submitData);
      setSubmitStatus("انتقادات و پیشنهادات شما با موفقیت ارسال شد!");
      setFormData({
        phone: "",
        branch: "",
        order: "",
        container: "",
        productQuality: "",
        staffBehavior: "",
        hygiene: "",
        feelingBetter: "",
        feedback: "",
      });
    } catch (err) {
      setSubmitStatus("خطایی در ارسال فرم رخ داد. لطفاً دوباره تلاش کنید.");
      console.error("Error submitting feedback:", err);
    }
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-xl">در حال بارگذاری...</p>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-xl text-red-500">{error}</p>
  //     </div>
  //   );
  // }

  return (
    <div>
      <HeaderOther
        header="انتقادات و پیشنهادات"
        text="انتقادات و پیشنهادت خود را با ما در میان بگذارید"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-auto w-full">
          <div className="w-[1100px] mx-auto mt-15" dir="rtl">
            <h2 className="text-2xl font-semibold">انتقادات و پیشنهادات</h2>
            <p className="text-gray-500 text-lg mt-3">
              ما مشتاقیم نظرات و پیشنهادات شما را بشنویم. تمام سعی ما در این است
              که تجربه‌ای فراموش نشدنی برای مشتریان قهوه لمیز فراهم کنیم. با
              شنیدن نظرات و پیشنهادات شما در مورد تجربه قهوه لمیز (از نوشیدنی‌ها
              گرفته تا سرویس به مشتری و غیره) ما بهتر می‌توانیم در خدمت شما
              باشیم.
            </p>
            <hr className="mt-10 w-full text-gray-500" />
            <div className="relative w-full text-right mt-15">
              <label
                htmlFor="phone"
                className="text-lg font-semibold text-gray-800"
              >
                شماره تماس
              </label>
              <input
                {...register("phone", {
                  required: "پر کردن شماره تماس الزامی است",
                })}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="شماره تماس"
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right mt-5"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-5">
              <label
                htmlFor="branch"
                className="text-lg font-semibold text-gray-800 mb-5"
              >
                به کدام شعبه قهوه لمیز مراجعه کردید؟
              </label>
              <input
                {...register("phone", {
                  required: "پر کردن شماره تماس الزامی است",
                })}
                type="text"
                name="branch"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right mt-5"
              />
              {errors.branch && (
                <p className="text-red-500 text-sm mt-1 text-right">
                  {errors.branch.message}
                </p>
              )}
            </div>
            <div className="relative w-full text-right mt-15">
              <label
                htmlFor="order"
                className="text-lg font-semibold text-gray-800"
              >
                چه نوشیدنی و کیکی را سفارش دادید؟
              </label>
              <input
                {...register("order", {
                  required: "پر کردن سفارش الزامی است",
                })}
                type="text"
                name="order"
                value={formData.order}
                onChange={handleInputChange}
                className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right mt-5"
              />
              {errors.order && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.order.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mt-10">
              <h2 className="text-lg font-semibold text-gray-800">
                آیا سابقه کاری (مرتبط یا غیر مرتبط) دارید؟ (اختیاری)
              </h2>
              <div className="flex flex-row gap-5 mt-5">
                <div>
                  <input
                    type="radio"
                    name="container"
                    value="ظروف سرامیکی"
                    checked={formData.container === "ظروف سرامیکی"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">ظروف سرامیکی</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="container"
                    value="یکبار مصرف"
                    checked={formData.container === "یکبار مصرف"}
                    onChange={handleInputChange}
                  />
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
                  <input
                    type="radio"
                    name="productQuality"
                    value="بله"
                    checked={formData.productQuality === "بله"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">بله</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="productQuality"
                    value="خیر"
                    checked={formData.productQuality === "خیر"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">خیر</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="productQuality"
                    value="متوسط"
                    checked={formData.productQuality === "متوسط"}
                    onChange={handleInputChange}
                  />
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
                  <input
                    type="radio"
                    name="staffBehavior"
                    value="بله"
                    checked={formData.staffBehavior === "بله"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">بله</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="staffBehavior"
                    value="خیر"
                    checked={formData.staffBehavior === "خیر"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">خیر</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="staffBehavior"
                    value="متوسط"
                    checked={formData.staffBehavior === "متوسط"}
                    onChange={handleInputChange}
                  />
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
                  <input
                    type="radio"
                    name="hygiene"
                    value="بله"
                    checked={formData.hygiene === "بله"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">بله</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="hygiene"
                    value="خیر"
                    checked={formData.hygiene === "خیر"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">خیر</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="hygiene"
                    value="متوسط"
                    checked={formData.hygiene === "متوسط"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">متوسط</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <h2 className="text-lg font-semibold text-gray-800">
                شعار ما در قهوه لمیز که روی لیوان‌ها و محیط قهوه لمیز با آن آشنا
                هستید &quot;YOU&apos;RE GOING TO FEEL BETTER SOON&quot; است. آیا
                شعبه ما را با احساس بهتری ترک می‌کنید؟
              </h2>
              <div className="flex flex-row gap-5 mt-5">
                <div>
                  <input
                    type="radio"
                    name="feelingBetter"
                    value="بله"
                    checked={formData.feelingBetter === "بله"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">بله</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="feelingBetter"
                    value="خیر"
                    checked={formData.feelingBetter === "خیر"}
                    onChange={handleInputChange}
                  />
                  <span className="mr-2">خیر</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="feelingBetter"
                    value="نمیدانم"
                    checked={formData.feelingBetter === "نمیدانم"}
                    onChange={handleInputChange}
                  />
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
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  className="w-full h-full rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
                />
              </div>
            </div>
            <div className="w-[200px] h-[50px] bg-[#FE6E1F] mt-15 rounded flex items-center justify-center text-white text-l font-semibold cursor-pointer mb-15">
              <button type="submit">
                ارسال انتقادات و پیشنهادات
              </button>
            </div>
            {submitStatus && (
              <p
                className={`text-lg mt-5 ${
                  submitStatus.includes("موفقیت")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {submitStatus}
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LamizCare;