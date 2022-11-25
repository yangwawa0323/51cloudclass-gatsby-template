import React from 'react'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import PlanSection from '../components/price2/Plan'

const Price2 = () => {
  return (
    <div className='flex flex-col gap-24'>
      <Navbar />
      <main>
        <PlanSection />
      </main>
      <Footer />
    </div>
  )
}

export default Price2