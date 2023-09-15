import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';



const Main = () => {
    const slideData = [
     'https://live.staticflickr.com/65535/53106493639_033a56d5e9_b.jpg',
      'https://live.staticflickr.com/65535/53105782717_a2bd1657dd_b.jpg',
        'https://live.staticflickr.com/65535/53106856603_09925ef488_b.jpg'
      ];
    
      const [activeSlide, setActiveSlide] = useState(0);
      const [isPlaying, setIsPlaying] = useState(true);

      useEffect(() =>{
        let interval;
        if(isPlaying){
          interval = setInterval(() => {
            setActiveSlide((prevSlide)  => (prevSlide+1) % slideData.length);
            
          }, 4000);
        }else{
          clearInterval(interval);
        }
        return  () => clearInterval(interval);
      },[isPlaying,slideData.length]);
    
      const handleRightClick = () => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slideData.length);
      };
    
      const handleLeftClick = () => {
        setActiveSlide((prevSlide) => (prevSlide - 1 + slideData.length) % slideData.length);
      };
      const handlePauseClick = () => {
        setIsPlaying(false);
      };
      const handlePlayClick = () => {
        setIsPlaying(true);
      };
      const handleCircleClick = (index) => {
        setActiveSlide(index);
      };
      
  
const renderCircles = () => {
  return slideData.map((_, index) => (
    <div key={index}
    onClick={() => handleCircleClick(index)}
     className="circle flex justify-between w-8 cursor-pointer"
    >
      <FontAwesomeIcon
        icon={index === activeSlide ? faCircleSolid : faCircleRegular}
        className={index === activeSlide ? 'solid-circle text-xl' : 'regular-circle text-xl'}
      />
    </div>
  ));
};

const handleImageMouseEnter = () => {
  setIsPlaying(false); // Pause automatic sliding when mouse enters
};

const handleImageMouseLeave = () => {
  setIsPlaying(true); // Resume automatic sliding when mouse leaves
};
    
    return ( 
        <main className=" main pt-10 w-screen  relative mt-10 md:mt-0   grid gap-5  grid-cols-1 md:grid-cols-2 ml-12 mr-14 pr-5 justify-center items-center" id="main">
          
            <div className="m-left mr-10 ">
              
                <h1 className="full  text-4xl text-green-500 sm:text-5xl lg:text-7xl  font-semibold mb-5  ">
              K.D.R Consultancy  <span className="text-xl sm:text-2xl lg:text-3xl  -ml-3 mt-1 ">Pvt. Ltd. </span>
                </h1>
              
                <h1 className="full  text-3xl sm:text-2xl lg:text-3xl  font-semibold mb-5 ">
                Full Services of Accountancy, Business Consultancy, Internal Audit & Tax Consultancy.
                </h1>
                <h2 className="it text-2xl sm:text-xl lg:text-2xl  font-semibold mb-5 ">
                Full Services of IT related services, Digital Marketing and Outsourcing Related Services. 
                </h2>
                <p className="our  text-xl sm:text-lg lg:text-xl">Our team is dedicated to  coordinate, co-operate and  provide all qualitative services as demanded  within time.</p>


            </div>
            <div className="m-right relative h-96 text-black mr-20" >
            
                <img src={slideData[activeSlide]} 
                onMouseEnter={handleImageMouseEnter}
                onMouseLeave={handleImageMouseLeave} 
                 alt="Slide" 
                 className=" flex transform transition-all ease-in-out duration-500  rounded-3xl " />
             

                <div className="buttons absolute md:-bottom-1 -left-16 sm:left-14  lg:left-0 md:-left-14 lg:-bottom-24 flex justify-between items-center w-56 mt-8 ml-32">

                <i className="fa-solid fa-chevron-left sm:text-2xl text-xl  cursor-pointer hover:scale-125 duration-500 bg-blue-100 p-1 rounded-full" onClick={handleLeftClick}></i>
              
                {isPlaying ? (
                <i class={`fa-solid fa-circle-pause text-2xl sm:text-3xl hover:scale-105 cursor-pointer transition-all`}   onClick={handlePauseClick}></i>
                 ) : (
                 <i class="fa-solid fa-circle-play text-2xl sm:text-3xl hover:scale-105 cursor-pointer transition-all" onClick={handlePlayClick}></i>
                   )}
                          
                    <div className="circle-container flex">
                    {renderCircles()}
                  </div>
                     <i className="fa-solid fa-chevron-right sm:text-2xl text-xl cursor-pointer hover:scale-125 duration-500 bg-blue-100 p-1 rounded-full" onClick={handleRightClick}></i>
                </div>

            </div>

              {/* bouncy mouse  */}
            {/* <div className="bounce hidden md:flex  animate-bounce items-center ">
              <div className="mouse text-3xl">
            <iconify-icon icon="clarity:mouse-solid"></iconify-icon>
              </div>
              <p className="text-lg">scroll down</p>
              <div className="arrow-down text-2xl mt-2">
              <iconify-icon icon="mdi:arrow-down-thin"></iconify-icon>
              </div>
              
            </div> */}
        </main>
     );
}
 
export default Main;