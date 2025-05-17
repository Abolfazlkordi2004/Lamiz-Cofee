import { useState } from "react";
import { motion } from "framer-motion";

export default function SwitchComponent() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="mt-5">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <motion.div
          className="relative w-11 h-6 rounded-full"
          animate={{
            backgroundColor: isChecked ? "#2563eb" : "#e5e7eb",  
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full"
            animate={{
              x: isChecked ? 20 : 0,  
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="ms-3 text-sm text-gray-700">مرا به خاطر بسپار</span>
      </label>
    </div>
  );
}