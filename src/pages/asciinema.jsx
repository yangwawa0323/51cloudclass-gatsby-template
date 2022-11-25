import React from "react";
import AsciinemaEditor from "../components/asciinema/AsciinemaEditor";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import '../styles/components/_asciinema.scss';
import IconButton from '@mui/material/IconButton'
import {ArrowForward } from '@mui/icons-material'

const Asciinema = () => {
const postData = async ()=>{
  await fetch()
}

  return (
      <div>
        <Navbar />
        <div
          style={{
            height: 'min-content',
            width: 'auto',
            padding: '150px 60px 100px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <p className="text-gray-400 text-center text-xs font-medium">Asciinema-player editor plugin v0.1.0 by @51cloudclass.</p>
          <AsciinemaEditor />
          <div>
            <IconButton aria-label="save" onClick={postData}>
             <ArrowForward /> 
            </IconButton>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default Asciinema;
