import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title = 'מורן קל - סטנדאפיסט לילדים | מופעי סטנדאפ לימי הולדת ואירועים',
  description = 'מורן קל - סטנדאפיסט לילדים מקצועי עם ניסיון של מעל 10 שנים ו-1,000 הופעות. מופעי סטנדאפ מצחיקים לימי הולדת, בר/בת מצווה, אירועים בבתי ספר וקייטנות.',
  keywords = 'סטנדאפיסט לילדים, קומיקאי לילדים, סטנדאפ לילדים, מופע סטנדאפ לילדים, מורן קל סטנדאפיסט, מופע מורן קל, מופע קומי לילדים',
  ogImage = 'https://www.morankal.co.il/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}) => {
  const router = useRouter();
  const fullCanonicalUrl = canonicalUrl || `https://www.morankal.co.il${router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEO;
