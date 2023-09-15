import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './Routes/Home'
import About from './Routes/About'
import OurTeam from './Routes/OurTeam'
import Services from './Routes/Services'
import ContactUs from './Routes/Contact'
import NotFound from './Routes/NotFound'
import Career from './Routes/Career'
import QuickLinks from './Routes/QuickLinks'


// layouts
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      <Route path="ourTeam" element={<OurTeam />} />
      <Route path="quick-Links" element={<QuickLinks/>} />
      <Route path="career" element={<Career/>} />
      <Route path="contact" element={<ContactUs />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
