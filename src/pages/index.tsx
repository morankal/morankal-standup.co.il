import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import HeroSection from '@/components/HeroSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const Section = styled.section`
  padding: 4rem 0;
  position: relative;
  z-index: 10;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: var(--secondary-gold);
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PerformanceTypes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const PerformanceCard = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardImage = styled.div`
  height: 200px;
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  color: white;
`;

const CardTitle = styled.h3`
  color: var(--secondary-gold);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background-color: var(--primary-red);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #b80000;
  }
`;

export default function Home() {
  // Sample testimonials data
  const testimonials = [
    {
      name: 'דנה',
      text: 'מורן הופיע ביום הולדת 9 של הבן שלי, היה מושלם...!! הילדים עפו, המבוגרים נקרעו, הכל היה מדויק, ומרגישים שהושקעה מחשבה רבה בכל הפרטים. מורן מקצועי ומצחיק. ממליצה, בחום ואהבה.',
      event: 'יום הולדת 9'
    },
    {
      name: 'סיון חכים',
      text: 'מורן, היה מעולה, הילדים לא הפסיקו לצחוק, היתה בת מצווה בלתי נשכחת',
      event: 'בת מצווה'
    },
    {
      name: 'אתי',
      text: 'היה מושלם! הזמנו את מורן ליומולדת 9, אחרי שחיפשנו המון זמן הפעלה בוגרת יותר שתתאים לגיל הזה ושתהיה בראש אחר. הילדים עפו עליו ולא הפסיקו לצחוק (וגם אנחנו 😉). ידע איך לזרום עם הילדים וגם איך להחזיק אותם בתוך ההפעלה עם המון סבלנות ומקצועיות.',
      event: 'יום הולדת 9'
    },
    {
      name: 'דקלה',
      text: 'ליומולדת 10 חיפשנו דרך שונה ומיוחדת לחגוג עם כל הכיתה, והגענו למורן. היה מצחיק, כיף ומשחרר. מורן משקיע בחשיבה מתוכננת לפני, שופע הפתעות ומצויד בהמון סבלנות...! ילד יום ההולדת יצא מרוצה עד הגג והחברים חזרו הביתה שמחים עם תגובות מפרגנות.',
      event: 'יום הולדת 10'
    },
    {
      name: 'טלי',
      text: 'חיפשנו סטנאפיסט ליום הולדת של הבת שלי ומהשיחה הראשונה הבנו שהולך להיות מעולה. הקשבנו לטיפים שהוא נתן לנו על מה כדאי להכין ולעשות לפני ובזמן האירוע, ובזכות מורן היתה לבת שלי יום הולדת מצחיקה, מהנה ובראש שקט.',
      event: 'יום הולדת'
    }
  ];

  return (
    <StageBackground>
      <Head>
        <title>מורן קל - סטנדאפיסט לילדים | מופעי סטנדאפ לימי הולדת ואירועים</title>
        <meta name="description" content="מורן קל - סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 1,000 הופעות. מופעי סטנדאפ מצחיקים לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות." />
        <meta name="keywords" content="סטנדאפיסט לילדים, קומיקאי לילדים, סטנדאפ לילדים, מופע סטנדאפ לילדים, מורן קל סטנדאפיסט, מופע מורן קל, מופע קומי לילדים" />
        <link rel="canonical" href="https://www.morankal.co.il" />
      </Head>

      <HomeContainer>
        <Header />
        
        <HeroSection videoUrl="https://www.youtube.com/embed/cF4jdl9Ogio" />
        
        <Section>
          <Container>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              המופעים שלי
            </SectionTitle>
            
            <PerformanceTypes>
              <PerformanceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CardImage>
                  <img src="/images/performances/IMG-20191025-WA0026.jpg" alt="מופע יום הולדת לילדים" />
                </CardImage>
                <CardContent>
                  <CardTitle>ימי הולדת</CardTitle>
                  <p>מופע סטנדאפ מצחיק ומותאם אישית לילד/ה החוגגים. מתאים לגילאי 7-13, כולל משחקים, הפעלות והפתעות.</p>
                </CardContent>
              </PerformanceCard>
              
              <PerformanceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CardImage>
                  <img src="/images/performances/IMG-20191101-WA0008.jpg" alt="מופע בר/בת מצווה" />
                </CardImage>
                <CardContent>
                  <CardTitle>בר/בת מצווה</CardTitle>
                  <p>מופע מיוחד לאירועי בר/בת מצווה, משלב הומור מותאם לגיל עם תוכן מכבד ומתאים לכל המשפחה.</p>
                </CardContent>
              </PerformanceCard>
              
              <PerformanceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <CardImage>
                  <img src="/images/performances/IMG-20191113-WA0007.jpg" alt="מופע לבתי ספר וקייטנות" />
                </CardImage>
                <CardContent>
                  <CardTitle>בתי ספר וקייטנות</CardTitle>
                  <p>מופעים מותאמים לקבוצות גדולות של ילדים, מתאימים לאירועי סוף שנה, חגים ופעילויות מיוחדות.</p>
                </CardContent>
              </PerformanceCard>
            </PerformanceTypes>
            
            <CTASection>
              <CTAButton
                href="/performances"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                לכל המופעים
              </CTAButton>
            </CTASection>
          </Container>
        </Section>
        
        <Section>
          <Container>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              מה אומרים עלי
            </SectionTitle>
            
            <TestimonialCarousel testimonials={testimonials} />
            
            <CTASection>
              <CTAButton
                href="/testimonials"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                לכל ההמלצות
              </CTAButton>
            </CTASection>
          </Container>
        </Section>
        
        <Footer />
      </HomeContainer>
    </StageBackground>
  );
}
