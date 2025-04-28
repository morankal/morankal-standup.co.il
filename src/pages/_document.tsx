import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="he" dir="rtl">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Rubik:wght@700&display=swap" rel="stylesheet" />
          
          {/* SEO Meta Tags */}
          <meta name="author" content="מורן קל" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="מורן קל - סטנדאפיסט לילדים" />
          <meta property="og:image" content="https://www.morankal.co.il/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://www.morankal.co.il/og-image.jpg" />
          
          {/* Structured Data - LocalBusiness */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "מורן קל - סטנדאפיסט לילדים",
                "image": "https://www.morankal.co.il/og-image.jpg",
                "url": "https://www.morankal.co.il",
                "telephone": "+972-53-627-7657",
                "email": "info@morankal.co.il",
                "description": "מורן קל - סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות. מופעי סטנדאפ מצחיקים לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות.",
                "areaServed": ["תל אביב", "ירושלים", "חיפה", "מרכז", "צפון", "דרום", "השרון", "גוש דן"],
                "priceRange": "₪₪",
                "sameAs": [
                  "https://www.facebook.com/morankal",
                  "https://www.instagram.com/morankal",
                  "https://www.youtube.com/channel/morankal"
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
