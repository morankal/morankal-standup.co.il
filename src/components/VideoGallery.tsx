import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import VideoModal from './VideoModal'; // Import the modal component

// Ensure this component runs on the client
// If using Next.js App Router, add 'use client'; at the top

interface Video {
  id: string;
  title: string;
  thumbnail?: string;
  category?: string;
}

interface VideoGalleryProps {
  videos: Video[];
  categories?: string[];
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
  pointer-events: none; // Prevent button from interfering with VideoItem click

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
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null); // State for modal

  // Filter videos when category or videos prop changes
  useEffect(() => {
    console.log('VideoGallery: useEffect triggered. Active category:', activeCategory);
    if (activeCategory === 'all') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === activeCategory));
    }
  }, [activeCategory, videos]);

  // Handle clicking on a video item
  const handleVideoClick = (video: Video) => {
    console.log('VideoGallery: handleVideoClick called for video:', video.id, video.title);
    // Construct YouTube embed URL from video ID
    const embedUrl = `https://www.youtube.com/embed/${video.id}?autoplay=1`; // Added autoplay
    console.log('VideoGallery: Setting selectedVideoUrl to:', embedUrl);
    setSelectedVideoUrl(embedUrl);
  };

  // Handle closing the modal
  const closeModal = () => {
    console.log('VideoGallery: closeModal called.');
    setSelectedVideoUrl(null);
  };

  console.log('VideoGallery: Rendering. Selected video URL:', selectedVideoUrl);

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
            onClick={() => handleVideoClick(video)} // Ensure onClick is correctly assigned
            aria-label={`Play video: ${video.title}`}
            role="button"
            tabIndex={0} // Make it focusable
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleVideoClick(video);
              }
            }} // Add keyboard accessibility
          >
            <ThumbnailContainer>
              <Thumbnail
                src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={video.title}
                loading="lazy" // Add lazy loading for thumbnails
              />
              <PlayButton className="play-button">
                <FaPlay />
              </PlayButton>
            </ThumbnailContainer>
            <VideoTitle>{video.title}</VideoTitle>
          </VideoItem>
        ))}
      </Grid>

      {/* Conditionally render the modal */}
      {selectedVideoUrl && (
        <VideoModal videoUrl={selectedVideoUrl} onClose={closeModal} />
      )}
    </GalleryContainer>
  );
};

export default VideoGallery;

