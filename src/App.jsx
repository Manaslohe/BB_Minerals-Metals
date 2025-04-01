import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Contact from './components/Contact'
import Inquiry from './components/inquiry'
import ProductDetail from './components/ProductDetail'
import Excellence from './components/Company/Excellence'
import VisionMissionPage from './components/Company/Vision&Mission'
import WhyChooseUs from './components/Company/WhyChooseUs'
import CompanyProfilePage from './components/Company/CompanyProfile'
import FoundersJourneyPage from './components/Company/FoundersJourney'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/products" element={<ProductDetail />} />
        <Route path="/company/excellence" element={<Excellence />} />
        <Route path="/company/vision-mission" element={<VisionMissionPage />} />
        <Route path="/company/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/company/profile" element={<CompanyProfilePage />} />
        <Route path="/company/founders-journey" element={<FoundersJourneyPage />} />
      </Routes>
    </Router>
  )
}

export default App
