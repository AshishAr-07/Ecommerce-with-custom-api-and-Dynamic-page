import Cta from '@/app/_components/Cta'
import FAQSection from '@/app/_components/Faq'
import Testimonial from '@/app/_components/Testinomial'
import WhyChoose from '@/app/_components/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <>
    <WhyChoose/>
    <Cta/>
    <Testimonial/>
    <FAQSection/>
    <div className='py-6'></div>
    </>
  )
}
