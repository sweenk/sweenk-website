import "@/styles/style.css";
import "@/styles/typography.css";
import "@/styles/star.css";
import "@/styles/stars-green.css";
import "@/styles/animate.css";
import { Footer, Header } from "@/components";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
