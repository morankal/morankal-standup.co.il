import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import HeroSection from '@/components/HeroSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import SEO from '@/components/SEO';

const PageContainer = styled.div`
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

const CityContent = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 2rem;
  color: white;
  margin-bottom: 3rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const CityText = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.8;
  
  p {
    margin-bottom: 1.5rem;
  }
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

interface CityPageProps {
  city: string;
  cityHebrew: string;
  cityContent: {
    intro: string;
    description: string;
  };
}

export default function CityPage({ city, cityHebrew, cityContent }: CityPageProps) {
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
    }
  ];

  const title = `סטנדאפיסט לילדים ב${cityHebrew} | מורן קל - מופעי סטנדאפ לימי הולדת`;
  const description = `מורן קל - סטנדאפיסט לילדים מקצועי ב${cityHebrew} עם ניסיון של מעל 1,000 הופעות. מופעי סטנדאפ מצחיקים לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות ב${cityHebrew} והסביבה.`;
  const keywords = `סטנדאפיסט לילדים ב${cityHebrew}, קומיקאי לילדים ב${cityHebrew}, סטנדאפ לילדים ב${cityHebrew}, מופע סטנדאפ לילדים ב${cityHebrew}, מורן קל סטנדאפיסט ב${cityHebrew}, מופע מורן קל ב${cityHebrew}, מופע קומי לילדים ב${cityHebrew}`;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `סטנדאפיסט לילדים ב${cityHebrew} - מורן קל`,
    "serviceType": "מופע סטנדאפ לילדים",
    "provider": {
      "@type": "LocalBusiness",
      "name": "מורן קל - סטנדאפיסט לילדים",
      "image": "https://www.morankal.co.il/og-image.jpg",
      "telephone": "+972-53-627-7657",
      "email": "info@morankal.co.il"
    },
    "areaServed": {
      "@type": "City",
      "name": cityHebrew
    },
    "description": description,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "ILS"
      }
    }
  };

  return (
    <StageBackground>
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={`https://www.morankal.co.il/standup-birthday-kids-${city}`}
        structuredData={structuredData}
      />

      <PageContainer>
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
              סטנדאפיסט לילדים ב{cityHebrew}
            </SectionTitle>
            
            <CityContent>
              <CityText
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p>{cityContent.intro}</p>
                <p>{cityContent.description}</p>
                <p>אני מגיע לכל אזור {cityHebrew} והסביבה, ומציע מופעי סטנדאפ מותאמים אישית לכל אירוע. בין אם מדובר ביום הולדת, בר/בת מצווה, אירוע בבית ספר או קייטנה, אני מבטיח לכם חוויה מצחיקה ובלתי נשכחת.</p>
                <p>המופעים שלי משלבים הומור, משחקים והפעלות שמתאימים במיוחד לגילאי 7-13, עם התאמה אישית לילד/ה ולאופי האירוע. אני משקיע זמן רב בהכנה לפני כל מופע, לומד על הילד/ה ועל החברים שלהם, ומשלב את המידע הזה בהופעה.</p>
                <p>אז אם אתם מחפשים דרך מקורית ומצחיקה לחגוג יום הולדת או כל אירוע אחר ב{cityHebrew}, אתם מוזמנים ליצור איתי קשר ולהזמין מופע שישמח את הילדים ויהפוך את האירוע שלכם לבלתי נשכח!</p>
              </CityText>
            </CityContent>
            
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              מה אומרים עלי ב{cityHebrew}
            </SectionTitle>
            
            <TestimonialCarousel testimonials={testimonials} />
            
            <CTASection>
              <CTAButton
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                הזמינו מופע ב{cityHebrew} עכשיו
              </CTAButton>
            </CTASection>
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Define the city slugs for which we'll pre-render pages
  const cities = [
    'tel-aviv',
    'jerusalem',
    'haifa',
    'center',
    'north',
    'south',
    'sharon',
    'gush-dan'
  ];

  const paths = cities.map((city) => ({
    params: { city },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const city = params?.city as string;
  
  // Map city slugs to Hebrew names
  const cityMap: { [key: string]: string } = {
    'tel-aviv': 'תל אביב',
    'jerusalem': 'ירושלים',
    'haifa': 'חיפה',
    'center': 'מרכז הארץ',
    'north': 'צפון הארץ',
    'south': 'דרום הארץ',
    'sharon': 'השרון',
    'gush-dan': 'גוש דן'
  };

  // Map city slugs to content
  const contentMap: { [key: string]: { intro: string; description: string } } = {
    'tel-aviv': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים בתל אביב והסביבה.`,
      description: `תל אביב, עיר ללא הפסקה, היא מקום מושלם לחגוג ימי הולדת וארועים מיוחדים. כסטנדאפיסט לילדים בתל אביב, אני מביא את הבידור והצחוק לכל פינה בעיר - מצפון תל אביב ועד דרומה, מהמרכז ועד שכונות המגורים.`
    },
    'jerusalem': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים בירושלים והסביבה.`,
      description: `ירושלים, עיר הבירה של ישראל, היא מקום מיוחד עם אווירה ייחודית. כסטנדאפיסט לילדים בירושלים, אני מתאים את המופעים שלי לאופי המיוחד של העיר ותושביה, ומביא שמחה וצחוק לכל אירוע.`
    },
    'haifa': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים בחיפה והסביבה.`,
      description: `חיפה, עיר הכרמל, היא עיר מגוונת עם אוכלוסייה מכל המגזרים. כסטנדאפיסט לילדים בחיפה, אני מביא את הבידור והצחוק לכל שכונות העיר, מהכרמל ועד לקריות הסמוכות.`
    },
    'center': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים במרכז הארץ.`,
      description: `מרכז הארץ, הלב הפועם של ישראל, כולל ערים רבות כמו פתח תקווה, ראשון לציון, רחובות, נס ציונה ועוד. כסטנדאפיסט לילדים במרכז הארץ, אני מגיע לכל עיר ויישוב באזור ומביא איתי שמחה וצחוק.`
    },
    'north': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים בצפון הארץ.`,
      description: `צפון הארץ, עם הנופים המרהיבים והאווירה המיוחדת, הוא מקום נהדר לחגוג אירועים. כסטנדאפיסט לילדים בצפון הארץ, אני מגיע לכל יישוב - מעכו וכרמיאל ועד לקיבוצים ומושבים בגליל ובגולן.`
    },
    'south': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים בדרום הארץ.`,
      description: `דרום הארץ, מאשדוד ואשקלון ועד באר שבע ואילת, הוא אזור מגוון עם אוכלוסייה חמה ומקבלת. כסטנדאפיסט לילדים בדרום הארץ, אני מביא את השמחה והצחוק לכל יישוב באזור.`
    },
    'sharon': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים באזור השרון.`,
      description: `השרון, אזור יפהפה במרכז הארץ, כולל ערים כמו הרצליה, רעננה, כפר סבא, הוד השרון ונתניה. כסטנדאפיסט לילדים בשרון, אני מגיע לכל עיר ויישוב באזור ומביא איתי בידור איכותי לכל אירוע.`
    },
    'gush-dan': {
      intro: `מורן קל, סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות, מציע מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת ואירועים בגוש דן.`,
      description: `גוש דן, הכולל את תל אביב והערים הסובבות אותה כמו רמת גן, גבעתיים, בני ברק, חולון ובת ים, הוא אזור תוסס ומלא חיים. כסטנדאפיסט לילדים בגוש דן, אני מביא את הבידור והצחוק לכל פינה באזור המרכזי של ישראל.`
    }
  };

  return {
    props: {
      city,
      cityHebrew: cityMap[city],
      cityContent: contentMap[city]
    },
  };
};
