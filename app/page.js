'use client';
import Navbar from './components/navbar';
import HomePage from './components/hero';
import About from './components/About';
import React from 'react';
import ServicesSection from './components/ServicesSection';
import RatesAndInsurance from './components/RatesAndInsurance';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/footer';
import FaqSection from './components/FAQ';
import ContactForm from './components/contactform';
export default function Home() {
  return (
    <>
      <main>
        <Navbar/>
        <HomePage/>
        <About/>
        <ServicesSection/>
        <RatesAndInsurance/>
        <ExperienceSection/>
        <FaqSection/>
        <ContactForm/>
        <Footer/>
      </main>
    </>
  );
}