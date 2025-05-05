"use client";

import { useState, useRef, useEffect } from "react";

type IDropDownInput = {
  placeholder: string;
  data: { id: number; number: number }[]; // اصلاح lowercase
};

export default function DropdownInput({ placeholder, data }: IDropDownInput) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(""); // مقدار انتخاب‌شده
  const wrapperRef = useRef<HTMLDivElement>(null);

  // بستن منو با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: number) => {
    setSelectedValue(value.toString()); // انتخاب مقدار
    setIsOpen(false); // بستن منو
  };

  return (
    <div ref={wrapperRef} className="relative w-64">
      <input
        type="text"
        placeholder={placeholder}
        value={selectedValue}
        className="w-full border border-gray-700  rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
        onClick={() => setIsOpen((prev) => !prev)}
        readOnly
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded shadow z-10 max-h-60 overflow-y-auto">
          <ul className="divide-y divide-gray-200">
            {data.map((item) => (
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-right"
                key={item.id}
                onClick={() => handleSelect(item.number)}
              >
                {item.number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
