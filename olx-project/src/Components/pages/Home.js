import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import React from 'react'
import Navbarr from '../Navbarr';

export default function Home() {
  return (
    <div>
      <Navbarr />
      <HeroSection/>
      <Cards/>
      <Footer/>
    </div>
  )
}
