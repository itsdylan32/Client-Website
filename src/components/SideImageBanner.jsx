import React, { useState } from 'react';

const SideImageBanner = () => {
  const [activeImage, setActiveImage] = useState(null);

  const handleClick = (id) => {
    setActiveImage(activeImage === id ? null : id); // toggle
  };

  const imageBoxStyle = {
    width: '686px',
    height: '294px',
    borderRadius: '20%',
    overflow: 'hidden',
    backgroundColor: '#ccc',
    border: '2px solid black',
    cursor: 'pointer',
    flexShrink: 0,
  };

  const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    pointerEvents: 'none',
  };

  const messageStyle = {
    minHeight: '2rem',
    marginTop: '0.5rem',
    fontSize: '0.875rem',
    color: '#3b82f6',
    textAlign: 'center',
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div className="w-full px-4 overflow-x-auto">
      <div className="flex justify-center items-start gap-12 p-4 flex-wrap">
        {/* Wraith Image Column */}
        <div className="flex flex-col items-center" style={{ width: '686px' }}>
          <div style={imageBoxStyle} onClick={() => handleClick('wraith')}>
            <img src="/images/Wraith.jpg" alt="Wraith" style={imgStyle} />
          </div>
          <div style={messageStyle}>
            {activeImage === 'wraith' ? 'This is an F-16 running a Pratt & Whitney engine with the Wraith paint scheme. I have personally worked on this aircraft and launched it into flights. ' : ''}
          </div>
        </div>

        {/* Honor Guard Image Column */}
        <div className="flex flex-col items-center" style={{ width: '686px' }}>
          <div style={imageBoxStyle} onClick={() => handleClick('honor')}>
            <img src="/images/HonorGuard.jpg" alt="Honor Guard" style={imgStyle} />
          </div>
          <div style={messageStyle}>
            {activeImage === 'honor'
              ? 'This image depicts myself and sister services rendering honors to Presidents Joe Biden and Korean President Yoon Suk Yeol'
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideImageBanner;
