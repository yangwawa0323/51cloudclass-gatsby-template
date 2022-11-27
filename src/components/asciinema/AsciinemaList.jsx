import * as React from 'react'

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Link } from 'gatsby';
import { getTitle , debug } from '../../utils/tools';

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
                    <Link to={`/asciinema/${ascii.ID}`}>
                       {index}: { title.trimEnd().length !== 0 ? title : "Empty title but you can click and see the content"  }
                    </Link>
                </div>
            
            })   
            }
        </main>
        <Footer/>
    </div>
  )
}

export default AsciinemaList