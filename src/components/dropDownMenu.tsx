import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type IDropdownMenu = {
  header: string;
  text: string;
};

export default function DropdownMenu({ header, text }: IDropdownMenu) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {header}
        {isOpen ? (
          <FaChevronUp className="w-4 h-4" />
        ) : (
          <FaChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-10">
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </div>
  );
}
