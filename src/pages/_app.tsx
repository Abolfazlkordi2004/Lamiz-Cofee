// import Header from "@/components/header";
// import NitroCold from "@/pages/product-category/nitro-cold-brew-coffee/page";

import { AppProps } from "next/app";
import RootLayout from "@/app/layout";

// import Blowers from "@/pages/product-category/blowers/page";
// import Blowers from "@/pages/product-category/blowers/page";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
