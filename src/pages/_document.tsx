import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* icons */}
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Sweenk" />
        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta name="msapplication-TileColor" content="#C4C6E7" />
        <meta name="theme-color" content="#ffffff" />
        {/* social media open graph */}
        <meta
          property="og:title"
          content="Sweenk - Personalized AI News Assistant"
        />
        <meta property="og:site_name" content="Sweenk" />
        <meta property="og:url" content="https://sweenk.com" />
        <meta
          property="og:description"
          content="Discover Sweenk: The future of news consumption. Engage with personalized, AI-curated news through interactive conversations. No more long articles, just meaningful news dialogues tailored to your interests."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="./images/social-media/share-thumbnail.png"
        />

        <title>Sweenk - Personalized AI News Assistant</title>
      </Head>
      <body x-data="{ page: 'home', 'loaded': true, 'stickyMenu': false, 'navigationOpen': false, 'scrollTop': false }">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
