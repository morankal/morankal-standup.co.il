import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import VideoModal from './VideoModal'; // Import the modal component

interface Video {
  id: string;
  title: string; // Title is now expected
  thumbnail?: string;
  category?: string; // Category is now expected
}

interface VideoGalleryProps {
  videos: Video[];
  categories?: string[]; // Categories are now expected
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const VideoItem = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    .play-button {
      transform: translate(-50%, -50%) scale(1.1);
      background-color: var(--primary-red);
    }
  }
`;

const ThumbnailContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #000;
`;

const Thumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(217, 0, 0, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const VideoTitle = styled.h3`
  padding: 1rem;
  background-color: var(--primary-black);
  color: white;
  font-size: 1rem;
  text-align: center;
  margin: 0;
`;

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos, categories = [] }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === activeCategory));
    }
  }, [activeCategory, videos]);

  const handleVideoClick = (video: Video) => {
    const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`;
    setSelectedVideoUrl(embedUrl);
  };

  const closeModal = () => {
    setSelectedVideoUrl(null);
  };

  return (
    <GalleryContainer>
      {categories.length > 0 && (
        <FilterContainer>
          <FilterButton
            active={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
          >
            הכל
          </FilterButton>

          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
      )}

      <Grid>
        {filteredVideos.map((video, index) => (
          <VideoItem
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onClick={() => handleVideoClick(video)}
            aria-label={`Play video: ${video.title}`}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleVideoClick(video);
              }
            }}
          >
            <ThumbnailContainer>
              <Thumbnail
                src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title} // Use video.title for alt text
                loading="lazy"
              />
              <PlayButton className="play-button">
                <FaPlay />
              </PlayButton>
            </ThumbnailContainer>
            <VideoTitle>{video.title}</VideoTitle> {/* VideoTitle is restored */}
          </VideoItem>
        ))}
      </Grid>

      {selectedVideoUrl && (
        <VideoModal videoUrl={selectedVideoUrl} onClose={closeModal} />
      )}
    </GalleryContainer>
  );
};

export default VideoGallery;

