// components/DropdownInput.tsx
"use client";

import { useState, useRef, useEffect } from "react";

type IDropDownInput = {
  placeholder: string;
  data: {id: number, Number: number}[];
};

export default function DropdownInput({ placeholder, data }: IDropDownInput) {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <div ref={wrapperRef} className="relative w-64">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
        onClick={() => setIsOpen((prev) => !prev)}
        readOnly
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded shadow z-10">
          <ul className="divide-y divide-gray-200">
            {data.map((item) => (
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                key={item.id}
              >
                {item.Number}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
