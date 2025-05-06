import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const items = ['آیتم اول', 'آیتم دوم', 'آیتم سوم'];

  return (
    <div className="relative inline-block text-right">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        نمایش منو
        {isOpen ? <FaChevronUp className="w-4 h-4" /> : <FaChevronDown className="w-4 h-4" />}
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-4 z-10 list-disc list-inside text-gray-800">
          {items.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
