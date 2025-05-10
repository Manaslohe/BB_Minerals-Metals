"use client";
import * as React from "react";
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
  );
}

export default LandingPage;
