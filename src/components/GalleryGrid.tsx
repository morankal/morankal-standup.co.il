import { useState, useEffect } from 'react'; // Added useEffect
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface GalleryImageItem { // Renamed to avoid conflict with HTMLImageElement
  src: string;
  alt: string;
  category?: string; // Keep category optional for flexibility, though not used in current main gallery
}

interface GalleryGridProps {
  images: GalleryImageItem[];
  categories?: string[]; // Categories prop is now optional
}

const GalleryContainer = styled.div`
  padding: 2rem 0;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 0.5rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${({ active }) => active ? 'var(--primary-red)' : 'var(--primary-black)'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary-red)' : 'rgba(0, 0, 0, 0.8)'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const ImageItem = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  aspect-ratio: 3/2;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Lightbox = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${({ visible }) => visible ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`;

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState(images);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Update filteredImages when images prop changes or if categories are used
  useEffect(() => {
    if (!categories || categories.length === 0 || activeCategory === 'all') {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(image => image.category === activeCategory));
    }
  }, [images, categories, activeCategory]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Filtering logic is now primarily in useEffect
  };
  
  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <GalleryContainer>
      {/* Only show filter buttons if categories are provided and there's more than one category or 'all' is not the only option implicitly */}
      {categories && categories.length > 0 && (
        <FilterContainer>
          <FilterButton 
            active={activeCategory === 'all'} 
            onClick={() => handleCategoryChange('all')}
          >
            הכל
          </FilterButton>
          
          {categories.map(category => (
            <FilterButton 
              key={category} 
              active={activeCategory === category} 
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
      )}
      
      <Grid>
        {filteredImages.map((image, index) => (
          <ImageItem 
            key={image.src + index} // Use a more unique key if possible, e.g., image.id if available
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => openLightbox(image.src)}
          >
            <Image src={image.src} alt={image.alt} loading="lazy" />
          </ImageItem>
        ))}
      </Grid>
      
      <Lightbox visible={!!selectedImage} onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
        <CloseButton onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>×</CloseButton>
        {selectedImage && <LightboxImage src={selectedImage} alt="תמונה מוגדלת" onClick={(e) => e.stopPropagation()} />}
      </Lightbox>
    </GalleryContainer>
  );
};

export default GalleryGrid;

