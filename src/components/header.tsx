import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header>
      <div className="flex flex-row items-center justify-around bg-black h-[90px] w-full px-50">
        <div className="flex flex-row items-center space-x-4">
          <div>
            <a href="#">
              <Image
                src="/icons/icons8-account-50.png"
                alt="account"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <Image
                src="/icons/icons8-favourite-50.png"
                alt="favourite"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
          <div>
            <a href="#">
              <Image
                src="/icons/icons8-shopping-cart-24.png"
                alt="shopping-cart"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <ul className="flex flex-row items-center space-x-6 text-white text-sm">
            <li className=" hover:text-[#ff6e1f]">
              <a href="#"> سایر </a>
            </li>
            <li className=" hover:text-[#ff6e1f]">
              <a href="#">تماس با ما</a>
            </li>
            <li className=" hover:text-[#ff6e1f]">
              <a href="#">فرم درخواست همکاری با ما</a>
            </li>
            <li className=" hover:text-[#ff6e1f]">
              <a href="#">سفارش از اسنپ فود</a>
            </li>
            <li className=" hover:text-[#ff6e1f]">
              <a href="#">شعبه های قهوه لمیز</a>
            </li>
            <li className=" hover:text-[#ff6e1f]">
              <a href="#">منو قهوه لمیز</a>
            </li>
            <li className=" hover:text-[#ff6e1f] font-yekanbakh">
              <a href="#">فروشگاه محصولات </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row items-center">
          <a href="#">
            <Image
              src="/icons/Lamiz-logo.webp"
              alt="lamiz-logo"
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
