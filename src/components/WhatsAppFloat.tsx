import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppFloatProps {
  phoneNumber: string;
}

const WhatsAppButton = styled.a`
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  left: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    left: 20px;
  }
`;

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ phoneNumber }) => {
  const formattedNumber = phoneNumber.startsWith('972') ? phoneNumber : `972${phoneNumber.replace(/^0/, '')}`;
  
  return (
    <WhatsAppButton 
      href={`https://wa.me/${formattedNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="צור קשר בוואטסאפ"
    >
      <FaWhatsapp />
    </WhatsAppButton>
  );
};

export default WhatsAppFloat;
