import React from 'react'
import Herosec from './components/Herosection/Herosec'
import Services from './components/Services/Services'
import Steps from './components/Ordersection/Ordersec'
import Testimonials from './components/ClientTestimonials/Testimonial'
import Contact from './components/Contact/Contactus'

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
