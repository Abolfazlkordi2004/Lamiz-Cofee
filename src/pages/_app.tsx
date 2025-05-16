import { AppProps } from "next/app";
import { useRouter } from "next/router";
import RootLayout from "@/components/RootLayout";
import Footer from "@/components/footer";
import "../app/globals.css";  


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  
  const showFooter = !router.asPath.startsWith("/branches/");

  return (
    <RootLayout>
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </RootLayout>
  );
}