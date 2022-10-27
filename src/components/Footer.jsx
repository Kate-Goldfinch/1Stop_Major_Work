import React from 'react'
import logo from '../OneStopLogo.svg'

const Footer = () => {
  return (
    <div className='d-flex justify-content-end align-items-center py-4'>
        Powered by <span className='fw-bold mx-1'>1Stop</span>  
        <embed
        alt="1Stop Logo"
        src={logo}
        width="45"
        height="45"
        className="d-inline-block mx-2"
    />
  </div>
  )
}

export default Footer