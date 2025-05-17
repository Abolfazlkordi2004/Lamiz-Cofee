import React from "react";
import Image from "next/image";
import Link from "next/link";
import SwitchComponent from "@/components/shiftBox";

function Login() {
  return (
    <div className="flex justify-center items-center bg-[#F6F6F6] w-full h-[1200px]">
      <div className="flex flex-row  w-[1440px] h-[700px] bg-[#FFFFFF] rounded">
        <div className="w-1/2 flex justify-center items-center">
          <div className="w-[615px] h-[560px] rounded shadow flex flex-col justify-center items-center">
            <div dir="rtl">
              <h3 className="text-center">ورود</h3>
              <div className="flex flex-row mt-15 gap-2">
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/icons/icons8-account-48.png"
                    alt="account-icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <input
                  type="text"
                  placeholder="ادرس ایمیل , نام کاربری"
                  className="placeholder:text-center border-b border-gray-500 focus:border-b-2 focus:border-blue-500 focus:outline-none w-[400px] text-center"
                />
              </div>
              <div className="flex flex-row mt-10 gap-2">
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src="/icons/icons8-password-50.png"
                    alt="password-icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <input
                  type="text"
                  placeholder="رمز"
                  className="placeholder:text-center border-b border-gray-500 focus:border-b-2 focus:border-blue-500 focus:outline-none w-[400px] text-center"
                />
              </div>
              <SwitchComponent/>
            
              <div>
                <button className="w-[200px] h-[35px] rounded bg-[#FE6E1F] text-white flex justify-center items-center mt-10 mx-auto cursor-pointer">
                  ورود
                </button>
              </div>
              <div className="mt-10">
                <label htmlFor="" className="text-sm mx-2">
                  حساب کاربری ندارید؟
                </label>
                <button className="text-[#FE6E1F] cursor-pointer text-sm">
                  یک حساب کاربری بسازید
                </button>
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm mx-2">
                  رمز عبور خود را فراموش کرده اید؟
                </label>
                <button className="text-[#FE6E1F] cursor-pointer text-sm">
                  بازنشانی رمز عبور
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2">
          <div className="text-nowrap flex justify-end px-5 py-5 hover:text-[#FE6E1F]">
            <Link href="/">
              <p> بازگشت به صفحه اصلی</p>
            </Link>
          </div>
          <div className="flex justify-center items-center h-full w-full">
            <div className="w-[650px] h-[100px]">
              <p className="text-center">
                کاربر گرامی وب‌سایت قهوه لمیز، لطفا جهت استفاده از امکانات
                وب‌سایت قهوه لمیز ابتدا ثبت نام کنید و یا وارد حساب کاربری خود
                شوید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
