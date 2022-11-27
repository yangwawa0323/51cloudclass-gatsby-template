import * as React from 'react'

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Link } from 'gatsby';
import { getTitle , formatDate } from '../../utils/tools';

const AsciinemaList = ({pageContext}) => {
  return (
    <div>
        <Navbar/>
        <main className='p-24'>
            <h5>Asciinema list</h5>
            {/* <p>{JSON.stringify(pageContext.asciinemas, null, 2)}</p> */}
            {pageContext.asciinemas.map( (ascii, index) => {
                const content = JSON.parse( ascii.content)
                const title = getTitle(content)
             return <div key={ascii.ID}>
                <span className="text-gray-600 font-semibold text-sm">{index + 1}:</span>
                <Link to={`/asciinema/${ascii.ID}`}> {getTitle(content)}</Link>
                <span className="pl-2 text-xs text-gray-500">{formatDate(new Date(ascii.CreatedAt),'yyyy-mm-dd HH:MM')}</span>
              </div>
            
            })   
            }
        </main>
        <Footer/>
    </div>
  )
}

export default AsciinemaList