import * as React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LayersIcon from '@mui/icons-material/Layers';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PaletteIcon from '@mui/icons-material/Palette';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const ThreeCards = () => {

  ScrollTrigger.defaults({

  })
  gsap.registerPlugin(ScrollTrigger);


  React.useEffect(
    () => {


      const timeline = gsap.timeline({
         scrollTrigger: {
            trigger: ".building-block",
            scrub: 1,
            start: "bottom 75%",
            end: "bottom 45%",
            // markers: true
          },
      })

      const cards = gsap.utils.toArray('.card')

      cards.forEach((card, index) => {
        timeline.from(card, {
          y: 100,
          opacity: 0,
          // duration: 1.3,
        })
      })

    }, []
  )

  return (
    <div className='grid auto-rows-min justify-center gap-5 overflow-visible '
      style={{
        gridTemplateRows: 'repeat(2 , min-content)',
        gridTemplateColumns: 'repeat(3 , minmax(200px, 1fr))',
        height: '443px',
        maxWidth: '1200px',
      }}
    >
      <div >
        <div className='border rounded-2xl shadow-xl flex flex-col gap-8 p-10 card'>
          <div className='rounded-lg bg-gray-100 w-10 h-10 flex justify-center items-center'>
            <div className="text-purple-500">
              <LayersIcon />
            </div>
          </div>
          <div className='flex gap-4 flex-col'>
            <div >
              <div >
                <h3 className="text-xl">25+ Prebuilt Pages</h3>
              </div>
              <div >
                <p className='text-sm text-gray-500 leading-7'>Choose from 20+ pages from various categories. Customize your page,
                  hit publish and instantly see your site live. </p>
              </div>
            </div>
            <div >
              <div className='cursor-pointer text-purple-500 text-sm font-bold'>
                <a className='flex flex-row gap-1'>
                  <div >
                    <p>Explore pages</p>
                  </div>
                  <div >
                    <div >
                      <ArrowForwardIcon fontSize='1rem' />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className='border rounded-2xl shadow-xl flex flex-col gap-8 p-10 card' >
          <div className='rounded-lg bg-gray-100 w-10 h-10 flex justify-center items-center'>
            <div className='text-purple-500'>
              <ViewInArIcon />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div >
              <div >
                <h3 className="text-xl">60+ Sections</h3>
              </div>
              <div >
                <p className='text-sm text-gray-500 leading-7'>Build a unique experience by mixing and matching components.
                  Reuse content blocks and make your brand shine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div >
        <div className='border rounded-2xl shadow-xl flex flex-col gap-8 p-10 card'>
          <div className='rounded-lg bg-gray-100 w-10 h-10 flex justify-center items-center'>
            <div className='text-purple-500'>
              <PaletteIcon />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div >
              <div >
                <h3 className='text-xl'>Style Guidelines</h3>
              </div>
              <div >
                <p className="text-sm text-gray-500 leading-7" >Kickstart for every site to get your type, colors,
                  and component styles locked in and easy to update as needed.</p>
              </div>
            </div>
            <div >
              <div className='cursor-pointer text-purple-500 font-bold text-sm' >
                <a className='flex flex-row gap-1'>
                  <div >
                    <p>See Style Guide</p>
                  </div>
                  <div >
                    <ArrowForwardIcon fontSize='1rem' />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeCards