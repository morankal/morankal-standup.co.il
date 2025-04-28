import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-red: #D90000;
    --primary-black: #000000;
    --secondary-gold: #FFD700;
    --secondary-green: #00A651;
    --text-color: #333333;
    --background-light: #f5f5f5;
    --font-heading: 'Rubik', sans-serif;
    --font-body: 'Assistant', sans-serif;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    direction: rtl;
    font-size: 16px;
  }

  body {
    font-family: var(--font-body);
    color: var(--text-color);
    background-color: var(--background-light);
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  a {
    color: var(--primary-red);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--secondary-gold);
    }
  }

  button {
    cursor: pointer;
    font-family: var(--font-body);
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 4rem 0;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
    border: none;
    
    &.btn-primary {
      background-color: var(--primary-red);
      color: white;
      
      &:hover {
        background-color: darken(var(--primary-red), 10%);
      }
    }
    
    &.btn-secondary {
      background-color: var(--secondary-gold);
      color: var(--primary-black);
      
      &:hover {
        background-color: darken(var(--secondary-gold), 10%);
      }
    }
  }

  .whatsapp-float {
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
  }

  /* Stage theme styles */
  .stage-background {
    background-color: var(--primary-black);
    position: relative;
    overflow: hidden;
  }

  .red-curtain {
    background-color: var(--primary-red);
    background-image: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .spotlight {
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
    filter: blur(20px);
    opacity: 0.7;
    z-index: -1;
  }

  /* Responsive utilities */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
    
    .section {
      padding: 3rem 0;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
    
    .section {
      padding: 2rem 0;
    }
    
    .whatsapp-float {
      width: 50px;
      height: 50px;
      bottom: 20px;
      left: 20px;
    }
  }
`;

export default GlobalStyles;
