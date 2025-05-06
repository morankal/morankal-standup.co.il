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
    // Kept videos (originally had titles and categories, now only ID)
    {
      id: 'hxm_QYDPgBQ', 
    },
    {
      id: 'cF4jdl9Ogio',
    },
    // New videos (only ID)
    {
      id: 'GxhpMPJ8tIo',
    },
    {
      id: 'edBVZ2iDrVI',
    },
    {
      id: 'Me8d7ZJFtxI',
    },
    {
      id: '35tZGHJuH54',
    },
    {
      id: 'FGwoUoczfBY',
    },
    {
      id: 'w6yQD0Do5GI',
    },
    {
      id: 'xyXtY4mcK3M',
    },
    {
      id: 'u-g7exJnH8I',
    },
    {
      id: 'F04v6ScC_lo',
    }
  ];

  // Categories are no longer needed as titles/categories are removed
  const categories = []; 

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
            
            {/* Pass only videos; categories prop might need to be removed from VideoGallery component or handled if it expects it */}
            <VideoGallery videos={videos} categories={categories} />
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}

