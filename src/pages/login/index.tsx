"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SwitchComponent from "@/components/shiftBox";

function Login() {
  const [mode, setMode] = useState<"login" | "register" | "reset">("login");

  const backgroundColors = {
    login: "#F6F6F6",
    register: "#E0F7FA",
    reset: "#FFF8E1",
  };

  const renderFormFields = () => {
    switch (mode) {
      case "login":
      case "register":
        return (
          <>
            <div>
              <div>
                <input
                  type="text"
                  placeholder="آدرس ایمیل یا نام کاربری"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
              <div className="mt-10">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
              <div className="  mt-10">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
              <div className="  mt-10">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
              <div className="  mt-10">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
              <div className="  mt-10">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
              <div className="  mt-10">
                <input
                  type="password"
                  placeholder="رمز عبور"
                  className="placeholder:text-right border rounded border-gray-500  focus:border-blue-500 h-[40px] w-[400px] text-right"
                />
              </div>
            </div>
            <SwitchComponent />
          </>
        );

      case "reset":
        return (
          <div className="flex flex-col mt-10 items-center">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="placeholder:text-center border-b border-gray-500 focus:border-b-2 focus:border-blue-500 focus:outline-none w-[400px] text-center"
            />
            <p className="text-xs text-gray-500 mt-2">
              لینک بازنشانی رمز عبور به ایمیل شما ارسال خواهد شد.
            </p>
          </div>
        );
    }
  };

  return (
    <motion.div
      animate={{ backgroundColor: backgroundColors[mode] }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center w-full min-h-screen overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={mode}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row w-[1440px] h-[700px] bg-white rounded shadow-lg"
        >
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-[615px] h-[660px] rounded shadow flex flex-col justify-center items-center">
              <div dir="rtl">
                <h3 className="text-center text-xl font-bold mb-5">
                  {mode === "login"
                    ? "ورود"
                    : mode === "register"
                    ? "ثبت‌نام"
                    : "بازنشانی رمز عبور"}
                </h3>

                {renderFormFields()}

                <div>
                  <button className="w-[200px] h-[40px] rounded bg-[#FE6E1F] text-white flex justify-center items-center mt-10 mx-auto cursor-pointer">
                    {mode === "login"
                      ? "ورود"
                      : mode === "register"
                      ? "ثبت‌نام"
                      : "ارسال لینک بازنشانی"}
                  </button>
                </div>

                <div className="mt-10 space-y-2">
                  {mode !== "register" && (
                    <button
                      onClick={() => setMode("register")}
                      className="text-[#FE6E1F] text-sm cursor-pointer"
                    >
                      <span className="text-black">حساب کاربری ندارید؟</span> یک
                      حساب بسازید
                    </button>
                  )}
                  {mode !== "reset" && (
                    <button
                      onClick={() => setMode("reset")}
                      className="text-[#FE6E1F] text-sm block cursor-pointer"
                    >
                      رمز عبور خود را فراموش کرده‌اید؟
                    </button>
                  )}
                  {mode !== "login" && (
                    <button
                      onClick={() => setMode("login")}
                      className="text-blue-500 text-sm block cursor-pointer"
                    >
                      بازگشت به ورود
                    </button>
                  )}
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
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default Login;
