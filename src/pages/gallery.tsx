import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GalleryGrid from '@/components/GalleryGrid';

const PageContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 6rem 0 4rem;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled(motion.h1)`
  text-align: center;
  color: var(--secondary-gold);
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export default function Gallery() {
  // This would be dynamically generated from your image files
  const galleryImages = [
    {
      src: '/images/performances/IMG-20191025-WA0026.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים ביום הולדת',
      category: 'ימי הולדת'
    },
    {
      src: '/images/performances/IMG-20191101-WA0008.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בבר מצווה',
      category: 'בר/בת מצווה'
    },
    {
      src: '/images/performances/IMG-20191113-WA0007.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בבית ספר',
      category: 'בתי ספר'
    },
    {
      src: '/images/performances/IMG-20191101-WA0014.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בקייטנה',
      category: 'קייטנות'
    },
    {
      src: '/images/performances/IMG-20191113-WA0001.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים ביום הולדת',
      category: 'ימי הולדת'
    },
    {
      src: '/images/performances/IMG-20191113-WA0008.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בבר מצווה',
      category: 'בר/בת מצווה'
    },
    {
      src: '/images/performances/IMG-20191101-WA0010.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בבית ספר',
      category: 'בתי ספר'
    },
    {
      src: '/images/performances/IMG-20200108-WA0001.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בקייטנה',
      category: 'קייטנות'
    },
    {
      src: '/images/performances/IMG-20190630-WA0019.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים ביום הולדת',
      category: 'ימי הולדת'
    },
    {
      src: '/images/performances/IMG-20191101-WA0009.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בבר מצווה',
      category: 'בר/בת מצווה'
    },
    {
      src: '/images/performances/IMG-20191230-WA0008.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בבית ספר',
      category: 'בתי ספר'
    },
    {
      src: '/images/performances/IMG-20191230-WA0001.jpg',
      alt: 'מורן קל סטנדאפיסט לילדים בקייטנה',
      category: 'קייטנות'
    }
  ];

  const categories = ['ימי הולדת', 'בר/בת מצווה', 'בתי ספר', 'קייטנות'];

  return (
    <StageBackground>
      <Head>
        <title>גלריית תמונות | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="גלריית תמונות מהופעות של מורן קל, סטנדאפיסט לילדים. צפו בתמונות מימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות." />
        <meta name="keywords" content="גלריית תמונות, סטנדאפיסט לילדים, מורן קל, תמונות מופעים, תמונות ימי הולדת, תמונות בר מצווה" />
        <link rel="canonical" href="https://www.morankal.co.il/gallery" />
      </Head>

      <PageContainer>
        <Header />
        
        <Section>
          <Container>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              גלריית תמונות
            </SectionTitle>
            
            <GalleryGrid images={galleryImages} categories={categories} />
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}
