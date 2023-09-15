import Main from '../components/Main'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'


export default function Home() {
  return (
    <>
    <div className="main-home  pb-20 w-screen pt-20 grid" id='home'>
        <Main/>
        <Footer /> 
       
    </div>
    <BackToTop/>
       
    </>
  )
}
