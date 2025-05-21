import { useCallback } from "react";

export function useFormatPrice() {
  const formatPriceIfRange = useCallback((price: string): string => {
    const number = Number(price.trim());
    return isNaN(number)
      ? price
      : number.toLocaleString("fa-IR", {
          useGrouping: true,
          maximumFractionDigits: 0,
        });
  }, []);

  return formatPriceIfRange;
}
