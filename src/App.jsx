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


function App() {

  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
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
            <Route path='//contact-us' element={<ContactPage />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
