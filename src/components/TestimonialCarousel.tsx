import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface TestimonialCarouselProps {
  testimonials: {
    name: string;
    text: string;
    event?: string;
  }[];
}

const CarouselContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TestimonialSlide = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 2rem;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  margin: 0 3rem;
  
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  color: var(--secondary-gold);
  font-size: 2.5rem;
  opacity: 0.5;
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

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    background-color: var(--primary-red);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 0;
`;

const NextButton = styled(NavigationButton)`
  right: 0;
`;

const Indicators = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
`;

const Indicator = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? 'var(--primary-red)' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary-red)' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  return (
    <CarouselContainer>
      <TestimonialSlide
        key={activeIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <QuoteIcon>
          <FaQuoteRight />
        </QuoteIcon>
        <TestimonialText>{testimonials[activeIndex].text}</TestimonialText>
        <TestimonialAuthor>
          <div>
            <AuthorName>{testimonials[activeIndex].name}</AuthorName>
            {testimonials[activeIndex].event && (
              <EventType>{testimonials[activeIndex].event}</EventType>
            )}
          </div>
        </TestimonialAuthor>
      </TestimonialSlide>
      
      <PrevButton onClick={handlePrev} disabled={testimonials.length <= 1}>
        <FaChevronRight />
      </PrevButton>
      
      <NextButton onClick={handleNext} disabled={testimonials.length <= 1}>
        <FaChevronLeft />
      </NextButton>
      
      <Indicators>
        {testimonials.map((_, index) => (
          <Indicator 
            key={index} 
            active={index === activeIndex} 
            onClick={() => setActiveIndex(index)} 
          />
        ))}
      </Indicators>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
