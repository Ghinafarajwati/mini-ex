import React from 'react'
import Navbar2 from '../../Components/Navbar/Navbar2'
import MultiSlider from '../../Components/Slider/MultiSlider'
import CityInJava from '../About/CityInJava'
import "../About/About.css"

import Background from '../../Images/background2.jpg'
import BorobudurAbout from '../../Images/borobudurAbout.png'
import AboutPic from '../../Images/aboutPic.png'


export default function About() {
  return (
    <>
    <Navbar2></Navbar2>
      <div className='about-image'>
      <img src={Background}></img>
      </div>

      <div className='about-gradient'></div>
      
      <div className='about-title'>
        <h1>JAVA</h1>
      </div>

      <div className='about-slider'>
        <MultiSlider></MultiSlider>
      </div>

      <div className='container-about'>
        <div className='flex w-9/12 mx-auto'>
        <div className='about-text text-white w-6/12'>
            <h1>- About Java</h1>
            <p style={{fontSize: "15px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className='about-pic w-7/12'>
          <img src={BorobudurAbout}></img>
          </div>
        </div>
      </div>

      <div className='container-about'>
        <div className='flex w-10/12 mx-auto'>
          <div className='about-java text-white w-7/12'>
          <img src={AboutPic}></img>
          </div>
          <div className='about-text text-white w-7/12'>
            <h1>- Java</h1>
            <p style={{fontSize: "15px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>

      <CityInJava></CityInJava>
    </>
  )
}
