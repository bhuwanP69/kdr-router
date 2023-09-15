import React, { useState } from 'react';

// js
const Services1 = () => {
  const [isLegalVisible, setLegalVisible] = useState(false);
  const [isFirstVisible, setFirstVisible] = useState(false);
  const [isSecondVisible, setSecondVisible] = useState(false);
  const [absolute,setAbsolute] =useState(true);

  const legalFun = () => {
    setLegalVisible(!isLegalVisible);
    setFirstVisible(false); 
    setSecondVisible(false); 
    setAbsolute(!absolute);
  };

  const firstLists = () => {
    setFirstVisible(!isFirstVisible); 
  };
  const secondLists = () => {
    setSecondVisible(!isSecondVisible); 
  };
  //end js

  // coponents 
  
const DownList = ({ buttonLabel }) => {
  return (
    <div className="downList">
      <div className="one flex ml-24 mb-3 mt-3">
        <i className="fa-solid fa-arrow-turn-up rotate-90 mr-2"></i>
        <button>{buttonLabel}</button>
      </div>
      {/* Add more content as needed */}
    </div>
  );
};
  return (
    <>
      {/* services */}
      <div className="services flex justify-start sm:justify-center  mr-5  text-black">
    {/* legal work for business */}

        <div className="services-1  w-96 p-3 text-center ml-10 rounded-xl bg-gray-100 cursor-pointer hover:bg-white duration-500 hover:shadow-lg">
          <div className="up  w-12 mb-2 px-2 py-3 border border-gray-800  rounded-full  hover:shadow-lg ml-32">
          <i className="fa-solid fa-business-time"></i>     
               </div>
          <button onClick={legalFun} className=' relative-btn relative'>
            <h2 className="text-xl font-semibold hover:scale-105 duration-1000">Legal work for Business</h2>
            {absolute && 
            <div className="absolute-btn  absolute opacity-0 pointer-events-none top-7 p-1 bg-gray-100 rounded-xl -right-24 duration-1000 ">
              <p>Click here to know more</p>
            </div>
            }
          </button>
          {isLegalVisible && ( // Only show the content if isLegalVisible is true
            <div className="lists">
              {/* one  */}
              <div className="one flex ml-20 mb-3 mt-3">
                <i className="fa-solid fa-arrow-turn-up rotate-90 mr-2"></i>
                <button onClick={firstLists} className='hover:bg-gray-200 p-1 rounded-lg duration-300 '>Co.Registration</button>
              </div>
              {isFirstVisible && <DownList buttonLabel="OCR"/>}
              {isFirstVisible && <DownList buttonLabel="Ward"/>}
              {isFirstVisible && <DownList buttonLabel="IRD"/>}
             
              {/* two  */}
              <div className="one flex ml-20 mb-3 mt-3">
                <i className="fa-solid fa-arrow-turn-up rotate-90 mr-2"></i>
                <button onClick={secondLists} className='hover:bg-gray-200 p-1 rounded-lg duration-300'>Co.Renewal</button>
              </div>
              {isSecondVisible && <DownList buttonLabel="OCR"/>}
              {isSecondVisible && <DownList buttonLabel="Ward"/>}
              {isSecondVisible && <DownList buttonLabel="IRD"/>}
             
            </div>
          )}
        </div>    
      </div>
    </>
  );
};

export default Services1;