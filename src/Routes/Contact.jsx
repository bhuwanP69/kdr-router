 export function SubmitButton(){
  return(
    <div className="submit -ml-20">

<div className=" mb-5 mt-10">
      <form className="
        text-center ">
        <label className="ml-5">
          <span className="text-xl font-semibold mr-8 ">Name:</span>
          <input type="name" name="name" required className="border text-lg h-10 text-black border-black  outline-none  p-1 w-64  mb-5" />
        </label>
        <br />
        <label>
          <span className="text-xl font-semibold mr-3">Your email:</span>
          <input type="email" name="email" required className="border text-black border-black  outline-none  text-base h-10 p-1 w-64  mb-5" />
        </label>
        <br />
        <label  className="flex flex-col justify-center items-center ">
          <span className="text-xl font-semibold mr-3 -ml-48 sm:-ml-60 mb-3">Your message:</span>
          <br />
          <textarea name="message" required className=" message border border-gray-500 outline-none p-2   w-96 h-20 sm:w-[60%] sm:h-32    ml-10 sm:ml-24   resize-y mb-7 text-black "></textarea>
        </label>
        <button className="bg-green-600 text-white ml-20   rounded-xl px-4 py-1 hover:bg-green-700 cursor-pointer text-lg ">Submit</button>
      </form>

    </div>
</div>
  )
 }


export default function ContactUs() {
  // for phone Number
  const handleNumberClick = (phoneNumber) => {
    // with the clicked number and potentially initiate a call.
    window.location.href = `tel:${phoneNumber}`;
    window.open(url, '_blank');
  };
  //for whatsapp number
  const handleWhatsAppClick = (phoneNumber) => {
    const message = encodeURIComponent('Hi');
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(url, '_blank');
  };
  // //for viber number
  // const handleViberClick = (phoneNumber) => {
  //   const message = encodeURIComponent('Hi');
  //   const url = `viber://forward?text=${message}&phone=${phoneNumber}`;
  //   window.open(url, '_blank');
  // };
  
    
  return( 
<div className="contact-us  pt-32 grid gap-5  text-2xl  sm:justify-center justify-start ml-10 " id="contact">
<h5 className=" text-start sm:text-center  text-3xl font-bold underline">Contact Information</h5>
  <div className="phone grid gap-5 sm:flex items-center ">
  <i className="fa-solid fa-phone text-5xl ml-10 sm:ml-0 mr-5"></i>  
  <p className="  hover:scale-105 duration-1000 cursor-pointer  underline underline-offset-2 text-blue-600 " onClick={() => handleNumberClick('9847508342')}>+977 9847508342 </p>
  <p className="ml-10 sm:ml-0">[H.O.]</p>

  <p className="hover:scale-105 duration-1000 cursor-pointer  underline underline-offset-2 text-blue-600 " onClick={() => handleNumberClick('98036108050')}>+977 9803610850 </p>
  <p className="ml-10 sm:ml-0">[B.O.]</p>
  </div>
  {/* whatsapp */}
  <div className="whatsapp flex">
  <i className="fa-brands fa-whatsapp text-5xl mr-16"></i>
<p className="underline text-blue-600 cursor-pointer hover:scale-105 duration-1000 "  onClick={() => handleWhatsAppClick('+977 9803610850')}> +977 9803610850</p>
  </div>
{/* viber  */}
  <div className="viber flex">
  <i className="fa-brands fa-viber text-5xl mr-16"></i>
<p className="underline text-blue-600 cursor-pointer hover:scale-105 duration-1000" >+977 9847508342 </p>
  </div>
  {/* gmail */}
  <div className="gmail flex">
    <p>Gmail : </p>
    <p className="underline sm:text-2xl text-xl  sm:ml-10 ml-3 underline-offset-2 text-blue-600 cursor-pointer hover:scale-105 duration-1000" onClick={() => window.location.href = 'mailto: kdrconsultancy2078@gmail.com'}>kdrconsultancy2078@gmail.com</p>
  </div>

{/* address  */}
<h5 className=" ml-20 sm:ml-0 text-start sm:text-center  text-3xl mt-10 font-bold underline">Address</h5>
{/* head office  */}

<div className="head-office grid gap-1 sm:flex relative">
<p className="mr-5">[Head Office]:</p>
<a href="https://www.google.com/maps?output=search&q=kdr+consultancy&source=lnms&entry=mc&sa=X&ved=2ahUKEwii-I65x8yAAxXAyqACHUDSBZEQ0pQJegQICxAB" target="_blank">
<p className="underline cursor-pointer w-96 sm:w-full">Putalisadak-28, Kathmandu (Near Shankardev Campus)  
<p className=" add-absolute absolute   pointer-events-none right-52 sm:right-36 bg-blue-50 text-black rounded-md font-mono text-base border opacity-0">Click address to go to location </p>
</p>
</a>
</div>
{/* Branch office */}


<div className="branch-office grid gap-1 sm:flex">
<p className="mr-5">[Branch Office]:</p>
<a href="#" target='_blank'>
<p className="underline cursor-pointer w-96 sm:w-full">
Sita RiceMill-02, Tilottama, Butwal
</p>
</a>
</div>
<div className="icon flex ml-24 sm:ml-0 justify-start sm:justify-center items-center mt-5">
  <a href="https://www.facebook.com/KDRconsultacypvtltd" target="_blank" className="mr-10">
<i className="fa-brands fa-square-facebook text-3xl hover:scale-110 duration-500 "></i>
  </a>
  <a href="https://www.instagram.com/kdr_consultancy_pvt_ltd/" target="_blank">
<i className="fa-brands fa-square-instagram text-3xl  hover:scale-110 duration-500"></i>

  </a>
</div>
<SubmitButton/>
</div>
  )
}
