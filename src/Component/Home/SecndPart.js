import React from 'react'
import img7 from '../image/img7.png'
import whyUs from './whyUs.css'
const SecndPart = () => {
  return (
    <div>
        <div className="second">
            <div className="right-prt-one">
<img src={img7} alt="" />
            </div>
            <div className="left-prt-one">
<h2>
Shortlist Your Favourite Properties
</h2>
<ul>
    <li> <span style={{color:'black', fontWeight:'bolder'}}>Time-Saving:</span> Saves users’ time by eliminating the need
to repeatedly search for the same properties</li>
    <li><span  style={{color:'black', fontWeight:'bolder'}}>Personalized Experience:</span> Enhances user experience by
allowing the creation of customized lists based on preferences

or specific locations.</li>
    <li><span style={{color:'black', fontWeight:'bolder'}}> Access to Last Viewed Properties:</span> Users can swiftly
resume their search, picking up right where they left off</li>
  
</ul>
            </div>
        </div>
    </div>
  )
}

export default SecndPart