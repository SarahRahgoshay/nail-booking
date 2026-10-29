import Layout from './layouts/Layout';
import HeroSection from './components/HeroSection';
import Services from './components/services/Services';
import { Route, Routes } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import BookingPage from './booking/BookingPage'
import Portfolio from './components/portfolio/Portfolio';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import ContactUs from './components/contact/ContactUs';
import ContactPage from './pages/contact/ContactPage';
import NotFound from './pages/NotFound';


function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path='/'
            element={
              <>
                <HeroSection />
                <Services />
                <Portfolio />
                <ContactUs />
              </>
            } />
          <Route path="/services" element={<ServicesPage />} />
          {/* reservation */}
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking/:servicesId" element={<BookingPage />} />
          <Route path='/portfolios' element={<PortfolioPage />} />
          <Route path='/contact-us' element={<ContactPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
