import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StageBackground from '@/components/StageBackground';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const FormTitle = styled.h2`
  color: var(--secondary-gold);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: var(--font-body);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-gold);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: var(--font-body);
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--secondary-gold);
  }
`;

const SubmitButton = styled(motion.button)`
  background-color: var(--primary-red);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  font-size: 1.1rem;
  
  &:hover {
    background-color: #b80000;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  color: white;
`;

const InfoTitle = styled.h2`
  color: var(--secondary-gold);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: var(--secondary-gold);
    margin-left: 1rem;
  }
`;

const InfoText = styled.div`
  h3 {
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
  }
  
  p {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const WhatsAppButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #25d366;
  color: white;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 600;
  margin-top: 2rem;
  text-decoration: none;
  
  svg {
    margin-left: 0.8rem;
    font-size: 1.5rem;
  }
  
  &:hover {
    background-color: #1da851;
  }
`;

const MapContainer = styled.div`
  margin-top: 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export default function Contact() {
  return (
    <StageBackground>
      <Head>
        <title>צור קשר | מורן קל - סטנדאפיסט לילדים</title>
        <meta name="description" content="צרו קשר עם מורן קל, סטנדאפיסט לילדים. הזמינו מופע סטנדאפ ליום הולדת, בר/בת מצווה, אירוע בבית ספר או קייטנה." />
        <meta name="keywords" content="צור קשר מורן קל, הזמנת סטנדאפיסט לילדים, הזמנת מופע סטנדאפ, סטנדאפיסט לאירועים, סטנדאפיסט ליום הולדת" />
        <link rel="canonical" href="https://www.morankal.co.il/contact" />
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
              צור קשר
            </SectionTitle>
            
            <ContactContent>
              <ContactForm
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <FormTitle>השאירו פרטים ואחזור אליכם בהקדם</FormTitle>
                
                <FormGroup>
                  <Label htmlFor="name">שם מלא</Label>
                  <Input type="text" id="name" name="name" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">טלפון</Label>
                  <Input type="tel" id="phone" name="phone" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="email">אימייל</Label>
                  <Input type="email" id="email" name="email" required />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="event">סוג האירוע</Label>
                  <Input type="text" id="event" name="event" placeholder="יום הולדת, בר/בת מצווה, אירוע בבית ספר..." />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="message">הודעה</Label>
                  <TextArea id="message" name="message" required></TextArea>
                </FormGroup>
                
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  שליחה
                </SubmitButton>
              </ContactForm>
              
              <ContactInfo
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <InfoTitle>פרטי התקשרות</InfoTitle>
                
                <InfoItem>
                  <InfoText>
                    <h3>טלפון</h3>
                    <p>053-6277657</p>
                  </InfoText>
                  <FaPhone />
                </InfoItem>
                
                <InfoItem>
                  <InfoText>
                    <h3>אימייל</h3>
                    <p>info@morankal.co.il</p>
                  </InfoText>
                  <FaEnvelope />
                </InfoItem>
                
                <InfoItem>
                  <InfoText>
                    <h3>אזורי פעילות</h3>
                    <p>כל הארץ - מרכז, צפון, דרום, ירושלים, השרון וגוש דן</p>
                  </InfoText>
                  <FaMapMarkerAlt />
                </InfoItem>
                
                <WhatsAppButton
                  href="https://wa.me/972536277657"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                  צרו קשר בוואטסאפ
                </WhatsAppButton>
              </ContactInfo>
            </ContactContent>
            
            <MapContainer>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108169.95438557012!2d34.7462125!3d32.0879782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1619099477566!5m2!1sen!2sil" 
                allowFullScreen 
                loading="lazy"
                title="מפת אזורי פעילות - מורן קל סטנדאפיסט לילדים"
              ></iframe>
            </MapContainer>
          </Container>
        </Section>
        
        <Footer />
      </PageContainer>
    </StageBackground>
  );
}
