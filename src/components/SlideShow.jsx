import  { useState } from 'react';

const SlideShow = () => {
  const slideData = [
    'url_of_slide_1_image.jpg',
    'url_of_slide_2_image.jpg',
    'url_of_slide_3_image.jpg',
    // ...add more URLs here
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleRightClick = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slideData.length);
  };

  const handleLeftClick = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slideData.length) % slideData.length);
  };

  return (
    <div className="slideshow">
      <div className="slide" style={{ backgroundImage: `url(${slideData[activeSlide]})` }}>
        {/* Content of the slide */}
      </div>
      <button id="left" onClick={handleLeftClick}>Left</button>
      <button id="right" onClick={handleRightClick}>Right</button>
    </div>
  );
};

export default SlideShow;
