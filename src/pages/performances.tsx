import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBirthdayCake, FaGraduationCap, FaSchool, FaCampground } from 'react-icons/fa';

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

const PerformanceTypes = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  margin-top: 3rem;
`;

const PerformanceItem = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const PerformanceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PerformanceImage = styled.div`
  height: 400px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PerformanceInfo = styled.div`
  padding: 2rem;
  color: white;
`;

const PerformanceTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    color: var(--secondary-gold);
    font-size: 1.8rem;
    margin: 0;
    margin-right: 1rem;
  }
  
  svg {
    font-size: 2rem;
    color: var(--secondary-gold);
  }
`;

const PerformanceDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
`;

const PerformanceVideo = styled.div`
  margin-top: 2rem;
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

const FAQSection = styled.div`
  margin-top: 2rem;
`;

const FAQTitle = styled.h3`
  color: var(--secondary-gold);
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
`;

const FAQQuestion = styled.h4`
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const FAQAnswer = styled.p`
  color: rgba(255, 255, 255, 0.8);
`;

export default function Performances() {
  return (
    <StageBackground>
      <Head>
        <title>המופעים שלי | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="מופעי סטנדאפ לילדים של מורן קל. ימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות. מופעים מצחיקים ומותאמים אישית לכל אירוע." />
        <meta name="keywords" content="מופעי סטנדאפ לילדים, סטנדאפ ליום הולדת, סטנדאפ לבר מצווה, סטנדאפ לבת מצווה, מופע בבית ספר, מופע בקייטנה" />
        <link rel="canonical" href="https://www.morankal.co.il/performances" />
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
              המופעים שלי
            </SectionTitle>
            
            <PerformanceTypes>
              <PerformanceItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PerformanceContent>
                  <PerformanceImage>
                    <img src="/images/performances/IMG-20191025-WA0026.jpg" alt="מופע יום הולדת לילדים" />
                  </PerformanceImage>
                  
                  <PerformanceInfo>
                    <PerformanceTitle>
                      <FaBirthdayCake />
                      <h2>ימי הולדת</h2>
                    </PerformanceTitle>
                    
                    <PerformanceDescription>
                      <p>מופע סטנדאפ מצחיק ומותאם אישית לילד/ה החוגגים. המופע משלב הומור, משחקים והפעלות שמתאימים במיוחד לגילאי 7-13.</p>
                      
                      <p>לפני כל מופע אני לומד על הילד/ה ועל החברים שלהם, ומשלב את המידע הזה בהופעה כדי ליצור חוויה אישית ובלתי נשכחת.</p>
                      
                      <p>המופע כולל גם הפתעות מיוחדות, כמו קצפת בפנים (למי שרוצה) ועוד פינוקים שהילדים אוהבים.</p>
                    </PerformanceDescription>
                    
                    <FAQSection>
                      <FAQTitle>שאלות נפוצות</FAQTitle>
                      
                      <FAQItem>
                        <FAQQuestion>לאיזה גיל מתאים המופע?</FAQQuestion>
                        <FAQAnswer>המופע מתאים לגילאי 7-13, עם התאמות לפי הגיל הספציפי.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>כמה זמן נמשך המופע?</FAQQuestion>
                        <FAQAnswer>המופע נמשך כשעה וחצי, אך ניתן להתאים את האורך לפי הצורך.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>האם צריך להכין משהו מיוחד?</FAQQuestion>
                        <FAQAnswer>לא צריך להכין דבר, אני מגיע עם כל הציוד הנדרש. אשמח לקבל מידע על הילד/ה והחברים לפני המופע.</FAQAnswer>
                      </FAQItem>
                    </FAQSection>
                  </PerformanceInfo>
                </PerformanceContent>
                
                <PerformanceVideo>
                  <iframe
                    src="https://www.youtube.com/embed/cF4jdl9Ogio"
                    title="מופע יום הולדת - מורן קל"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </PerformanceVideo>
              </PerformanceItem>
              
              <PerformanceItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PerformanceContent>
                  <PerformanceImage>
                    <img src="/images/performances/IMG-20191101-WA0008.jpg" alt="מופע בר/בת מצווה" />
                  </PerformanceImage>
                  
                  <PerformanceInfo>
                    <PerformanceTitle>
                      <FaGraduationCap />
                      <h2>בר/בת מצווה</h2>
                    </PerformanceTitle>
                    
                    <PerformanceDescription>
                      <p>מופע מיוחד לאירועי בר/בת מצווה, המשלב הומור מותאם לגיל עם תוכן מכבד ומתאים לכל המשפחה.</p>
                      
                      <p>המופע כולל התייחסות אישית לחתן/כלת השמחה, עם בדיחות ומערכונים שמתאימים לאופי האירוע.</p>
                      
                      <p>ניתן לשלב גם אלמנטים מסורתיים ודתיים בהתאם לאופי המשפחה והאירוע.</p>
                    </PerformanceDescription>
                    
                    <FAQSection>
                      <FAQTitle>שאלות נפוצות</FAQTitle>
                      
                      <FAQItem>
                        <FAQQuestion>האם המופע מתאים לאירוע דתי?</FAQQuestion>
                        <FAQAnswer>כן, המופע מותאם לפי אופי האירוע והמשפחה, כולל אירועים דתיים.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>האם ניתן לשלב את המופע באירוע גדול?</FAQQuestion>
                        <FAQAnswer>בהחלט, המופע יכול להשתלב כחלק מאירוע גדול יותר, בתיאום מראש.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>כמה זמן לפני האירוע כדאי להזמין?</FAQQuestion>
                        <FAQAnswer>מומלץ להזמין לפחות חודש מראש, במיוחד בעונות השיא.</FAQAnswer>
                      </FAQItem>
                    </FAQSection>
                  </PerformanceInfo>
                </PerformanceContent>
                
                <PerformanceVideo>
                  <iframe
                    src="https://www.youtube.com/embed/hxm_QYDPgBQ"
                    title="מופע בר/בת מצווה - מורן קל"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </PerformanceVideo>
              </PerformanceItem>
              
              <PerformanceItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PerformanceContent>
                  <PerformanceImage>
                    <img src="/images/performances/IMG-20191113-WA0007.jpg" alt="מופע בבתי ספר" />
                  </PerformanceImage>
                  
                  <PerformanceInfo>
                    <PerformanceTitle>
                      <FaSchool />
                      <h2>בתי ספר</h2>
                    </PerformanceTitle>
                    
                    <PerformanceDescription>
                      <p>מופעים מותאמים לקבוצות גדולות של ילדים, מתאימים לאירועי סוף שנה, חגים ופעילויות מיוחדות בבתי ספר.</p>
                      
                      <p>המופע משלב הומור, מסרים חינוכיים והפעלות שמתאימות לקבוצות גדולות, תוך שמירה על עניין ומעורבות של כל הילדים.</p>
                      
                      <p>ניתן להתאים את התוכן לנושא ספציפי או לערכים שבית הספר מעוניין להדגיש.</p>
                    </PerformanceDescription>
                    
                    <FAQSection>
                      <FAQTitle>שאלות נפוצות</FAQTitle>
                      
                      <FAQItem>
                        <FAQQuestion>לכמה ילדים מתאים המופע?</FAQQuestion>
                        <FAQAnswer>המופע מתאים לקבוצות של עד 200 ילדים, בהתאם לגודל המקום.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>האם ניתן להתאים את המופע לנושא מסוים?</FAQQuestion>
                        <FAQAnswer>כן, ניתן להתאים את המופע לנושאים כמו חגים, ערכים חברתיים, או כל נושא אחר שבית הספר מעוניין בו.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>מה הדרישות הטכניות?</FAQQuestion>
                        <FAQAnswer>נדרש חלל מתאים, מערכת הגברה בסיסית (שאפשר להביא במידת הצורך), ושקע חשמל.</FAQAnswer>
                      </FAQItem>
                    </FAQSection>
                  </PerformanceInfo>
                </PerformanceContent>
                
                <PerformanceVideo>
                  <iframe
                    src="https://www.youtube.com/embed/cF4jdl9Ogio"
                    title="מופע בבית ספר - מורן קל"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </PerformanceVideo>
              </PerformanceItem>
              
              <PerformanceItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <PerformanceContent>
                  <PerformanceImage>
                    <img src="/images/performances/IMG-20191101-WA0014.jpg" alt="מופע בקייטנות" />
                  </PerformanceImage>
                  
                  <PerformanceInfo>
                    <PerformanceTitle>
                      <FaCampground />
                      <h2>קייטנות</h2>
                    </PerformanceTitle>
                    
                    <PerformanceDescription>
                      <p>מופעים מיוחדים לקייטנות וימי כיף, המשלבים הומור, משחקים והפעלות שמתאימים לאווירת החופש והכיף.</p>
                      
                      <p>המופע מותאם לגילאים שונים ולמספר משתתפים גדול, עם דגש על שיתוף פעולה ויצירת חוויה משותפת.</p>
                      
                      <p>ניתן לשלב גם אלמנטים של תחרויות, משחקי צוות ופעילויות שמתאימות במיוחד לאווירת הקייטנה.</p>
                    </PerformanceDescription>
                    
                    <FAQSection>
                      <FAQTitle>שאלות נפוצות</FAQTitle>
                      
                      <FAQItem>
                        <FAQQuestion>האם המופע מתאים לקייטנות בכל הגילאים?</FAQQuestion>
                        <FAQAnswer>המופע מותאם בעיקר לגילאי 7-13, אך ניתן להתאים גם לקבוצות מעורבות.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>האם ניתן לקיים את המופע בחוץ?</FAQQuestion>
                        <FAQAnswer>כן, בהחלט. המופע יכול להתקיים גם בחוץ, בתנאי שיש צל ואפשרות להגברה.</FAQAnswer>
                      </FAQItem>
                      
                      <FAQItem>
                        <FAQQuestion>כמה זמן נמשך המופע?</FAQQuestion>
                        <FAQAnswer>המופע לקייטנות נמשך בין שעה לשעה וחצי, בהתאם לצרכי הקייטנה.</FAQAnswer>
                      </FAQItem>
                    </FAQSection>
                  </PerformanceInfo>
                </PerformanceContent>
                
                <PerformanceVideo>
                  <iframe
                    src="https://www.youtube.com/embed/hxm_QYDPgBQ"
                    title="מופע בקייטנה - מורן קל"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </PerformanceVideo>
              </PerformanceItem>
            </PerformanceTypes>
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}
