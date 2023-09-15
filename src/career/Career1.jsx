import React, { useState, useRef, useEffect } from 'react';

const Career1 = () => {
  const [isLegalVisible, setLegalVisible] = useState(false);
  const [isFirstVisible, setFirstVisible] = useState(false);
  const [isSecondVisible, setSecondVisible] = useState(false);
  const [absolute, setAbsolute] = useState(true);


  const legalFun = () => {
    setLegalVisible(!isLegalVisible);
    setFirstVisible(false);
    setSecondVisible(false);
    setAbsolute(!absolute);
  };

  const firstLists = () => {
    setFirstVisible(!isFirstVisible);
    setSecondVisible(false); // Close the second button
  };

  const secondLists = () => {
    setSecondVisible(!isSecondVisible);
    setFirstVisible(false); // Close the first button
  };

  const [activeButton, setActiveButton] = useState(null); // Track active button
  const moreInfoRef = useRef(null);

  const handleButtonClick = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  const handleCloseClick = () => {
    setActiveButton(null); // Close the active button
  };

  const handleClickOutside = (event) => {
    if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
      setActiveButton(null); // Close the active button
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="career">
      <div className=" flex  justify-start sm:ml-0 ml-14 sm:justify-center  mr-5 text-black">
        <div className="  w-96 p-3 text-center  rounded-xl bg-gray-100 cursor-pointer hover:bg-white duration-500 hover:shadow-lg">
          <div className="up w-12 mb-2 px-2 py-3 border border-gray-800 rounded-full hover:shadow-lg ml-40">
            <i className="fa-solid fa-business-time"></i>
          </div>
          <button onClick={legalFun} className='relative-btn relative'>
            <h2 className="text-xl font-semibold hover:scale-105 duration-1000">Vacancies</h2>
            {absolute &&
              <div className="absolute-btn absolute opacity-0 pointer-events-none top-7 p-1 bg-gray-100 rounded-xl -right-24 duration-1000">
                <p>Click here to know more</p>
              </div>
            }
          </button>
          {isLegalVisible && (
            // lists 
            <div className="lists h-24">
              {/* one */}
              <div className="one flex relative ml-32 z-20 mb-3 mt-3">
                <i className="fa-solid fa-arrow-turn-up rotate-90 mr-5"></i>
                <button onClick={() => handleButtonClick('first')} className='hover:bg-gray-200 p-1 rounded-lg duration-300 text-xl font-semibold hover:drop-shadow-xl'>Account</button>
                <div ref={moreInfoRef} className={`more-info absolute h-60 w-96  bg-gray-200 top-0 -left-36 sm:-left-20 z-10 ${activeButton === 'first' ? '' : 'hidden'}`}>
                  <button onClick={handleCloseClick}>
                    <i className="fa-solid fa-x absolute text-xl top-1 right-2 text-red-600 hover:bg-red-100 p-2 rounded-full hover:scale-110 duration-500"></i>
                  </button>
                  <p>No Vacancies</p>
                </div>
              </div>
              {/* two */}
              <div className="two flex relative ml-32 z-10 mb-3 mt-3">
                <i className="fa-solid fa-arrow-turn-up rotate-90 mr-5"></i>
                <button onClick={() => handleButtonClick('second')} className='hover:bg-gray-200 p-1 rounded-lg duration-300 text-xl font-semibold hover:drop-shadow-xl'>Audit</button>
                <div ref={moreInfoRef} className={`more-info absolute h-60 w-96 bg-gray-200 top-0 -left-36 sm:-left-20  ${activeButton === 'second' ? '' : 'hidden'}`}>
                  <button onClick={handleCloseClick}>
                    <i className="fa-solid fa-x absolute text-xl top-1 right-0 text-red-600 hover:bg-red-100 p-2 rounded-full hover:scale-110 duration-500"></i>
                  </button>
                  <p>No Vacancies </p>
                </div>
              </div>

            </div>
            // lists  finished
          )}
        </div>
      </div>
    </div>
  );
};

export default Career1;
