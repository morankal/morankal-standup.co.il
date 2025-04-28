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
  // This would be dynamically generated from your video data
  const videos = [
    {
      id: 'cF4jdl9Ogio',
      title: 'שואוריל - מורן קל סטנדאפיסט לילדים',
      category: 'שואוריל'
    },
    {
      id: 'hxm_QYDPgBQ',
      title: 'הופעה מלאה - מורן קל סטנדאפיסט לילדים',
      category: 'הופעות מלאות'
    },
    {
      id: 'dQw4w9WgXcQ', // Placeholder - replace with actual video ID
      title: 'קטע מתוך "הצחוקייה" - מורן קל',
      category: 'הצחוקייה'
    },
    {
      id: 'ZZ5LpwO-An4', // Placeholder - replace with actual video ID
      title: 'מופע יום הולדת - מורן קל סטנדאפיסט לילדים',
      category: 'ימי הולדת'
    },
    {
      id: '9bZkp7q19f0', // Placeholder - replace with actual video ID
      title: 'מופע בר מצווה - מורן קל סטנדאפיסט לילדים',
      category: 'בר/בת מצווה'
    },
    {
      id: 'jNQXAC9IVRw', // Placeholder - replace with actual video ID
      title: 'מופע בבית ספר - מורן קל סטנדאפיסט לילדים',
      category: 'בתי ספר'
    }
  ];

  const categories = ['שואוריל', 'הופעות מלאות', 'הצחוקייה', 'ימי הולדת', 'בר/בת מצווה', 'בתי ספר'];

  return (
    <StageBackground>
      <Head>
        <title>גלריית וידאו | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="צפו בקטעי וידאו מהופעות של מורן קל, סטנדאפיסט לילדים. שואוריל, הופעות מלאות, קטעים מהטלוויזיה ועוד." />
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
