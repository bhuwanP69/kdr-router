import React, { useState, useRef, useEffect } from 'react';
const darkLogo = 'https://live.staticflickr.com/65535/53136330799_977780411f_n.jpg';
const whiteLogo = 'https://live.staticflickr.com/65535/53105784717_517e98b50f_n.jpg';

const TeamMember1 = ({ isDarkMode }) => {
    // State to manage the visibility of more-info section
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    // Ref to the more-info container
    const moreInfoRef = useRef(null);

    // Function to handle button click
    const handleButtonClick = () => {
        setShowMoreInfo(!showMoreInfo);
    };
    const handleCloseClick = () => {
      setShowMoreInfo(false);
  };

    // Function to handle clicks outside the more-info section
    const handleClickOutside = (event) => {
        if (moreInfoRef.current && !moreInfoRef.current.contains(event.target)) {
            setShowMoreInfo(false);
        }
    };

    // Attach click event listener to detect clicks outside the more-info section
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
            <div className="members  mt-5">
                <div className="team-one relative grid justify-start sm:ml-0 ml-36   sm:flex sm:flex-col  sm:justify-center sm:items-center cursor-pointer">

          {isDarkMode ? (
            <img
              src={darkLogo}
              alt="dark logo"
              className=" lg:mr-2 cursor-pointer rounded-full w-20 ml-10 sm:ml-0"
            />
          ) : (
            <img
              src={whiteLogo}
              alt="light logo"
              className=" lg:mr-2 cursor-pointer rounded-full w-20 ml-10 sm:ml-0"
            />
          )}
                    {/* <img src={} alt="photo" className="rounded-full w-20 ml-10 sm:ml-0" /> */}
                    <button onClick={handleButtonClick}>
                        <h5 className="text-semibold text-3xl font-semibold hover:drop-shadow-xl hover:scale-105 duration-1000"> CA Pawan Bhusal</h5>
                    </button>
                    <p className="text-md">Chartered Accountant,</p>
                    <p>BBS(T.U)</p>

                    {/* Use the ref to access the more-info container */}
                    <div ref={moreInfoRef} className={`more-info  z-30 absolute h-60 w-96 bg-gray-200 -left-24 sm:left-0  ${showMoreInfo ? '' : 'hidden'}`}>
                     <button onClick={handleCloseClick}>
                    <i class="fa-solid fa-x absolute text-xl top-1  right-2 text-red-600  hover:bg-red-100 p-2 rounded-full hover:scale-110 duration-500"></i>
                     </button>
                    <p className='text-black'>This is more Info about Pawan Bhusal</p>
                    </div>
                </div>
            </div>
        
    );
}

export default TeamMember1;
