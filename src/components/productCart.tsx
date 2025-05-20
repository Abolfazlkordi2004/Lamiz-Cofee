import { useFormatPrice } from "@/hooks/formatPrice";
import Image from "next/image";
import React from "react";

export interface IProductcCartProps {
  id: number;
  img: string;
  fatile: string;
  entitle: string;
  size: string[];
  description: string;
  category: string;
}

interface ProductCartProps {
  products: IProductcCartProps[];
}

const ProductCart: React.FC<ProductCartProps> = ({ products }) => {
  const formatPrice = useFormatPrice();
  const sizeLabels = ["کوچک", "متوسط", "بزرگ"];
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center p-4 rounded bg-[#F0F0F0] shadow-xl text-center w-[340px] h-[350px]"
        >
          <div className="relative w-[150px] h-[150px]">
            {item.img && (
              <Image
                src={item.img}
                alt="product-image"
                fill
                className="object-cover"
              />
            )}
          </div>
          <h2 className="text-l font-bold mt-2">{item.fatile}</h2>
          <h3 className="text-l font-bold">{item.entitle}</h3>
          {item.size.length > 0 && (
            <div className="mt-2 flex flex-row gap-4 justify-center">
              {item.size.map((sizeItem, index) => (
                <div key={index} className="flex flex-col items-center">
                  {item.size.length > 1 && (
                    <span className="text-l">
                      {sizeLabels[index] ?? `سایز ${index + 1}`}
                    </span>
                  )}
                  <span className="text-l font-bold mt-2">
                    {formatPrice(sizeItem)}
                  </span>
                </div>
              ))}
            </div>
          )}
          <p className="mt-2 text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
