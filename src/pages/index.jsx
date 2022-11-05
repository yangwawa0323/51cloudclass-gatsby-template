import * as React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../styles/index.scss';

import ThreeCards from '../components/threecards';
import CompleteToolkit from '../components/completetoolkit';

function Index() {
  return (
    <div>
      <Navbar />
      <main>
        <div className='bg-white flex flex-col gap-[80px] h-min relative w-full items-center py-24 px-12 '>
          {/* Complete toolkit  */}
         <CompleteToolkit />
          {/* Three cards */}
          <ThreeCards />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Index;
