import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { trackPageView } from './utils/analytics'

// Import main landing page directly to avoid loading delay on homepage
import LandingPage from './components/LandingPage/LandingPage'

// Lazy-loaded components for performance optimization
const Contact = lazy(() => import('./components/Company/Contact'))
const Inquiry = lazy(() => import('./components/Company/inquiry'))
const ProductDetail = lazy(() => import('./components/ProductDetail'))
const Excellence = lazy(() => import('./components/Company/Excellence'))
const VisionMissionPage = lazy(() => import('./components/Company/Vision&Mission'))
const WhyChooseUs = lazy(() => import('./components/Company/WhyChooseUs'))
const CompanyProfilePage = lazy(() => import('./components/Company/CompanyProfile'))
const HistoryPage = lazy(() => import('./components/Company/History'))
const DirectorMessage = lazy(() => import('./components/Company/Directorm'))
const Manufacturing = lazy(() => import('./components/Company/Manufacturing'))
const EcoFriendly = lazy(() => import('./components/Company/eco'))
const Blog = lazy(() => import('./components/Company/Blog'))
const PrivacyPolicy = lazy(() => import('./components/Legal/PrivacyPolicy'))
const Gallery = lazy(() => import('./components/Company/Gallery')) // Lazy-load Gallery component

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500"></div>
  </div>
)

// Route change tracker component
const RouteChangeTracker = () => {
  const location = useLocation()
  
  useEffect(() => {
    // Track page views when route changes
    if (import.meta.env.PROD) {
      trackPageView(location.pathname)
    }
  }, [location])
  
  return null // This component doesn't render anything
}

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="BB Minerals and Metals is a premier manufacturer and exporter of high-quality ferro alloys and metal products based in Nagpur, India." />
        <meta name="keywords" content="Ferro Alloys, Silico Manganese, Ferro Manganese, Ferro Silicon, Metal Manufacturer" />
        <title>BB Minerals and Metals | Leading Ferro Alloys Manufacturer in India</title>
        <link rel="canonical" href="https://bbmam.in/" />
      </Helmet>
      
      <Router>
        <RouteChangeTracker />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/products" element={<ProductDetail />} />
            <Route path="/company/excellence" element={<Excellence />} />
            <Route path="/company/vision-mission" element={<VisionMissionPage />} />
            <Route path="/company/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/company/profile" element={<CompanyProfilePage />} />
            <Route path="/company/history" element={<HistoryPage />} />
            <Route path="/company/promoter-message" element={<DirectorMessage />} />
            <Route path="/company/manufacturing-unit" element={<Manufacturing />} />
            <Route path="/eco-friendly-sustainability" element={<EcoFriendly />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/company/gallery" element={<Gallery />} /> {/* Added Gallery route */}
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
