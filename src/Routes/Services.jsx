// import React, { useState } from 'react';

import Services1 from "../services/Services1";
import Services2 from "../services/Services2";
import Services3 from "../services/Services3";


const Services = () => {
  return (
    <div className="main-services  grid items-start sm:items-center justify-start sm:justify-center pt-32  pb-20" id="services">
      <div className="here text-start sm:text-center mb-5">
        <h2 className="text-3xl ml-5 sm:ml-0  mb-5 font-bold">Here's what we are good at.</h2>
        <p className="text-lg w-96  ml-5">We mainly specialize in creating beautiful and functional websites, web-apps, and mobile apps as well.</p>
      </div>
      <div className="service-components grid gap-6 ">

      <Services1/>
      <Services2/>
      <Services3/>
      </div>
    </div>
  );
};

export default Services;
