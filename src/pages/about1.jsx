import * as React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EastIcon from '@mui/icons-material/East';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const scrollAnimation = () => {
  ScrollTrigger.defaults({
    start: 'top 70%',
    end: 'top 45%',
    toggleActions: 'play none none reset',
    // markers: true,
  })

  gsap.from('.about-us', {
    y: '+=30%',
    opacity: 0.7,
  })

  gsap.from('.our-success > div', {
    scrollTrigger: {
      trigger: '.our-success'
    },
    y: '+=30%',
    opacity: 0.5,
  });

  gsap.from('.our-term > div', {
    scrollTrigger: {
      trigger: '.our-term'
    },
    y: '+=30%',
    opacity: 0.5,
  });

  gsap.from('.our-office > div', {
    scrollTrigger: {
      trigger: '.our-office'
    },
    y: '+=30%',
    opacity: 0.5,
  });


  gsap.from('.our-mission > div', {
    scrollTrigger: {
      trigger: '.our-mission'
    },
    y: '+=30%',
    opacity: 0.5,
  });

  
   gsap.from('.try-it-now > div', {
    scrollTrigger: {
      trigger: '.try-it-now'
    },
    y: '+=30%',
    opacity: 0.5,
  });
}

const About1 = () => {

  React.useEffect(() => {
    scrollAnimation();
  }, [])
  return (
    <div>
      <Navbar />
      {/* BEGIN main content */}
      <div className='about-us pt-[180px] px-[100px] pb-[100px] flex flex-col gap-20 justify-center items-center'>

        <div className='flex flex-col gap-4 justify-center items-center max-w-[720px]'>
          <div >
            <p className='uppercase text-purple-700 font-extrabold text-sm'>about us</p>
          </div>
          <div >
            <h1 className='-tracking-[1.5px]'>Empowering creators.</h1>
          </div>
          <div >
            <p className='break-words text-gray-500 text-center tracking-[0.2px] font-medium text-[24px]'>Quickly assemble pages from various categories that you can customize to your business's needs.</p>
          </div>
        </div>

        <div className='max-w-[1200px] h-[600px] overflow-hidden rounded-2xl shadow-md' >
          <div >
            <div >
              <img src="https://framerusercontent.com/images/x8MsMLzPw4oCKSmMNOuZy76n2Is.jpg" />
            </div>
          </div>
        </div>


      </div>
      {/* END main content */}
      <div className='our-success w-full bg-[#f6f4ff] p-24'>
        <div className='flex flex-row gap-24 max-[1200px] h-min'>
          <div className='flex-1 flex flex-col gap-4 justify-start'>
            <div >
              <p className='text-purple-700 font-extrabold uppercase text-sm'>Our success</p>
            </div>
            <div >
              <h2 >Leading development for modern teams.</h2>
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 grid-rows-2 gap-4'>
            <div className='flex flex-col justify-center items-center rounded-md border-[px] shadow-sm bg-white p-7 w-full'>
              <div >
                <h3 >20+</h3>
              </div>
              <div >
                <h3 className='text-gray-600 text-[18px]'>Prebuilt Pages</h3>
              </div>

            </div>
            <div className='flex flex-col justify-center items-center rounded-md border-[px] shadow-sm bg-white p-7 w-full'>

              <div >
                <h3 >60+</h3>
              </div>
              <div >
                <h3 className='text-gray-600 text-[18px]'>Sections</h3>
              </div>

            </div>
            <div className='flex flex-col justify-center items-center rounded-md border-[px] shadow-sm bg-white p-7 w-full'>

              <div >
                <h3 >80</h3>
              </div>
              <div >
                <h3 className='text-gray-600 text-[18px]'>Design Assets</h3>
              </div>

            </div>
            <div className='flex flex-col justify-center items-center rounded-md border-[px] shadow-sm bg-white p-7 w-full'>

              <div >
                <h3 >6</h3>
              </div>
              <div >
                <h3 className='text-gray-600 text-[18px]'>Team members</h3>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='our-term w-full flex flex-col gap-24 p-24 justify-center items-center'>
        <div className='flex flex-col gap-4 justify-center items-center max-w-[650px]'>
          <p className='text-purple-700 text-sm uppercase font-extrabold'>Our team</p>
          <h2 >Empowering creators.</h2>
          <p className='text-center text-gray-700 font-medium'>Combine sections from a range of categories to easily assemble pages that meet the needs of your growing business.</p>
        </div>
        <div className='grid grid-cols-3 grid-rows-2 max-[1200px] gap-4 w-full'>
          <div className='rounded-2xl shadow-md bg-gray-100 p-10 items-center justify-center flex flex-col'>
            <div className='hover:rotate-12 duration-500 aspect-[1/1] w-[128px]'>
              <img src="https://framerusercontent.com/images/nQxgk5Jrc6Hi2ef7svCdHo76FE.png" alt="Memoji" />
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div >
                <h4 >Jason Walter</h4>
              </div>
              <div >
                <p className='font-medium text-sm text-gray-500'>SEO</p>
              </div>
            </div>
          </div>
          <div className='rounded-2xl shadow-md bg-gray-100 p-10 items-center justify-center flex flex-col'>
            <div className='hover:rotate-12 duration-500 aspect-[1/1] w-[128px]'>
              <div >
                <div >
                  <img src="https://framerusercontent.com/images/F88dvZyjdx2hORzA9g7IjaYXezg.png" alt="Memoji" />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div >
                <h4 >Ayisha Cruz</h4>
              </div>
              <div >
                <p className='font-medium text-sm text-gray-500'>QA Engineer</p>
              </div>
            </div>
          </div>
          <div className='rounded-2xl shadow-md bg-gray-100 p-10 items-center justify-center flex flex-col'>
            <div className='hover:rotate-12 duration-500 aspect-[1/1] w-[128px]'>
              <div >
                <div >
                  <img src="https://framerusercontent.com/images/b1FbyNp7YdgmjybcyXXCV3zY3rE.png" alt="Memoji" />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div >
                <h4 >Arda Duncan</h4>
              </div>
              <div >
                <p className='font-medium text-sm text-gray-500'>Designer</p>
              </div>
            </div>
          </div>
          <div className='rounded-2xl shadow-md bg-gray-100 p-10 items-center justify-center flex flex-col'>
            <div className='hover:rotate-12 duration-500 aspect-[1/1] w-[128px]'>
              <div >
                <div >
                  <img src="https://framerusercontent.com/images/8elhWwpaCgr6mvHfML62dqzQAE.png" alt="Memoji" />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div >
                <h4 >Jess Smith</h4>
              </div>
              <div >
                <p className='font-medium text-sm text-gray-500'>Content Strategist</p>
              </div>
            </div>
          </div>
          <div className='rounded-2xl shadow-md bg-gray-100 p-10 items-center justify-center flex flex-col'>
            <div className='hover:rotate-12 duration-500 aspect-[1/1] w-[128px]'>
              <div >
                <div >
                  <img src="https://framerusercontent.com/images/bT0MILDSlwRoCGdjaP2je4Q.png" alt="Memoji" />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div >
                <h4 >Myah Piper</h4>
              </div>
              <div >
                <p className='font-medium text-sm text-gray-500'>Head of Operations</p>
              </div>
            </div>
          </div>
          <div className='rounded-2xl shadow-md bg-gray-100 p-10 items-center justify-center flex flex-col'>
            <div className='hover:rotate-12 duration-500 aspect-[1/1] w-[128px]'>
              <div >
                <div >
                  <img src="https://framerusercontent.com/images/MhvXK2BgzXfSUPIgRCv56eWI.png" alt="Memoji" />
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
              <div >
                <h4 >Piotr Barlow</h4>
              </div>
              <div >
                <p className='font-medium text-sm text-gray-500'>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className='our-office bg-gray-100 w-full p-24 flex flex-col justify-center items-center gap-20'>
        <div className='flex flex-col gap-4 justify-center items-center max-w-[560px]'>
          <p className='text-purple-700 font-extrabold uppercase text-sm'>Our offices</p>
          <h2 className='text-center break-words'>Our offices around the world.</h2>
        </div>
        <div className='grid auto-rows-auto grid-cols-3 gap-6 max-w-[1200px]'>
          <div className='rounded-[20px] shadow-lg hover:shadow-xl  bg-white p-8'>
            <div className='flex flex-col gap-8'>
              <div className='rounded-lg p-2 bg-gray-100 w-10 h-10 flex flex-col justify-center items-center'>
                <FmdGoodIcon htmlColor='rgb(136, 0, 255)' />
              </div>
              <div className='flex flex-col gap-4'>
                <h4 >Amsterdam </h4>
                <p className='whitespace-pre-wrap max-w-[60%] text-sm font-medium text-gray-500'>Singel 258
                  1234 AB Amsterdam
                  The Netherlands</p>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] shadow-lg hover:shadow-xl  bg-white p-8'>
            <div className='flex flex-col gap-8' >
              <div className='rounded-lg p-2 bg-gray-100 w-10 h-10 flex flex-col justify-center items-center'>
                <FmdGoodIcon htmlColor='rgb(136, 0, 255)' />
              </div>
              <div className='flex flex-col gap-4'>
                <h4 >Barcelona</h4>
                <p className='whitespace-pre-wrap max-w-[60%] text-sm font-medium text-gray-500'>C/ de València 373
                  08013 Barcelona
                  Spain</p>
              </div>
            </div>
          </div>
          <div className='rounded-[20px] shadow-lg hover:shadow-xl  bg-white p-8'>
            <div className='flex flex-col gap-8'>
              <div className='rounded-lg p-2 bg-gray-100 w-10 h-10 flex flex-col justify-center items-center'>
                <FmdGoodIcon htmlColor='rgb(136, 0, 255)' />
              </div>
              <div className='flex flex-col gap-4'>
                <h4 >London</h4>
                <p className='whitespace-pre-wrap max-w-[60%] text-sm font-medium text-gray-500'>Burlington House
                  W1J 0BD London
                  United Kingdom</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}


      <div className='our-mission flex flex-row gap-24 p-24'>
        <div className='flex-1 flex flex-col gap-4 max-w-[530px]'>
          <div >
            <p className='text-sm text-purple-700 font-extrabold uppercase'>Our mission</p>
          </div>
          <div >
            <h2 >We’re helping you to build better websites.</h2>
          </div>
          <div >
            <p className='text-gray-500 font-medium text-sm'>Combine sections from a range of categories to easily assemble pages that meet the needs of your growing business.</p>
          </div>
          <div >
            <div >
              <a className='flex flex-row gap-3 justify-start items-center cursor-pointer'>
                <p className='text-sm text-purple-700 font-extrabold uppercase'>Join our team</p>
                <EastIcon fontSize="14px" htmlColor='rgb(136,0,255)' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex-1 grid grid-cols-[repeat(2,minmax(200px,1fr))]  max-w-[570px] grid-rows-[repeat(2,min-content)] gap-4 h-min justify-center'>
          <div className='col-span-2 rounded-[10px] overflow-hidden opacity-80 hover:opacity-100 shadow-lg hover:shadow-xl  h-auto'>
            <img
              className=' object-cover'
              src="https://framerusercontent.com/images/p9hyHOsGihvVoRCOz9af0C8Q.jpg" />
          </div>
          <div className='rounded-[10px] overflow-hidden opacity-80 hover:opacity-100 duration-700 shadow-lg hover:shadow-xl' >
            <img className='object-cover  h-[275px] w-[299px]' src="https://framerusercontent.com/images/xTJots53J1tNU5byXL7DoqNrQJc.jpg" />
          </div>
          <div className='rounded-[10px] overflow-hidden opacity-80 hover:opacity-100 shadow-lg hover:shadow-xl'>
            <img className=' object-cover h-[275px] w-[299px]' src="https://framerusercontent.com/images/9wXcOZ9Y104tkWF0G0qyPSENWys.jpg" />
          </div>
        </div>
      </div>
      {/* */}
      <div className='out-partner flex flex-col gap-24 p-[100px] justify-center items-center bg-[#f6f4ff]'>
        <h2 >Meet our partners and investors.</h2>

      </div>
      {/*  */}
      <div className='scrolling-up try-it-now flex flex-col gap-12 p-[100px] justify-center items-center bg-[#7421fc]'>
        <div className='max-w-[600px] flex flex-col justify-center items-center' >
          <p className='text-gray-300 font-extrabold uppercase text-sm'>Try it now</p>
          <h2 className='text-center text-white break-words'>Build a website that performs better.</h2>
        </div>
        <div >
          <form className='flex flex-row items-center gap-4'>
            <input className='
              p-4 bg-[rgba(255,255,255,0.2)] outline-none border-none rounded-lg text-gray-200 w-[440px]
              '
              placeholder='Email address'
            />
            <input
              className='p-4 bg-white rounded-lg font-medium hover:bg-purple-300 duration-500'
              type="submit" value="Get started" />
          </form>
        </div>
        <div className='flex flex-row  gap-12 '>
          <div >
            <h5 className='text-white'>20+ Prebuilt Pages</h5>
          </div>
          <div >
            <h5 className='text-white'>60+ Sections</h5>
          </div>
          <div >
            <h5 className='text-white'>80 Design Assets</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About1