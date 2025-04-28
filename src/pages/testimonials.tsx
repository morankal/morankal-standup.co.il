import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';

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

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const TestimonialItem = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 2rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 4rem;
    color: var(--secondary-gold);
    opacity: 0.3;
    position: absolute;
  }
  
  &::before {
    top: 10px;
    right: 20px;
  }
  
  &::after {
    bottom: -20px;
    left: 20px;
  }
`;

const TestimonialText = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const AuthorName = styled.h3`
  color: var(--secondary-gold);
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const EventType = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 0.5rem;
`;

const PageButton = styled.button<{ active: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? 'var(--primary-red)' : 'rgba(0, 0, 0, 0.7)'};
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary-red)' : 'rgba(0, 0, 0, 0.9)'};
  }
`;

const WhatsAppSection = styled.section`
  margin-top: 5rem;
`;

const WhatsAppTitle = styled(motion.h2)`
  text-align: center;
  color: var(--secondary-gold);
  margin-bottom: 3rem;
  font-size: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const WhatsAppGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const WhatsAppItem = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 10;
  
  // This would be dynamically generated from your testimonials data
  const testimonials = [
    {
      text: 'מורן הופיע ביום הולדת 9 של הבן שלי, היה מושלם...!! הילדים עפו, המבוגרים נקרעו, הכל היה מדויק, ומרגישים שהושקעה מחשבה רבה בכל הפרטים. מורן מקצועי ומצחיק. ממליצה, בחום ואהבה.',
      name: 'דנה',
      event: 'יום הולדת 9'
    },
    {
      text: 'מורן, היה מעולה, הילדים לא הפסיקו לצחוק, היתה בת מצווה בלתי נשכחת',
      name: 'סיון חכים',
      event: 'בת מצווה'
    },
    {
      text: 'היה מושלם! הזמנו את מורן ליומולדת 9, אחרי שחיפשנו המון זמן הפעלה בוגרת יותר שתתאים לגיל הזה ושתהיה בראש אחר. הילדים עפו עליו ולא הפסיקו לצחוק (וגם אנחנו 😉). ידע איך לזרום עם הילדים וגם איך להחזיק אותם בתוך ההפעלה עם המון סבלנות ומקצועיות.',
      name: 'אתי',
      event: 'יום הולדת 9'
    },
    {
      text: 'ליומולדת 10 חיפשנו דרך שונה ומיוחדת לחגוג עם כל הכיתה, והגענו למורן. היה מצחיק, כיף ומשחרר. מורן משקיע בחשיבה מתוכננת לפני, שופע הפתעות ומצויד בהמון סבלנות...! ילד יום ההולדת יצא מרוצה עד הגג והחברים חזרו הביתה שמחים עם תגובות מפרגנות.',
      name: 'דקלה',
      event: 'יום הולדת 10'
    },
    {
      text: 'חיפשנו סטנאפיסט ליום הולדת של הבת שלי ומהשיחה הראשונה הבנו שהולך להיות מעולה. הקשבנו לטיפים שהוא נתן לנו על מה כדאי להכין ולעשות לפני ובזמן האירוע, ובזכות מורן היתה לבת שלי יום הולדת מצחיקה, מהנה ובראש שקט.',
      name: 'טלי',
      event: 'יום הולדת'
    },
    {
      text: 'מורן פשוט אלוף! חגגנו יום הולדת 11 עם כל הכיתה, והילדים נהנו בטירוף. הבדיחות, הרגישות, והסבלנות של מורן הם משהו מיוחד. כמה צחקנו, וכמה שמחנו לראות את הילדים נהנים, ובמיוחד – הבן שלנו. תודה רבה על החוויה שנתת לנו! ממליצה בחום!',
      name: 'הדס',
      event: 'יום הולדת 11'
    },
    {
      text: 'מורן קל רצינו להודות לך על ההפעלה שעשית לאורי, היית אלוף. הילדים נהנו וצחקו והכי חשוב שאורי נהנה והיה לו ממש כיף שוב תודה לך.',
      name: 'מירה אדרי שוקה',
      event: 'יום הולדת לאורי'
    },
    {
      text: 'למורן קל היקר! רק רציתי להגיד לך שוב תודה, היית ממש כיפי וכולם נהנו מאוד… אפילו הגדולים. בהצלחה לך! אתה קסום.',
      name: 'שני קידר',
      event: 'יום הולדת'
    },
    {
      text: 'מורן קל בא ליום הולדת 8 שלי כולם צחקו ממנו נהנתי מאוד אני ממליץ לכם להזמין את מורן קל.',
      name: 'רותם',
      event: 'יום הולדת 8'
    },
    {
      text: 'ברצוני להמליץ על מורן קל סטנדאפיסט שהעביר לבני יום הולדת ה-12. חשוב לציין, כי בני – ילד עם צרכים מיוחדים. מורן הגיע לפני תחילת יום ההולדת כדי להכיר את בני. הוא יצר קשר טוב עם בני, שיחק איתו, דיבר והצחיק אותו. בנתיים המוזמנים התחילו להגיע ומורן לא נח לרגע, הוא הכניס אווירה נעימה, נוחה ובזכותו כל ילד שהגיע הרגיש בטוח ומשוחרר.',
      name: 'אלה מאריאל',
      event: 'מופע לילד בגיל 12'
    }
  ];
  
  // Generate more testimonials for pagination demo
  const allTestimonials = [...testimonials];
  for (let i = 0; i < 3; i++) {
    allTestimonials.push(...testimonials);
  }
  
  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage);
  
  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = allTestimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  // WhatsApp screenshots
  const whatsappImages = [
    '/images/whatsapp-testimonials/Screenshot_20250417_130932_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130915_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130859_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130838_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130821_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130701_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130446_WhatsApp.jpg',
    '/images/whatsapp-testimonials/Screenshot_20250417_130347_WhatsApp.jpg'
  ];
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  return (
    <StageBackground>
      <Head>
        <title>המלצות | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="המלצות על מורן קל, סטנדאפיסט לילדים. קראו מה אומרים הלקוחות על מופעי הסטנדאפ לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות." />
        <meta name="keywords" content="המלצות סטנדאפיסט לילדים, ביקורות מורן קל, המלצות יום הולדת, המלצות בר מצווה, המלצות סטנדאפ לילדים" />
        <link rel="canonical" href="https://www.morankal.co.il/testimonials" />
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
              המלצות
            </SectionTitle>
            
            <TestimonialsContainer>
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialItem
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <TestimonialAuthor>
                    <div>
                      <AuthorName>{testimonial.name}</AuthorName>
                      <EventType>{testimonial.event}</EventType>
                    </div>
                  </TestimonialAuthor>
                </TestimonialItem>
              ))}
            </TestimonialsContainer>
            
            <Pagination>
              {Array.from({ length: totalPages }, (_, i) => (
                <PageButton
                  key={i + 1}
                  active={currentPage === i + 1}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </PageButton>
              ))}
            </Pagination>
            
            <WhatsAppSection>
              <WhatsAppTitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                המלצות מהוואטסאפ
              </WhatsAppTitle>
              
              <WhatsAppGrid>
                {whatsappImages.map((image, index) => (
                  <WhatsAppItem
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image} alt={`המלצת וואטסאפ ${index + 1} - מורן קל סטנדאפיסט לילדים`} />
                  </WhatsAppItem>
                ))}
              </WhatsAppGrid>
            </WhatsAppSection>
            
            {/* Lightbox implementation would go here */}
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}
