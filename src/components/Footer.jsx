import React from 'react'
import logo from '../OneStopLogo.png'

const Footer = () => {
  return (
    <div className='d-flex justify-content-end align-items-center py-4'>
        Powered by
        <embed
        alt="1Stop"
        src={logo}
        width="100"
        height="45"
        className="d-inline-block mx-2"
    />
  </div>
  )
}

export default Footer