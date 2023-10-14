import "../styles/style.css";
import "../styles/star.css";
import "../styles/animate.css";
import { Header } from "@/components";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
