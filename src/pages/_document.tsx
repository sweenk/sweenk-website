import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body x-data="{ page: 'home', 'loaded': true, 'stickyMenu': false, 'navigationOpen': false, 'scrollTop': false }">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
