import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyles from '@/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const theme = {
  colors: {
    primaryRed: '#D90000',
    primaryBlack: '#000000',
    secondaryGold: '#FFD700',
    secondaryGreen: '#00A651',
    textColor: '#333333',
    backgroundLight: '#f5f5f5',
  },
  fonts: {
    heading: '"Rubik", sans-serif',
    body: '"Assistant", sans-serif',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Rubik:wght@700&display=swap" rel="stylesheet" />
        <title>מורן קל - סטנדאפיסט לילדים | מופעי סטנדאפ לימי הולדת ואירועים</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
        <WhatsAppFloat phoneNumber="972536277657" />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
