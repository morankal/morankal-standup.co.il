import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useState } from 'react';
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

// Define the props for the page component
interface TestimonialsPageProps {
  testimonials: Testimonial[];
}

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

// Added class name for CSS targeting
const TestimonialText = styled.div.attrs({ className: 'testimonial-text' })`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  /* white-space: pre-wrap; will be added via GlobalStyles or CSS file */
`;

const TestimonialAuthor = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right; /* Align text to the right */
`;

const AuthorDetails = styled.div``; // Wrapper for author details

const AuthorName = styled.h3`
  color: var(--secondary-gold);
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const EventDetails = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 0.5rem;
  flex-wrap: wrap; /* Allow buttons to wrap on smaller screens */
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
  margin: 0.2rem; /* Add some margin for wrapped buttons */

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

// Fetch testimonials at build time
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data', 'testimonials.json');
  try {
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const testimonials: Testimonial[] = JSON.parse(jsonData);
    return {
      props: { testimonials },
    };
  } catch (error) {
    console.error('Error reading testimonials file:', error);
    return {
      props: { testimonials: [] }, // Return an empty array in case of error
    };
  }
}

export default function Testimonials({ testimonials }: TestimonialsPageProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 10;

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // WhatsApp screenshots (Keep existing logic, assuming these are still relevant)
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
                  key={index} // Consider using a unique ID from the data if available
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <TestimonialText>{testimonial.text}</TestimonialText>
                  <TestimonialAuthor>
                    <AuthorDetails>
                      {testimonial.author && <AuthorName>– {testimonial.author}{testimonial.location && `, מ${testimonial.location}`}</AuthorName>}
                      <EventDetails>
                        {testimonial.event_type}
                        {testimonial.event_location && `, ${testimonial.event_location}`}
                        {testimonial.year && `, ${testimonial.year}`}
                      </EventDetails>
                    </AuthorDetails>
                  </TestimonialAuthor>
                </TestimonialItem>
              ))}
            </TestimonialsContainer>

            {totalPages > 1 && (
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
            )}

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

            {/* TODO: Implement Lightbox for WhatsApp images */}
            {selectedImage && (
              <div /* Basic Lightbox Placeholder */
                style={{
                  position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex',
                  justifyContent: 'center', alignItems: 'center', zIndex: 1000
                }}
                onClick={() => setSelectedImage(null)}
              >
                <img src={selectedImage} alt="Selected WhatsApp Testimonial" style={{ maxHeight: '90%', maxWidth: '90%' }} />
              </div>
            )}
          </Container>
        </Section>

        <Footer />
      </PageContainer>
    </StageBackground>
  );
}

