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
  // Category is removed as per new requirement for a single gallery
}

// Define the props for the page component
interface GalleryPageProps {
  galleryImages: GalleryImage[];
  // Categories are removed
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
  const nameWithoutExt = filename.split('.').slice(0, -1).join('.');
  const readableName = nameWithoutExt.replace(/[-_]/g, ' ');
  return `תמונה מהופעה של מורן קל - ${readableName}`;
};

// Fetch images at build time
export async function getStaticProps() {
  const galleryDir = path.join(process.cwd(), 'public', 'images', 'gallery_new');
  let allImages: GalleryImage[] = [];

  try {
    const imageFiles = fs.readdirSync(galleryDir);
    allImages = imageFiles
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)) // Basic image filter
      .map(file => ({
        src: `/images/gallery_new/${file}`,
        alt: generateAltText(file),
      }));
  } catch (error) {
    console.error('Error reading gallery images from gallery_new:', error);
    allImages = []; // Return empty array or default images in case of error
  }

  return {
    props: {
      galleryImages: allImages,
      // Categories are no longer passed
    },
  };
}

export default function Gallery({ galleryImages }: GalleryPageProps) {
  return (
    <StageBackground>
      <Head>
        <title>גלריית תמונות | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="גלריית תמונות מהופעות של מורן קל, סטנדאפיסט לילדים." />
        <meta name="keywords" content="גלריית תמונות, סטנדאפיסט לילדים, מורן קל, תמונות מופעים" />
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

            {/* Pass only the dynamically loaded images to the grid */}
            {/* The GalleryGrid component might need adjustment if it still expects a categories prop */}
            <GalleryGrid images={galleryImages} />
          </Container>
        </Section>

        <Footer />
      </PageContainer>
    </StageBackground>
  );
}

