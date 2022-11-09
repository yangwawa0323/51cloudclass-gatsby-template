import * as React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/index.scss';

import ThreeCards from '../components/threecards';
import CompleteToolkit from '../components/completetoolkit';
import CompletedPages from '../components/completedpages';
import BoostSection from '../components/boost';
import EssentialSection from '../components/essential';

function Index() {
  return (
    <div>
      <Navbar />
      <main>
        <div className='bg-white flex flex-col gap-[80px] h-min relative w-full items-center'>
          <div className='w-full flex flex-col justify-center items-center gap-20 boost-section'>
            {/* Boost Section */}
            <BoostSection />
          </div>

          <div className='px-12 py-24 flex flex-col justify-center items-center gap-20 completed-toolkit'>

            {/* Complete toolkit  */}
            <CompleteToolkit />

            {/* Three cards */}
            <ThreeCards />
          </div>
          <div className='px-12 pb-24 w-full justify-center flex' >

            {/* Completed pages */}
            <CompletedPages />
          </div>
          <div className='w-full' style={{backgroundColor: '#f6f4ff' }}>
            {/* Essential section */}
            <EssentialSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
