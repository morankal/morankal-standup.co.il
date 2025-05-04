import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 0;
  background-color: rgba(0, 0, 0, 0.1); // Slightly different background for distinction
  position: relative;
  z-index: 10;
`;

const Container = styled.div`
  max-width: 1000px; // Slightly narrower container for article feel
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: var(--secondary-gold);
  margin-bottom: 3rem;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  color: white;
  text-align: center;
`;

const ArticleText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  max-width: 800px;
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
`;

const ArticleImage = styled(motion.img)`
  max-width: 45%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 80%;
  }

   @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const NewsArticleSection: React.FC = () => {
  return (
    <Section>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          כתבה בשבעה ימים
        </SectionTitle>
        <ArticleContent>
          {/* Optional: Add some introductory text here if needed */}
          {/* <ArticleText
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
          >
             טקסט קצר על הכתבה...
          </ArticleText> */}
          <ImageContainer>
            <ArticleImage
              src="/images/performances/20190920_112332.jpg"
              alt="תמונה מכתבה בשבעה ימים 1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <ArticleImage
              src="/images/performances/IMG-20190920-WA0004.jpg"
              alt="תמונה מכתבה בשבעה ימים 2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </ImageContainer>
        </ArticleContent>
      </Container>
    </Section>
  );
};

export default NewsArticleSection;

