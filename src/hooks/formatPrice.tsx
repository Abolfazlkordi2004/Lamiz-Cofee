import { useCallback } from "react";

export function useFormatPrice() {
  const formatPriceIfRange = useCallback((price: string): string => {
    if (price.includes("–")) {
      return (
        price
          .split("–")
          .map((p) => {
            const number = Number(p.trim());
            return isNaN(number) ? p : number.toLocaleString("fa-IR");
          })
          .join(" ")
      );
    }

    const number = Number(price.trim());
    return isNaN(number) ? price : number.toLocaleString("fa-IR") + " تومان";
  }, []);

  return formatPriceIfRange;
}
