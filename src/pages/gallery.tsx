import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import GalleryGrid from '@/components/GalleryGrid';
import fs from 'fs';
import path from 'path';

// Define the interface for an image object
interface GalleryImage {
  src: string;
  alt: string;
  category?: string; // Optional category for filtering
}

// Define the props for the page component
interface GalleryPageProps {
  galleryImages: GalleryImage[];
  categories: string[];
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

// Function to generate alt text (can be improved)
const generateAltText = (filename: string): string => {
  // Basic alt text generation, replace underscores/hyphens with spaces
  const nameWithoutExt = filename.split('.').slice(0, -1).join('.');
  const readableName = nameWithoutExt.replace(/[-_]/g, ' ');
  // Add context
  return `תמונה מהופעה של מורן קל - ${readableName}`;
};

// Fetch images at build time
export async function getStaticProps() {
  const performancesDir = path.join(process.cwd(), 'public', 'images', 'performances');
  const whatsappDir = path.join(process.cwd(), 'public', 'images', 'whatsapp-testimonials');
  let allImages: GalleryImage[] = [];
  const categoriesSet = new Set<string>();

  try {
    // Read WhatsApp testimonial images first
    const whatsappFiles = fs.readdirSync(whatsappDir);
    const whatsappImages = whatsappFiles
      .filter(file => /\\.jpg|jpeg|png|gif|webp$/i.test(file)) // Basic image filter
      .map(file => ({
        src: `/images/whatsapp-testimonials/${file}`,
        alt: `המלצת וואטסאפ - ${file}`, // Specific alt text for WhatsApp images
        category: 'המלצות וואטסאפ' // Assign a specific category
      }));
    allImages = allImages.concat(whatsappImages);
    if (whatsappImages.length > 0) {
        categoriesSet.add('המלצות וואטסאפ');
    }

    // Read performance images
    const performanceFiles = fs.readdirSync(performancesDir);
    const performanceImages = performanceFiles
      .filter(file => /\[.jpg|jpeg|png|gif|webp]$/i.test(file)) // Basic image filter
      .map(file => {
          // Basic category assignment based on filename (example)
          let category = 'הופעות'; // Default category
          if (file.toLowerCase().includes('birthday') || file.toLowerCase().includes('יום הולדת')) category = 'ימי הולדת';
          if (file.toLowerCase().includes('mitzva') || file.toLowerCase().includes('מצווה')) category = 'בר/בת מצווה';
          if (file.toLowerCase().includes('school') || file.toLowerCase().includes('בית ספר')) category = 'בתי ספר';
          if (file.toLowerCase().includes('camp') || file.toLowerCase().includes('קייטנה')) category = 'קייטנות';
          categoriesSet.add(category);
          return {
              src: `/images/performances/${file}`,
              alt: generateAltText(file),
              category: category
          };
      });
    allImages = allImages.concat(performanceImages);

  } catch (error) {
    console.error('Error reading gallery images:', error);
    // Return empty array or default images in case of error
    allImages = [];
  }

  const categories = Array.from(categoriesSet);
  // Ensure 'המלצות וואטסאפ' is first if it exists
  if (categories.includes('המלצות וואטסאפ')) {
      categories.sort((a, b) => a === 'המלצות וואטסאפ' ? -1 : b === 'המלצות וואטסאפ' ? 1 : 0);
  }

  return {
    props: {
      galleryImages: allImages,
      categories: categories,
    },
  };
}

export default function Gallery({ galleryImages, categories }: GalleryPageProps) {

  return (
    <StageBackground>
      <Head>
        <title>גלריית תמונות | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="גלריית תמונות מהופעות של מורן קל, סטנדאפיסט לילדים. צפו בתמונות מימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות." />
        <meta name="keywords" content="גלריית תמונות, סטנדאפיסט לילדים, מורן קל, תמונות מופעים, תמונות ימי הולדת, תמונות בר מצווה" />
        <link rel="canonical" href="https://www.morankal.co.il/gallery" />
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
              גלריית תמונות
            </SectionTitle>

            {/* Pass the dynamically loaded images and categories to the grid */}
            <GalleryGrid images={galleryImages} categories={categories} />
          </Container>
        </Section>

        <Footer />
      </PageContainer>
    </StageBackground>
  );
}

