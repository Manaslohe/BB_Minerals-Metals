"use client";
import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Hero from "../Hero";
import CompanyOverview from "./Companyoverview";
import BBInNumbers from "./Bin_numbers";
import ProductsSection from "./Product";
import Certi from "./Certi";
import ExportCountries from "./ExportCountries";
import PartnersSection from "./Partner";
import FooterSection from "./Footer";
import BackToTop from "./BackToTop";
import Laboratory from "./lab";
import About from "./bbman";

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>BB Minerals and Metals | Leading Ferro Alloys Manufacturer in India</title>
        <meta name="description" content="BB Minerals and Metals is a premier manufacturer and exporter of high-quality ferro alloys and metal products based in Nagpur, India. We offer superior-grade ferro manganese, silico manganese, and more." />
        <meta name="keywords" content="Ferro Alloys, Silico Manganese, Ferro Manganese, Ferro Silicon, Metal Manufacturer, Indian Ferro Alloys Exporter, BBMAM" />
        <meta property="og:title" content="BB Minerals and Metals | Ferro Alloys Exporter" />
        <meta property="og:description" content="Leading manufacturer and supplier of ferro alloys in India with global export capabilities." />
        <meta property="og:image" content="https://bbmam.in/logo.png" />
        <meta property="og:url" content="https://bbmam.in/" />
        <link rel="canonical" href="https://bbmam.in/" />
      </Helmet>
      <main className="overflow-hidden bg-gray-900">
        <Header />
        <Hero />
        <BBInNumbers />
        <CompanyOverview />
        <About />
        <ProductsSection />
        <Certi />
        <Laboratory />
        <ExportCountries />
        <PartnersSection />
        <FooterSection />
        <BackToTop />
      </main>
    </>
  );
}

export default LandingPage;
