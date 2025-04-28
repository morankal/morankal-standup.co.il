import styled from 'styled-components';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled.div`
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--secondary-gold);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const NavMenu = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: var(--primary-black);
    padding: 4rem 2rem;
    transition: right 0.3s ease;
    z-index: 200;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const NavLink = styled.a`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--secondary-gold);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 300;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 150;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>מורן קל</Logo>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        
        <NavMenu isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <Link href="/" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>דף הבית</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>אודות</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/performances" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>המופעים שלי</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/gallery" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>גלריית תמונות</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/videos" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>גלריית וידאו</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/testimonials" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>המלצות</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact" passHref legacyBehavior>
                <NavLink onClick={closeMenu}>צור קשר</NavLink>
              </Link>
            </NavItem>
          </NavList>
        </NavMenu>
      </HeaderContent>
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </HeaderContainer>
  );
};

export default Header;
