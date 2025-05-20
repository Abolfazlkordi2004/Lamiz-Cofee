"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";

type DropDownItem = {
  id: number;
  name: string;
};

type IDropDownInput = {
  items: DropDownItem[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function DropdownInputCare({
  items,
  value,
  onChange,
}: IDropDownInput) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  console.log("searchText:", searchTerm);
  console.log("items:", items);

  const handleItemClick = (name: string) => {
    const syntheticEvent = {
      target: {
        name: "branch",
        value: name,
      },
    } as ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
    setIsOpen(false);
  };

  const filteredItems = items.filter(
    (item) => typeof item.name === "string" && item.name.includes(searchTerm)
  );

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <input
        type="text"
        name="branch"
        value={value}
        onChange={(e) => {
          onChange(e);
          setSearchTerm(e.target.value);
        }}
        onClick={() => setIsOpen(!isOpen)}
        placeholder="انتخاب شعبه"
        className="w-full border border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500 text-right"
      />
      {isOpen && (
        <div className="absolute z-10 w-full max-h-60 overflow-y-auto mt-1 bg-white border border-gray-300 rounded shadow">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item.name)}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-right"
              >
                {item.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 text-right">
              موردی یافت نشد
            </div>
          )}
        </div>
      )}
    </div>
  );
}
