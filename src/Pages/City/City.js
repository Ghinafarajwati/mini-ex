import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "../City/City.css"

import CityPic from '../../Images/city.png'

export default function City() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='about-image'>
      <img src={CityPic}></img>
      </div>

      <div className='about-gradient'></div>

      <div className='about-title'>
        <h1>JAVA</h1>
      </div>
      
    </div>
  )
}
