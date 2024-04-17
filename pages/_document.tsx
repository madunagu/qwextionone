import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/logo.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/logo.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="/home/reading.jpg" />
      </Head>
      <body>
        <div className="wrapper">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
