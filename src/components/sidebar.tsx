"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // یا هر آیکون دلخواه

const categories = [
  {
    title: "قهوه ها",
    sub: ["اسپرسو", "فرانسه", "ترک"],
  },
  {
    title: "ماشین الات و تجهیرات",
    sub: ["اسپرسوساز", "آسیاب", "تمپر"],
  },
  {
    title: "سایر محصولات",
    sub: [],
  },
];

export default function Sidebar() {
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="w-[230px] h-fit rounded border border-gray-400 p-4">
      <h2 className="text-xl font-bold mb-4 text-right">دسته بندی محصولات</h2>

      {categories.map((cat) => (
        <div key={cat.title} className="mb-4">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleMenu(cat.title)}>
            <span className="text-right text-lg">{cat.title}</span>
            {cat.sub.length > 0 && (
              <span>
                {openMenus.includes(cat.title) ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </span>
            )}
          </div>

          {openMenus.includes(cat.title) && cat.sub.length > 0 && (
            <div className="mt-2 pr-4 space-y-1">
              {cat.sub.map((subItem) => (
                <div key={subItem} className="flex justify-end items-center space-x-2">
                  <span className="text-sm">{subItem}</span>
                  <input type="checkbox" className="h-4 w-4 text-orange-500" />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
