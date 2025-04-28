# Moran Kal Website Development Plan

## Project Overview
This document outlines the development plan for creating a professional website for Moran Kal, a children's standup comedian in Israel. The website will be built using Next.js and TypeScript, with full RTL support for Hebrew content.

## Design Concept
- **Theme**: Stand-up comedy stage with red curtain background, spotlights, and microphone
- **Colors**: 
  - Primary: #D90000 (red), #000000 (black)
  - Secondary: #FFD700 (gold), #00A651 (green)
- **Fonts**: 
  - Headings: Rubik Bold
  - Body text: Assistant
- **Visual Elements**:
  - Fixed background with performance images (CSS `background-attachment: fixed`)
  - Slider of performance images to create continuous "performance atmosphere"
  - Vibrant, colorful design appropriate for children's entertainment
  - Logo visible on sides of website

## Technical Requirements
1. **Framework**: Next.js with TypeScript
2. **Deployment**: Vercel Edge
3. **Responsive Design**: Mobile-first approach with Lighthouse score ≥ 90
4. **RTL Support**: Full right-to-left layout for Hebrew content
5. **Performance Optimization**:
   - Lazy-loading for images
   - WebP image format
   - CDN Edge delivery
   - Code splitting and dynamic imports
6. **SEO Implementation**:
   - Sitemap.xml and robots.txt in Hebrew
   - Schema markup (LocalBusiness, Event, FAQ)
   - Latin-friendly URLs (e.g., /standup-birthday-kids)
   - Proper heading hierarchy (H1, H2, H3)
   - Rich alt-text in Hebrew
   - Meta titles ≤ 60 characters, descriptions ≤ 155 characters
   - Landing pages for different cities/regions

## Website Structure

### 1. Home Page
- **Hero Section**: Auto-playing muted loop of showreel video (https://youtu.be/cF4jdl9Ogio)
- **Experience Summary**: 10+ years, 1,000+ performances
- **Call-to-Action**: "Book a Show" button + WhatsApp button
- **Testimonials**: Carousel of 5 rotating text testimonials

### 2. About Page
- **Biography**: Personal and professional information
- **Profile Images**: Professional headshots and action shots
- **TV Appearances**: YouTube clips from "Hatzchokiya" playlist

### 3. Performances Page
- **Types of Shows**:
  - Birthday parties
  - Bar/Bat Mitzvah
  - Religious events
  - School performances
  - Summer camps
- **Each Section**: Video clip + FAQ specific to that type of event

### 4. Photo Gallery
- Responsive grid of ~160 performance photos
- Lightbox functionality for full-size viewing
- Filter by event type
- All images clickable to open in lightbox

### 5. Video Gallery
- **Playlists**:
  - Showreel
  - Full performance (https://youtu.be/hxm_QYDPgBQ)
  - "Hatzchokiya" TV clips

### 6. Testimonials Page
- Paginated reviews (50 per page) in chronological order
- Separate section for WhatsApp screenshot testimonials
- Grid layout for WhatsApp screenshots with zoom functionality

### 7. Blog (Hidden in initial launch)
- To be developed in future phases

### 8. Contact Page
- Simple contact form
- Google Maps integration
- Fixed WhatsApp button
- Contact information

## Interactive Elements
1. **Floating WhatsApp Button**: Present on all pages (053-6277657)
2. **Lightbox for Images**: Click to open full-size
3. **Video Players**: Embedded YouTube videos
4. **Exit Intent Popup**: "Early booking discount" coupon

## Development Phases

### Phase 1: Project Setup and Basic Structure
- Initialize Next.js with TypeScript
- Configure RTL support
- Set up basic styling and theme
- Implement responsive layout framework
- Create header and footer components

### Phase 2: Core Page Development
- Develop home page with hero video
- Create about page with biography
- Build performances page with sections for each show type
- Implement contact page with form and map

### Phase 3: Media Galleries
- Develop photo gallery with lightbox
- Create video gallery with embedded players
- Optimize images for performance
- Implement lazy loading

### Phase 4: Testimonials and Content
- Build testimonials page with pagination
- Create WhatsApp testimonials section
- Implement floating WhatsApp button
- Add all text content in Hebrew

### Phase 5: SEO and Performance Optimization
- Implement SEO metadata
- Create schema markup
- Generate sitemap and robots.txt
- Optimize for Core Web Vitals
- Ensure Lighthouse score ≥ 90

### Phase 6: Testing and Deployment
- Cross-browser testing
- Mobile responsiveness testing
- RTL layout verification
- Deploy to Vercel
- Set up analytics and monitoring

## SEO Keywords Strategy
Keywords will be strategically incorporated into headings, alt text, meta descriptions, and content:

### Identity Keywords
- סטנדאפיסט לילדים (Standup comedian for children)
- קומיקאי לילדים (Comedian for children)
- מופע סטנדאפ לילדים (Standup show for children)
- מורן קל סטנדאפיסט (Moran Kal standup comedian)

### Event Keywords
- מפעיל ליום הולדת (Birthday party entertainer)
- הפעלה ליום הולדת לילדים (Children's birthday party activity)
- סטנדאפ ליום הולדת (Birthday standup)
- יום הולדת מצחיק (Funny birthday)

### Age-Specific Keywords
- סטנד-אפ לילדים בני 7-13 (Standup for children ages 7-13)
- הפעלה לכיתות ג-ו (Activity for grades 3-6)

### Location Keywords
- סטנדאפיסט לילדים בתל אביב (Standup comedian for children in Tel Aviv)
- בדרן לילדים בגוש דן (Children's entertainer in Gush Dan)

## Conversion Optimization
- Clear CTAs on all pages: "Book a Show Now"
- Exit-intent popup with early booking discount
- One-click WhatsApp inquiry
- Prominent display of testimonials and social proof

## Technical Implementation Notes
- Hebrew slugify for URL generation
- Daily automatic backup
- Google Analytics and Search Console integration
- Mobile-first development approach
- Accessibility considerations for all interactive elements
