

const About = () => {
    return ( 
        <div className="about w-full h-screen pt-20 pb-10 sm:pb-0 sm:pt-0   sm:h-screen grid justify-center items-center ml-10  md:ml-0" id="about">
         
        <div className="about-first  grid grid-cols-1  justify-center  items-center">
        <i className="fa-solid fa-quote-right  text-center -ml-40 sm:-ml-5"></i>
        <p className="   sm:ml-0 ml-3 sm:w-full w-[400px] text-xl mb-2">K.D.R Consultancy Private Limited is established on 14th Baishak, 2078 [27th April, 2021].This company is leading by Chartered Accountants, Information Technology Officers and dedicated members in related fields.  </p>
        
        {/* <p className="text-xl">Our Team will be fully responsible for works, we provided.</p> */}
        <p className="text-xl"></p>
        <p className="w-16 flex justify-center bg-green-300 h-1 ml-[30%]   sm:ml-[40%]"></p>
        </div>
        </div>
     );
}
 
export default About;