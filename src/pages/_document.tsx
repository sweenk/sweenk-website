import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* icons */}
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/Icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/Icon-512.png" />
        <link rel="apple-touch-icon" href="/favicon/Icon-192.png" />
        <meta name="apple-mobile-web-app-title" content="Sweenk" />
        <link rel="manifest" href="/favicon/manifest.json" />

        <meta name="msapplication-TileColor" content="#6541B6" />
        <meta name="theme-color" content="#6541B6" />
        {/* social media open graph */}
        <meta
          property="og:title"
          content="Your Personalized AI News Assistant"
        />
        <meta property="og:site_name" content="Sweenk" />
        <meta property="og:url" content="https://sweenk.com" />
        <meta
          property="og:description"
          content="Cut through the noise. Sweenk intelligently collects, summarizes, and delivers personalized news updates—giving you only what matters in a fraction of the time."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/images/og/og-main-banner.png"
        />

        <title>Sweenk - Your Personalized AI News Assistant</title>
        <script src="/Gradient.js"></script>
      </Head>
      <body x-data="{ page: 'home', 'loaded': true, 'stickyMenu': false, 'navigationOpen': false, 'scrollTop': false }">
        <canvas id="gradient-canvas" style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          pointerEvents: "none"
        }}></canvas>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{__html: `
          if (typeof Gradient !== 'undefined') {
            var gradient = new Gradient();
            gradient.initGradient('#gradient-canvas');
          }
        `}} />
      </body>
    </Html>
  );
}
