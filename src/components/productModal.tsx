"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ProductModal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="relative bg-white p-6 rounded-lg shadow-md w-fit max-w-[90%]">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 text-3xl text-gray-700 hover:text-red-500"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
}
