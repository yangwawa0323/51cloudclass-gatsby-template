import { Link } from 'gatsby';
import * as React from 'react'
import Footer from '../common/footer';
import Navbar from '../common/navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animation = () => {

  gsap.from('.entire-blog', {
    opacity: 0.6,
    y: '+10%',
    duration: 1.5,
  })

  gsap.from(".stay-in-the-loop-form", {
    scrollTrigger: {
      trigger: ".blogs-grid",
      // scrub: 1,
      start: "bottom 90%",
      end: "bottom 60%",
      toggleActions: 'play none none reverse',
      // markers: true,
    },
    ease: 'power4.inOut',
    duration: 1.5,
    y: '+60%',
    opacity: 0,
  });
}


const Blog1 = ({ pageContext }) => {

  ScrollTrigger.defaults({

  });


  React.useEffect(() => {
    animation()

  }, [])

  return (
    <div>
      <Navbar />
      <div
         style={{
            background: 'linear-gradient(0deg,var(--token-0cdf47b3-ce1f-4341-98ec-f094608541cb, #f6f4ff) 0%,#fff 100%)',
          }}
        className='entire-blog pt-24 px-12 pb-24 flex flex-col gap-16 justify-center items-center'>
        <div
          className=' max-w-[470px] flex flex-col gap-4 justify-center items-center'>
          <div >
            <h1 >Blog</h1>
          </div>
          <div >
            <p className='text-center font-medium text-[24px] text-gray-600 break-words'>Find all of our latest stories and subscribe to our newsletter for more.</p>
          </div>
          <div >
            <div >
              <form className='grid grid-cols-[1fr_max-content] grid-rows-1 relative gap-0'>
                <div className='hidden absolute' >
                  <input type="text" tabIndex="-1" />
                </div>
                <input
                  className='p-[15px] text-gray-600 font-semibold bg-gray-100 focus:bg-gray-50 duration-300 rounded-l-lg outline-none'
                  type="email" name="email" placeholder="email@framer.com" />
                <div >
                  <input
                    style={{
                      background: 'rgb(116, 33, 252)',
                    }}
                    value="subscribe"
                    className='text-white p-[15px] h-full hover:text-gray-300  duration-500 text-sm font-medium outline-none border-none cursor-pointer rounded-r-lg' type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div >
          <div
            className='blogs-grid grid grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-[repeat(2,min-content)] gap-4 auto-rows-min h-min justify-center max-w-[1200px] w-full'>
            {pageContext.blogs.map(blog => (
              <div key={blog.title} className='rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'>
                <Link to={`/blog/${blog.title.toLowerCase().replace(/ /g, '-')}`}>
                  <div className='h-[334px] overflow-hidden'>
                    <img
                      className='w-full h-full object-cover'
                      src={blog.image} alt={blog.title} />
                  </div>
                  <div className='flex flex-col p-8 gap-2'>
                    <div >
                      <p className='uppercase font-extrabold text-purple-700 text-sm'>{blog.type}</p>
                    </div>
                    <div >
                      <h4 >{blog.title}</h4>
                    </div>
                    <div >
                      <p >{blog.description}</p>
                    </div>
                  </div>
                </Link>
              </div>)
            )
            }
          </div>
        </div>
      </div>
      {/*  */}
      <div className='stay-in-the-loop-form flex flex-col p-16 justify-center items-center bg-white' >
        <div className='flex flex-col justify-center items-center max-w-[500px] gap-4'>
          <div >
            <p className='uppercase text-purple-700 font-extrabold'>stay in the loop</p>
          </div>
          <div >
            <h2 className='break-words text-center'>Subscribe for more inspiration.</h2>
          </div>
          <div >
            <div >
              <form className='relative flex flex-row justify-center items-center h-min'>
                <div className='hidden absolute'>
                  <input type="text" tabIndex="-1" />
                </div>
                <input
                  className='h-full p-[15px] focus:bg-gray-200   bg-gray-100 text-gray-800 rounded-l-lg border-none outline-none'

                  type="email" name="email" placeholder="email@framer.com" />
                <div >
                  <input
                    className='h-full p-[15px] border-none rounded-r-lg text-white bg-purple-700 hover:bg-purple-600 text-sm duration-500  hover:text-gray-400' value="subscribe"
                    type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog1