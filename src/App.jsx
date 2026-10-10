import Layout from './layouts/Layout';
import HeroSection from './components/HeroSection';
import Services from './components/services/Services';
import { Route, Routes } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import ScrollToTop from './components/ScrollToTop';
import BookingPage from './booking/BookingPage'


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
              </>
            } />
            <Route path="/services" element={<ServicesPage />} />
            {/* reservation */}
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/:servicesId" element={<BookingPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
