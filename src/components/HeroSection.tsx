import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroSectionProps {
  videoUrl: string;
}

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding-top: 80px; /* Account for header */
  overflow: hidden;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 5;
  max-width: 800px;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  backdrop-filter: blur(5px);
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--secondary-gold);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background-color: var(--primary-red);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #b80000;
  }
`;

const ExperienceBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: var(--secondary-gold);
  color: var(--primary-black);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
  z-index: 5;
  
  @media (max-width: 768px) {
    position: relative;
    top: auto;
    right: auto;
    margin-bottom: 1rem;
  }
`;

const HeroSection: React.FC<HeroSectionProps> = ({ videoUrl }) => {
  return (
    <HeroContainer>
      <VideoBackground>
        <iframe
          src={`${videoUrl}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0`}
          title="Moran Kal Showreel"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoBackground>
      
      <ExperienceBadge>מעל 1,000 הופעות | 10+ שנות ניסיון</ExperienceBadge>
      
      <ContentOverlay>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          מורן קל - סטנדאפיסט לילדים
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          מופעי סטנדאפ מצחיקים ומקוריים לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות
        </Subtitle>
        
        <CTAButton
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          הזמינו מופע עכשיו
        </CTAButton>
      </ContentOverlay>
    </HeroContainer>
  );
};

export default HeroSection;
