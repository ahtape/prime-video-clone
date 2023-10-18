import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi"
import { MdKeyboardArrowDown } from "react-icons/md"
import './Navbar.css'

const Navbar = () => {

  const [scroll, setScroll] = useState(false)

  const navScroll = () => {
    if (window.scrollY >= 54) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener("scroll", navScroll)

  return (
    <div className={scroll ? 'navbar-container navbar-container__scroll' : 'navbar-container'}>
      <div className={scroll ? 'navbar navbar__scroll' : 'navbar'}>
        <a href="#">
          <img src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" className='prime-video-logo' alt="prime-video-logo" />
        </a>
        <div className='center'>
          <button>Home</button>
          <button>Movies</button>
          <button>TV Shows</button>
          <button className='categories'>
              Categories
              <MdKeyboardArrowDown className='down-arrow' size={25}/>
          </button>
          <button>My Stuff</button>
        </div>
        <div className='right'>
              <button className='search'><HiSearch size={28} /></button>
              <button className='profile'>
                  Profile
                  <img src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png" alt='profile'/>
              </button>
          </div>
      </div>
    </div>
  )
}

export default Navbar