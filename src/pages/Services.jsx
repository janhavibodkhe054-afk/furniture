import React from 'react'
import ServicesHero from '../components/services/ServicesHero'
import FurnitureServices from '../components/services/FurnitureServices'
import MoreServices from '../components/services/MoreServices'
import HowWeOperate from '../components/services/HowWeOperate'

const Services = () => {
  return (
    <div>
      <ServicesHero/>
      <FurnitureServices/>
      <HowWeOperate/>
      <MoreServices/>
    </div>
  )
}

export default Services
