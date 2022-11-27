import * as React from 'react'

import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Link } from 'gatsby';

const AsciinemaList = ({pageContext}) => {
  return (
    <div>
        <Navbar/>
        <main className='p-24'>
            <h5>Asciinema list</h5>
            {/* <p>{JSON.stringify(pageContext.asciinemas, null, 2)}</p> */}
            {pageContext.asciinemas.map( (ascii, index) => (
                <div key={ascii.ID}>
                    <Link to={`/asciinema/${ascii.ID}`}>
                        {index}:{ascii.ID}
                    </Link>
                </div>
            ))}
        </main>
        <Footer/>
    </div>
  )
}

export default AsciinemaList