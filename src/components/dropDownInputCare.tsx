"use client";

import { useState, useRef, useEffect } from "react";

type DropDownItem = {
  id: number;
  name: string;
};

type IDropDownInput = {
  name: DropDownItem[];
};

export default function DropdownInputCare({ name }: IDropDownInput) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>("");   
  const wrapperRef = useRef<HTMLDivElement>(null);

 
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

  const handleSelect = (value: string) => {
    setSelectedValue(value);  
    setIsOpen(false);  
  };

  return (
    <div ref={wrapperRef} className="relative w-[400px]">
      <input
        type="text"
        value={selectedValue ?? ""}
        className="w-full border border-gray-700  rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
        onClick={() => setIsOpen((prev) => !prev)}
        readOnly
      />
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded shadow z-10 max-h-100 overflow-y-auto">
          <ul className="divide-y divide-gray-400">
            {name.map((item) => (
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-right"
                key={item.id}
                onClick={() => handleSelect(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
