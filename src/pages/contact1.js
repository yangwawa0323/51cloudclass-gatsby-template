import React from 'react'
import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import MapContainer from '../components/contact1/map'

const Contact1 = () => {
  return (
    <div>
      <Navbar backgroundColor={'#8800ff'} textColor={'white'} />
      <main>
        <MapContainer />
      </main>
      <Footer />
   </div>
  )
}

export default Contact1