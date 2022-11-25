import React from 'react'
import Editor from '@react-page/editor'

import { baseCellPlugins } from '../../plugins/cellPlugins';
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'


const AsciinemaPage = ({ pageContext }) => {
  const { content } = pageContext
  return (
    <div>
      <Navbar />
      <div className='p-24'>
        <Editor
          cellPlugins={baseCellPlugins}
          value={content} readOnly />
      </div>
      <Footer />
    </div>
  )
}

export default AsciinemaPage