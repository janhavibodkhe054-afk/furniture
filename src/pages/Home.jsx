import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import VisitUsBar from '../components/Home/VisitUsBar'
import GallerySection from '../components/Home/GallerySection'
import SpazioSection from '../components/Home/SpazioSection'
import StorySection from '../components/Home/StorySection'
import Inclusions from '../components/Home/Inclusions'
import Testimonials from '../components/Home/Testimonials'
import HeroConsultation from '../components/Home/HeroConsultation'
import AboutSplitSection from '../components/Home/AboutSplitSection'
import WhyChooseUs from '../components/Home/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSplitSection/>
      <SpazioSection/>
      <GallerySection/>
      
      <StorySection/>
      <Inclusions/>
      <WhyChooseUs/>
      <Testimonials/>
      <HeroConsultation/>
    </div>
  )
}

export default Home
