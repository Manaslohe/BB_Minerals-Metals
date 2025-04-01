"use client";
import * as React from "react";
import Header from "./Header";
import Hero from "../Hero";
import CompanyOverview from "./Companyoverview";
import BBInNumbers from "./Bin_numbers";
import ProductsSection from "./Product";
import ExpansionSection from "./Expansion";
import ExportCountries from "./ExportCountries";
import PartnersSection from "./Partner";
import FooterSection from "./Footer";
import BackToTop from "./BackToTop";

function LandingPage() {
  return (
    <main className="overflow-hidden bg-white">
      <Header />
      <Hero />
      <BBInNumbers />
      <CompanyOverview />
      <ProductsSection />
      <ExpansionSection />
      <ExportCountries />
      <PartnersSection />
      <FooterSection />
      <BackToTop />
    </main>
  );
}

export default LandingPage;
