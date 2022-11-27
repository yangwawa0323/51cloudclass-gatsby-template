import React, { useEffect } from 'react'
import Editor from '@react-page/editor'

import { baseCellPlugins } from '../../plugins/cellPlugins';
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { getTitle,debug } from '../../utils/tools';


const AsciinemaPage = ({ pageContext }) => {
  const { content } = pageContext
  useEffect(()=>{
    debug(getTitle(content))
  })
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