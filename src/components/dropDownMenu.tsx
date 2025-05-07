"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type IDropdownMenu = {
  text: string;
  items: string[];
};

export default function DropdownMenu({ items, text }: IDropdownMenu) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-right inline-block" dir="rtl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row-reverse items-center justify-end gap-2 px-3 py-3 text-black text-xl  hover:text-[#8E6145] w-full"
      >
        {text}
        {isOpen ? (
          <FaChevronUp className="w-4 h-4" />
        ) : (
          <FaChevronDown className="w-4 h-4" />
        )}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="mt-2 w-full py-4 pr-4 text-xl list-disc list-inside text-black">
              {items.map((item, index) => (
                <li key={index} className="mb-3">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
