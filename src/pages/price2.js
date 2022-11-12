import React from 'react'
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import PlanSection from '../components/price2/plan'

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