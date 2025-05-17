import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// تعریف نوع برای کلیدهای بک‌گراند
type BackgroundKey = "default" | "signup" | "reset";

// تعریف نوع برای آبجکت بک‌گراند
interface Background {
  className: string;
  image: string | null;
}

export default function LoginPage() {
  const [backgroundState, setBackgroundState] = useState<BackgroundKey>("default");

  // تنظیمات بک‌گراند‌های مختلف
  const backgrounds: Record<BackgroundKey, Background> = {
    default: {
      className: "bg-gradient-to-r from-blue-500 to-indigo-600",
      image: null,
    },
    signup: {
      className: "bg-gradient-to-r from-green-500 to-teal-600",
      image: null,
    },
    reset: {
      className: "bg-gradient-to-r from-purple-500 to-pink-600",
      image: null,
    },
  };

  // تغییر وضعیت بک‌گراند با کلیک روی دکمه‌ها
  const handleBackgroundChange = (state: BackgroundKey) => {
    setBackgroundState(state);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* لایه بک‌گراند با انیمیشن */}
      <AnimatePresence>
        <motion.div
          key={backgroundState}
          className={`absolute inset-0 ${backgrounds[backgroundState].className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={
            backgrounds[backgroundState].image
              ? { backgroundImage: `url(${backgrounds[backgroundState].image})`, backgroundSize: "cover" }
              : {}
          }
        />
      </AnimatePresence>

      {/* محتوای صفحه (فرم لاگین) */}
      <motion.div
        className="relative z-10 bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">ورود به حساب کاربری</h2>
        <div className="space-y-4">
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            onClick={() => handleBackgroundChange("default")}
          >
            ورود
          </button>
          <button
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            onClick={() => handleBackgroundChange("signup")}
          >
            ساخت حساب کاربری
          </button>
          <button
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            onClick={() => handleBackgroundChange("reset")}
          >
            بازنشانی رمز عبور
          </button>
        </div>
      </motion.div>
    </div>
  );
}