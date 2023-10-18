import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
    <img src="https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457934421/assets/c7f093f1e3630f402d3cf9e0ca74f6d1.Prime_Video_Logo_Mature_Market_Off_White_RGB.png" alt="pv-logo" className='pv-logo' />
    <ul className='footer-text'>
        <li>
            <a href="https://www.primevideo.com/ww-av-legal-home/ref=atv_ftr_ter" target='_blank' rel="noreferrer">Terms and Privacy Notice</a>
        </li>
        <li>
            <a href="https://www.primevideo.com/contactus/ref=atv_ftr_cu" target='_blank' rel="noreferrer">Send us feedback</a>
        </li>
        <li>
            <a href="https://www.primevideo.com/help/ref=atv_ftr_hp" target='_blank' rel="noreferrer">Help</a>
        </li>
        <li className='copyright-text'>© 1996-2023, Amazon.com, Inc. or its affiliates</li>
    </ul>
    </div>
  )
}

export default Footer