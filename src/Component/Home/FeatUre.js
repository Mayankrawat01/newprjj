import React from 'react'

import features from './features.css'
import clapperboard1 from '../image/clapperboard1.svg'
import event1 from '../image/event1.svg'
import taxi1 from '../image/taxi1.svg'
import img8 from '../image/img8.png'

const FeatUre = () => {
  return (
    <div className='fet-main'>
        <div className="feature">
       <div className="main-cont">
        <div className="left-prt">
<button className='btn12'>
  Why Us
</button>
<h3>Transforming Home Buying with Houseowls
</h3>
<h4>
Dive into the future of home buying with Houseowls, where our
</h4>
<h4 className='h44'>
video-first approach brings every detail of your potential new
</h4> <h4 className='h4'>
home right to your screen
</h4>
<div className="button-main">
  <div className="btn-main-1">
<button className='btn-3'>
<img src={clapperboard1} alt=""  className='btn123'/>

</button>

<p className='p1'>Video-Centric Approach</p>
</div>
<div className="btn-main-1">
<button className='btn-3'>
<img src={event1} alt="" className='btn123' />

</button>
<p className='p2'>Book Visits on Your Convenient Time and Day</p>
</div>
<div className="btn-main-1">
<button className='btn-3'>
<img src={taxi1} alt="" className='btn123' />

</button>
<p className='p3'>Pick and Drop for Premium Users</p>
</div>
</div>
        </div>
        <div className="right-prt">
<img src={img8} alt="" />
        </div>
       </div>
            
        </div>
    </div>
  )
}

export default FeatUre