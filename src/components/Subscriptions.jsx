import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import './Subscriptions.css'

const Subscriptions = () => {
  return (
    <>
    <div className='subscriptions'>
        <h2>My Subscriptions</h2>
        <div className='link'>
            <p>Manage my channel subscriptions</p>
            <MdKeyboardArrowRight size={25}/>
        </div>
    </div>
    <img src="https://m.media-amazon.com/images/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/heroes/node-round-tile-entitled_1000x1000._CB594762822_UR1000,1000_AGaverage_SX375_FMwebp_.png" alt="prime-subscription" className='prime-subscription' />
    </>
  )
}

export default Subscriptions