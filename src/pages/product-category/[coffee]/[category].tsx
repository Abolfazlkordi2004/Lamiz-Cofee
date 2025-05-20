import "@/app/globals.css";
import HeaderSection from "@/components/headerSection";
import ItemShoppingCart from "@/components/itemShoppingCart";
import { useFormatPrice } from "@/hooks/formatPrice";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductModal from "@/components/productModal";
import CoffeeDetail from "@/components/coffeeDetail";
import NitroDetail from "@/components/nitroDetail";
import ProductDetail from "@/components/productDetail";

type Product = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
};

type IProduct = {
  id: string;
  img: string;
  title: string;
  price: string;
  category: string;
};

export default function CoffeePage() {
  const router = useRouter();
  const { category } = router.query;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const formatPrice = useFormatPrice();

  useEffect(() => {
    if (!router.isReady || !category) {
      return;
    }

    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("http://localhost:3001/coffee");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const filteredProducts = data.filter(
          (p: Product) => p.category === category
        );
        console.log("category", category);
        setProducts(filteredProducts);
      } catch {
        setError("خطا در بارگذاری محصولات");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [router.isReady, category]);

  const subcategoryTitle =
    typeof category === "string"
      ? category === "combinatorial"
        ? "قهوه ترکیبی"
        : category === "single_origin"
        ? "قهوه تک‌خاستگاه"
        : category === "coffeinless"
        ? "قهوه بدون کافئین"
        : category === "turk"
        ? "قهوه ترک"
        : category === "lamizpresso"
        ? "لمیزپرسو"
        : category
      : "دسته‌بندی نامشخص";

  return (
    <div>
      <HeaderSection
        img="/img/shop-background.webp"
        header={subcategoryTitle}
      />
      <div className="flex justify-center my-10" dir="rtl">
        <div className="w-full max-w-7xl border rounded px-6 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading ? (
              <p className="text-center col-span-full">در حال بارگذاری...</p>
            ) : error ? (
              <p className="text-center col-span-full text-red-500">{error}</p>
            ) : products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="w-full">
                  <ItemShoppingCart
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    price={formatPrice(product.price)}
                    onSearchClick={() => setSelectedProduct(product)}
                  />
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">محصولی یافت نشد</p>
            )}
          </div>
        </div>
      </div>
      <ProductModal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <ProductModal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
          >
            {selectedProduct.category === "combinatorial" ? (
              <CoffeeDetail
                id={selectedProduct.id}
                img={selectedProduct.img}
                header={selectedProduct.title}
                price={selectedProduct.price}
              />
            ) : selectedProduct.category === "single_origin" ? (
              <CoffeeDetail
                id={selectedProduct.id}
                header={selectedProduct.title}
                img={selectedProduct.img}
                price={selectedProduct.price}
              />
            ) : selectedProduct.category === "nitro" ? (
              <NitroDetail
                id={selectedProduct.id}
                header={selectedProduct.title}
                img={selectedProduct.img}
                price={selectedProduct.price}
              />
            ) : (
              <ProductDetail
                id={selectedProduct.id}
                header={selectedProduct.title}
                img={selectedProduct.img}
                price={selectedProduct.price}
              />
            )}
          </ProductModal>
        )}
      </ProductModal>
    </div>
  );
}
