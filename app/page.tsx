import React from 'react'
import Herosec from './components/Herosection/Herosec'
import Services from './components/Services/service'
import Steps from './components/Ordersection/Ordersec'
import Testimonials from './components/ClientTestimonials/testimonials'
import Contact from './components/Contact/contact'

export default function HomePage() {
  return (
    <div>
      <Herosec/>
      <Services/>
      <Steps/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}
