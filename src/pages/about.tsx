import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaUser, FaTv, FaLaughSquint } from 'react-icons/fa';

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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled(motion.div)`
  color: white;
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 350px;
    margin-bottom: 2rem;
  }
`;

const TVSection = styled.section`
  margin-top: 5rem;
`;

const TVSectionTitle = styled(motion.h2)`
  text-align: center;
  color: var(--secondary-gold);
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const TVGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TVItem = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const TVVideo = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TVTitle = styled.h3`
  padding: 1rem;
  color: white;
  text-align: center;
  font-size: 1.1rem;
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const FeatureItem = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: var(--secondary-gold);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  color: var(--secondary-gold);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

export default function About() {
  return (
    <StageBackground>
      <Head>
        <title>אודות | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="מורן קל - סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות. הכירו את האיש שמאחורי המופעים המצחיקים." />
        <meta name="keywords" content="מורן קל, סטנדאפיסט לילדים, אודות מורן קל, ניסיון סטנדאפיסט, קומיקאי לילדים" />
        <link rel="canonical" href="https://www.morankal.co.il/about" />
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
              אודות מורן קל
            </SectionTitle>
            
            <AboutContent>
              <AboutImage
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img src="/images/performances/IMG-20191025-WA0026.jpg" alt="מורן קל - סטנדאפיסט לילדים" />
              </AboutImage>
              
              <AboutText
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <p>שלום, אני מורן קל, סטנדאפיסט לילדים עם ניסיון של מעל 10 שנים ויותר מ-1,000 הופעות ברחבי הארץ.</p>
                
                <p>התחלתי את דרכי כשגיליתי את האהבה שלי להצחיק ילדים ולראות את החיוך על פניהם. במשך השנים פיתחתי סגנון ייחודי המשלב הומור, משחקים והפעלות שמתאימים במיוחד לילדים בגילאי 7-13.</p>
                
                <p>המופעים שלי מותאמים אישית לכל אירוע, בין אם מדובר ביום הולדת, בר/בת מצווה, אירוע בבית ספר או קייטנה. אני משקיע זמן רב בהכנה לפני כל מופע, לומד על הילד/ה ועל החברים שלהם, ומשלב את המידע הזה בהופעה כדי ליצור חוויה אישית ובלתי נשכחת.</p>
                
                <p>הופעתי במגוון רחב של אירועים, מימי הולדת קטנים ועד אירועים גדולים בבתי ספר וקייטנות. כמו כן, הופעתי בתוכנית הטלוויזיה "הצחוקייה", שם הצגתי את הכישרון שלי בפני קהל רחב.</p>
                
                <p>אני מאמין שצחוק הוא המתנה הטובה ביותר שאפשר לתת, ואני שמח להביא את המתנה הזו לאירועים שלכם.</p>
              </AboutText>
            </AboutContent>
            
            <FeatureList>
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <FaUser />
                </FeatureIcon>
                <FeatureTitle>ניסיון</FeatureTitle>
                <p>מעל 10 שנות ניסיון ויותר מ-1,000 הופעות ברחבי הארץ.</p>
              </FeatureItem>
              
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <FaTv />
                </FeatureIcon>
                <FeatureTitle>הופעות בטלוויזיה</FeatureTitle>
                <p>הופעות בתוכנית "הצחוקייה" וערוצי טלוויזיה נוספים.</p>
              </FeatureItem>
              
              <FeatureItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>
                  <FaLaughSquint />
                </FeatureIcon>
                <FeatureTitle>התאמה אישית</FeatureTitle>
                <p>כל מופע מותאם אישית לאירוע ולקהל היעד.</p>
              </FeatureItem>
            </FeatureList>
            
            <TVSection>
              <TVSectionTitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                הופעתי בטלוויזיה
              </TVSectionTitle>
              
              <TVGrid>
                <TVItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <TVVideo>
                    <iframe
                      src="https://www.youtube.com/embed/cF4jdl9Ogio"
                      title="מורן קל בתוכנית הצחוקייה"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </TVVideo>
                  <TVTitle>מורן קל בתוכנית "הצחוקייה" - פרק 1</TVTitle>
                </TVItem>
                
                <TVItem
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <TVVideo>
                    <iframe
                      src="https://www.youtube.com/embed/hxm_QYDPgBQ"
                      title="מורן קל בתוכנית הצחוקייה"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </TVVideo>
                  <TVTitle>מורן קל בתוכנית "הצחוקייה" - פרק 2</TVTitle>
                </TVItem>
              </TVGrid>
            </TVSection>
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}
