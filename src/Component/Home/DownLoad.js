import React from 'react'
import download from './download.css'
import img2 from '../image/img2.png'
import img3 from '../image/img3.png'

const DownLoad = () => {
  return (
    <div>
       <div className="Download">
        <div className="download-scnd">
          <h1>Download Now</h1>
          <div className="download-main"> 
          <img src={img2}alt="" />
          <img src={img3} alt="" />
          </div>
          </div> 
        </div>
    </div>
  )
}

export default  DownLoad;