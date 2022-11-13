import { Link } from 'gatsby';
import * as React from 'react'
import Footer from '../common/footer';
import Navbar from '../common/navbar';

const Blog1 = ({ pageContext }) => {
  return (
    <div>
      <Navbar />
      <div className='pt-24 px-12 pb-24 flex flex-col gap-24 justify-center items-center'>
        <div className='max-w-[470px] flex flex-col gap-4 justify-center items-center'>
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
                  <input type="text" tabindex="-1" />
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
          <div className='grid grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-[repeat(2,min-content)] gap-4 auto-rows-min h-min justify-center max-w-[1200px] w-full'>
            {pageContext.blogs.map(blog => (
              <div className='rounded-2xl overflow-hidden border-[2px] shadow-md hover:shadow-lg hover:scale-105 duration-500  h-full w-full place-self-start'>
                  <Link to={`/blog/${blog.title.toLowerCase().replace(/ /g,'-')}`}>
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
      <Footer />
    </div>
  )
}

export default Blog1