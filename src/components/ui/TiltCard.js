import React, { useState } from 'react';
import styled from 'styled-components';

const TiltWrapper = styled.div`
  perspective: ${props => props.perspective || 1000}px;
  transition: transform 0.3s ease-out;
  transform-style: preserve-3d;
  
  &:hover {
    transform: ${props => 
      `rotateX(${props.rotateX}deg) rotateY(${props.rotateY}deg) scale(${props.scale})`
    };
  }
  
  .image-wrapper {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-out;
  }
  
  img {
    width: 100%;
    height: auto;
    border-radius: 15px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const TiltCard = ({ 
  children, 
  className = '',
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  perspective = 1000,
  scale = 1.02,
  transitionSpeed = 2000,
  gyroscope = true,
  ...props 
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!gyroscope) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * tiltMaxAngleX;
    const tiltY = ((x - centerX) / centerX) * tiltMaxAngleY;
    
    setTilt({ x: -tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <TiltWrapper
      className={`tilt-card ${className}`}
      perspective={perspective}
      rotateX={tilt.x}
      rotateY={tilt.y}
      scale={scale}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: `transform ${transitionSpeed}ms ease-out`
      }}
      {...props}
    >
      {children}
    </TiltWrapper>
  );
};

export default TiltCard;