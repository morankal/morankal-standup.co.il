import styled from 'styled-components';
import { FaMicrophone } from 'react-icons/fa';

interface StageBackgroundProps {
  children: React.ReactNode;
}

const StageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--primary-black);
  overflow: hidden;
`;

const RedCurtain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-red);
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    background-image: 
      repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 20px,
        rgba(0, 0, 0, 0.2) 20px,
        rgba(0, 0, 0, 0.2) 40px
      );
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
`;

const CurtainFolds = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 50px,
      rgba(0, 0, 0, 0.1) 50px,
      rgba(0, 0, 0, 0.1) 100px
    );
  z-index: 1;
`;

const Spotlight = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  filter: blur(20px);
  opacity: 0.7;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
`;

const Microphone = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--secondary-gold);
  font-size: 3rem;
  z-index: 5;
`;

const StageBackground: React.FC<StageBackgroundProps> = ({ children }) => {
  return (
    <StageContainer>
      <RedCurtain />
      <CurtainFolds />
      <Spotlight />
      <Microphone>
        <FaMicrophone />
      </Microphone>
      <ContentWrapper>{children}</ContentWrapper>
    </StageContainer>
  );
};

export default StageBackground;
