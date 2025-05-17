import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Contact from './components/Company/Contact'
import Inquiry from './components/Company/inquiry'
import ProductDetail from './components/ProductDetail'
import Excellence from './components/Company/Excellence'
import VisionMissionPage from './components/Company/Vision&Mission'
import WhyChooseUs from './components/Company/WhyChooseUs'
import CompanyProfilePage from './components/Company/CompanyProfile'
import HistoryPage from './components/Company/History'
import DirectorMessage from './components/Company/Directorm'
import Manufacturing from './components/Company/Manufacturing'
import EcoFriendly from './components/Company/eco'
import Blog from './components/Company/Blog'
import PrivacyPolicy from './components/Legal/PrivacyPolicy'

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
        <Route path="/our-history" element={<HistoryPage />} />
        <Route path="/company/promoter-message" element={<DirectorMessage />} />
        <Route path="/company/manufacturing-unit" element={<Manufacturing />} />
        <Route path="/eco-friendly-sustainability" element={<EcoFriendly />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  )
}

export default App
