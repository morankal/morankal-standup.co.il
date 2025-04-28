import styled from 'styled-components';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--primary-black);
  color: white;
  padding: 3rem 0 2rem;
  position: relative;
  z-index: 10;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h3`
  color: var(--secondary-gold);
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
`;

const FooterLink = styled.a`
  color: white;
  display: block;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-gold);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    margin-left: 0.8rem;
    color: var(--secondary-gold);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-gold);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: var(--primary-red);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #b80000;
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>מורן קל</FooterTitle>
          <p>סטנדאפיסט לילדים עם ניסיון של מעל 10 שנים ו-1,000 הופעות.</p>
          <p>מופעי סטנדאפ לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות.</p>
          <CTAButton href="/contact">הזמינו מופע עכשיו</CTAButton>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>ניווט מהיר</FooterTitle>
          <Link href="/" passHref legacyBehavior>
            <FooterLink>דף הבית</FooterLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <FooterLink>אודות</FooterLink>
          </Link>
          <Link href="/performances" passHref legacyBehavior>
            <FooterLink>המופעים שלי</FooterLink>
          </Link>
          <Link href="/gallery" passHref legacyBehavior>
            <FooterLink>גלריית תמונות</FooterLink>
          </Link>
          <Link href="/videos" passHref legacyBehavior>
            <FooterLink>גלריית וידאו</FooterLink>
          </Link>
          <Link href="/testimonials" passHref legacyBehavior>
            <FooterLink>המלצות</FooterLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <FooterLink>צור קשר</FooterLink>
          </Link>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>צור קשר</FooterTitle>
          <ContactItem>
            <span>053-6277657</span>
            <FaPhone />
          </ContactItem>
          <ContactItem>
            <span>info@morankal.co.il</span>
            <FaEnvelope />
          </ContactItem>
          <ContactItem>
            <span>כל הארץ</span>
            <FaWhatsapp />
          </ContactItem>
          
          <SocialLinks>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© {currentYear} מורן קל - סטנדאפיסט לילדים. כל הזכויות שמורות.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
