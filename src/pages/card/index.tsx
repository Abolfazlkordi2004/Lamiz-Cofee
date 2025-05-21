import { useCart } from "@/components/cartContext";
import CartItem from "@/components/cartItem";
import { useFormatPrice } from "@/hooks/formatPrice";
import Link from "next/link";
import React from "react";

function Cards() {
  const formatPrice = useFormatPrice();
  const { cartItems, removeFromCart, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  console.log(cartItems);

  const offPrice = (10 * totalPrice) / 100;
  const total = totalPrice + offPrice;
  return (
    <div className="bg-[#F0F0F0] flex flex-col items-center justify-center">
      <div
        className="w-[1140px] h-[90px] bg-[#FE6E1F] text-white my-5 flex items-center"
        dir="rtl"
      >
        <div className="px-5">
          <h1 className="text-xl mb-2">مشتری گرامی !</h1>
          <p>
            سفارشات ثبت شده از طریق تیپاکس ( پس کرایه ) در بازه‌ی ۲ الی ۵ روز
            کاری ارسال می‌گردد.
          </p>
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="w-[1140px] h-[400px] flex flex-col justify-center items-center">
          <p>سبد خرید شما خالی است </p>
          <div>
            <Link href="/shop">
              <button className="w-[250px] h-[40px] rounded text-white bg-[#FE6E1F] my-5 cursor-pointer">
                بازگشت به فروشگاه
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="w-[1140px] h-auto min-h-[1000px] bg-white flex flex-row shadow my-5">
          <div className="w-[355px] h-[485px] flex justify-center items-center border rounded border-gray-300 mx-5 my-5">
            <div className="flex flex-col items-center justify-center">
              <div>
                <h1 className="text-xl">جمع کل سبد خرید</h1>
              </div>
              <div className="flex flex-row-reverse justify-between w-full my-5">
                <p>جمع جزء</p>
                <p className="text-gray-500">
                  {formatPrice(totalPrice.toString())}
                </p>
              </div>
              <div className="flex flex-row-reverse justify-between w-full my-5">
                <p>حمل و نقل</p>
                <p>ارسال با تیپاکس</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex flex-row-reverse justify-between w-full my-5">
                <p>مالیات</p>
                <p className="text-[#FE6E1F]">
                  {formatPrice(offPrice.toString())}
                </p>
              </div>
              <hr />
              <div className="flex flex-row-reverse justify-between w-full my-5">
                <p className="text-xl">مجموع</p>
                <p>{formatPrice(total.toString())}</p>
              </div>
              <div className="my-5">
                <Link href="/checkout">
                  <button className="w-[300px] h-[45px] rounded bg-[#FE6E1F] text-white flex justify-center items-center cursor-pointer">
                    ادامه جهت تسویه حساب
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row-reverse justify-between w-[650px] my-5 mx-8">
              <p className="text-lg mr-25">محصول</p>
              <p className="text-lg">قیمت</p>
              <p className="text-lg">تعداد</p>
              <p className="text-lg">جمع جز</p>
            </div>
            <hr className="border-gray-600" />
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.header}
                price={formatPrice(item.price)}
                quantity={item.quantity}
                totalPrice={formatPrice(
                  (Number(item.price) * item.quantity).toString()
                )}
                onRemove={() => removeFromCart(item.id)}
              />
            ))}

            {cartItems.length > 0 && (
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded my-5 cursor-pointer"
                  onClick={clearCart}
                >
                  پاک کردن سبد خرید
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
