import React from 'react'
import {  NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <header className="flex  justify-between items-center">
            <div className="left flex  items-center justify-between w-96 ml-5  mt-4 p-1 ">
            <img src="https://www.nepbigyapan.com.np/static/media/neplogo.6104c8b5e8a248e34ce5.png" alt="logo"  className="w-16 cursor-pointer hover:drop-shadow-2xl"/>
                <h1 className='text-green-400 text-4xl cursor-pointer font-semibold hover:drop-shadow-lg'>
                    KDR Consultancy
                </h1>
        
            </div>
           
        </header>      
    <div className="notFound absolute  mt-5 left-40">
        <h2>Page Not Found</h2>
        <p>Please check the correct url </p>
        <p className='mt-4 '>Go to the <NavLink to="/" className='p-2 ml-2 bg-green-600 rounded-lg'>HomePage</NavLink></p>
    </div>
    </>
  )
}
