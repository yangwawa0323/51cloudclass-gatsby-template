import * as React from 'react';
import Footer from '../components/common/footer';
import Navbar from '../components/common/navbar';

// move the index.scss to navbar.js, otherwise by input the page URI 
// has not style defined.

// import '../styles/index.scss';

import ThreeCards from '../components/index/threecards';
import CompleteToolkit from '../components/index/completetoolkit';
import CompletedPages from '../components/index/completedpages';
import BoostSection from '../components/index/boost';
import EssentialSection from '../components/index/essential';
import { Link } from 'gatsby';
import FractionSection from '../components/index/fraction';

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
          <div id="pages" className='px-12 pb-24 w-full justify-center flex' >
            {/* Completed pages */}
            <CompletedPages />
          </div>
          <div className='w-full' style={{backgroundColor: '#f6f4ff' }}>
            {/* Essential section */}
            <EssentialSection />
          </div>
          <div className='w-full' style={{
            backgroundColor: '#7421fc',
          }}>
            {/* Fraction section */}
            <FractionSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
