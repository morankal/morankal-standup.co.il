import React, { useEffect } from 'react';
import styled from 'styled-components';

// Ensure this component runs on the client
// If using Next.js App Router, add 'use client'; at the top

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background-color: #111; // Dark background for modal content area
  padding: 10px;
  border-radius: 8px;
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 800px; // Adjust width as needed
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: -30px; // Position above the modal content
  right: -10px;
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  line-height: 1;
  padding: 0;

  &:hover {
    color: var(--primary-red);
  }
`;

const VideoPlayerWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  border-radius: 4px; // Optional: round corners of video player
`;

const IframePlayer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  console.log('VideoModal: Rendering with URL:', videoUrl);

  // Add event listener for Escape key to close modal
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        console.log('VideoModal: Escape key pressed, closing modal.');
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]); // Dependency array includes onClose

  // Stop propagation to prevent closing modal when clicking inside content
  const handleContentClick = (e: React.MouseEvent) => {
      console.log('VideoModal: Clicked inside modal content.');
      e.stopPropagation();
  }

  const handleOverlayClick = () => {
      console.log('VideoModal: Clicked on overlay, closing modal.');
      onClose();
  }

  const handleCloseButtonClick = () => {
      console.log('VideoModal: Close button clicked, closing modal.');
      onClose();
  }

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent onClick={handleContentClick}>
        <CloseButton onClick={handleCloseButtonClick} aria-label="Close video player">×</CloseButton>
        <VideoPlayerWrapper>
          <IframePlayer
            src={videoUrl}
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></IframePlayer>
        </VideoPlayerWrapper>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;

