import React from 'react'
import Card from '../../Components/Cards/Card'
import Navbar2 from '../../Components/Navbar/Navbar2'
import "../Home/Home.css"

import Background from '../../Images/background2.jpg'
import Jakarta from '../../Images/jakarta.jpg'
import Bandung from '../../Images/bandung.png'
import AboutPic from '../../Images/aboutPic.png'
import HomePic2 from '../../Images/homepic2.png'

import {RiFacebookCircleLine} from 'react-icons/ri'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RiTwitterLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Navbar2></Navbar2>
      <div className='home-image'>
      <img src={Background}></img>
      </div>

      <div className='gradient'></div>
      
      <div className='round-container'>
        <div className='round-box'>
        <img src={Jakarta}></img>
        <p>GET INTO THE FUTURE</p> <span><p>Jakarta</p></span>
        </div>
        <div className='round-box'>
        <img src={Bandung}></img>
        <p>FRIENDS WITH NATURE</p> <span><p>Bandung</p></span>
        </div>
        <div className='round-box'>
        <img src={Jakarta}></img>
        <p>TURN BACK THE TIME IN</p> <span><p>Yogyakarta</p></span>
        </div>
        <div className='round-box'>
        <img src={Bandung}></img>
        <p>GET IMPRESSED BY</p> <span><p>Malang</p></span>
        </div>
      </div>

      <div className='home-title'>
        <p>VISIT</p>
        <h1>JAVA</h1>
      </div>

      <Link to="/City" id="City">
      <div className='explore-btn text-white'>
      <button className='btn-expl'>Explore <span><i class="fa-solid fa-right-long ml-2"></i></span></button>
      </div>
      </Link>


      <div className='icon-sosmed'>
      <div className='fa-brands'><RiFacebookCircleLine /></div>
      <div className='fa-brands'><AiOutlineInstagram /></div>
      <div className='fa-brands'><RiTwitterLine /></div>
      </div>


      <div className='card-title'>
        <p>MEMORABLE JOURNEY</p>
        <h1>EXPLORE</h1>
      </div>
      <div className='card-content flex-row flex space-x-6 justify-center'>
      <Card
      img={Jakarta}
      title="NATURE"
      ></Card>
      <Card
      img={Bandung}
      title="CULTURE"
      ></Card>
      <Card
      img={Jakarta}
      title="SOCIETY"
      ></Card>
      </div>

      <div className='container-about'>
        <div className='flex w-9/12 mx-auto'>
          <div className='about-pic text-white w-7/12'>
          <img src={AboutPic}></img>
          </div>
          <div className='about-text text-white w-7/12'>
            <h1>- Welcome</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            <Link to="/About" id="About">
            <button className='about-btn'>About us <span><i class="fa-solid fa-right-long ml-2"></i></span></button>
            </Link>
          </div>
        </div>
      </div>

      <div className='holiday-title'>
        <p>ENJOY HOLIDAY</p>
        <h1>Where Would You Wanna Go?</h1>
      </div>
      <div className='holiday-img'>
      <img src={HomePic2}></img>
      </div>

      <div className='travel-title text-white'>
        <h1>TRAVEL INSPIRATION</h1>
        <p>Travel inspiration ideas for your next big travel adventure</p>
      </div>

      <div className='mt-10 mb-54 grid grid-cols-2 md:grid-cols-4 gap-4 mx-56'>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
        <div className='h-15 bg-blue-500 aspect-[4/3] rounded-lg'></div>
      </div>

      <div className='travel-title text-white'>
        <h1>GALLERY</h1>
        <p>Find Inspiration For Your Journey</p>
      </div>

      <div className='mt-10 mb-54 grid grid-cols-2 md:grid-cols-3 gap-4 mx-28'>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
        <div className='h-15 bg-blue-500 aspect-square rounded-sm'></div>
      </div>
    </>
  )
}
