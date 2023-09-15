import { NavLink} from "react-router-dom"

const Footer = () => {
    return (
        <div className="footer fixed bottom-0 flex justify-between h-16  text-white   py-3 sm:py-5  md:py-5   px-3 sm:px-5 md:px-10 ">
            <div className=" f-left flex  items-center ">
                <NavLink to="/" className="relative kdr-logo">
                <h1 className=" mr-2 sm:mr-5 text-2xl">K.D.R Consultancy</h1>
                <div className="home absolute -top-5 right-0 p-1 rounded-full  opacity-0 pointer-events-none duration-500">
                    <p>Home</p>
                    </div>
                </NavLink>

                <p className="text-md hidden sm:block  mt-1" >&copy; K.D.R Consultancy Pvt. Ltd.</p>
            </div>
            <div className="f-right sm:pr-0 pr-20 ">
                <a href="https://www.facebook.com/KDRconsultacypvtltd" target="_blank">
                    <i className="fa-brands fa-facebook   text-3xl  mr-5 sm:mr-10  hover:text-blue-500 duration-300 hover:scale-110 "></i>
                </a>
                <a href="https://www.instagram.com/kdr_consultancy_pvt_ltd/" target="_blank">
                    <i className="fa-brands fa-instagram  text-3xl  mr-5 sm:mr-10 hover:text-orange-500 duration-300 hover:scale-110 "></i>
                </a>
                {/* <a href="#">
                    <i className=" fa-brands fa-linkedin  text-3xl mr-10 hover:text-blue-500 duration-300 hover:scale-110 "></i>
                </a> */}
                {/* <a href="#">
                    <i className="fa-brands fa-twitter  text-3xl mr-10 hover:text-blue-500 duration-300 hover:scale-110 "></i>
                </a> */}
            </div>
        </div>
    );
}

export default Footer;
