import { Footer } from "@/components";
import "@/styles/animate.css";
import "@/styles/star.css";
import "@/styles/stars-green.css";
import "@/styles/style.css";
import "@/styles/typography.css";
import { useRouter } from "next/router";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isCryptoAIPage = router.pathname === "/crypto-ai";

  return (
    <>
      <Component {...pageProps} />
      <Footer showSubscribe={!isCryptoAIPage} />
    </>
  );
}
