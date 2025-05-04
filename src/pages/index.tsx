import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import HeroSection from '@/components/HeroSection';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import NewsArticleSection from '@/components/NewsArticleSection'; // Import the new component
import { motion } from 'framer-motion';
import styled from 'styled-components';
import path from 'path';
import fs from 'fs/promises';

// Define the interface for a testimonial based on the JSON structure
interface Testimonial {
  rating: number;
  text: string;
  author: string | null;
  location: string | null;
  event_type: string | null;
  event_location: string | null;
  year: string | null;
}

// Define the interface for the props expected by TestimonialCarousel
interface CarouselTestimonial {
  name: string;
  text: string;
  event?: string;
}

// Define the props for the page component
interface HomePageProps {
  carouselTestimonials: CarouselTestimonial[]; // Use the mapped type
}

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
  text-decoration: none; // Ensure no underline

  &:hover {
    background-color: #b80000;
  }
`;

// Fetch testimonials at build time
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'testimonials.json');
  let carouselTestimonials: CarouselTestimonial[] = [];
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const allTestimonials: Testimonial[] = JSON.parse(jsonData);
    // Select a few testimonials for the carousel (e.g., first 5)
    const selectedTestimonials = allTestimonials.slice(0, 5);

    // Map the data to the structure expected by TestimonialCarousel
    carouselTestimonials = selectedTestimonials.map(t => ({
      name: t.author || 'Anonymous', // Use author as name, provide fallback
      text: t.text,
      event: t.event_type || undefined // Use event_type as event
    }));

  } catch (error) {
    console.error('Error reading testimonials file for homepage:', error);
    // Use fallback or empty array if file read fails
    carouselTestimonials = [];
  }
  return {
    props: { carouselTestimonials }, // Return the mapped data
  };
}

export default function Home({ carouselTestimonials }: HomePageProps) {

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

            {/* Pass the correctly mapped testimonials to the carousel */}
            <TestimonialCarousel testimonials={carouselTestimonials} />

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

        {/* Add the new News Article Section here */}
        <NewsArticleSection />

        <Footer />
      </HomeContainer>
    </StageBackground>
  );
}

