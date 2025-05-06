import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import VideoGallery from '@/components/VideoGallery';

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

export default function Videos() {
  const videos = [
    // Kept videos with original titles and categories
    {
      id: 'hxm_QYDPgBQ',
      title: 'הופעה מלאה - מורן קל סטנדאפיסט לילדים',
      category: 'הופעות מלאות'
    },
    {
      id: 'cF4jdl9Ogio',
      title: 'שואוריל - מורן קל סטנדאפיסט לילדים',
      category: 'שואוריל'
    },
    // New videos with generic titles and a new category
    {
      id: 'GxhpMPJ8tIo',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'edBVZ2iDrVI',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'Me8d7ZJFtxI',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: '35tZGHJuH54',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'FGwoUoczfBY',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'w6yQD0Do5GI',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'xyXtY4mcK3M',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'u-g7exJnH8I',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    },
    {
      id: 'F04v6ScC_lo',
      title: 'סרטון מורן קל',
      category: 'סרטונים חדשים'
    }
  ];

  // Define categories based on the videos array
  const categories = Array.from(new Set(videos.map(video => video.category)));
  // Ensure specific order if needed, e.g., 'שואוריל' first, then 'הופעות מלאות', then 'סרטונים חדשים'
  categories.sort((a, b) => {
    if (a === 'שואוריל') return -1;
    if (b === 'שואוריל') return 1;
    if (a === 'הופעות מלאות') return -1;
    if (b === 'הופעות מלאות') return 1;
    return a.localeCompare(b);
  });


  return (
    <StageBackground>
      <Head>
        <title>גלריית וידאו | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="צפו בקטעי וידאו מהופעות של מורן קל, סטנדאפיסט לילדים." />
        <meta name="keywords" content="וידאו סטנדאפ לילדים, קטעי וידאו מורן קל, שואוריל סטנדאפיסט לילדים, הופעות סטנדאפ לילדים" />
        <link rel="canonical" href="https://www.morankal.co.il/videos" />
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
              גלריית וידאו
            </SectionTitle>
            
            <VideoGallery videos={videos} categories={categories} />
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}

