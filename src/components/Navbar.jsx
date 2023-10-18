import React, { useState } from 'react'
import { HiSearch } from "react-icons/hi"
import { MdKeyboardArrowDown } from "react-icons/md"
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

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
          <img src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png" className='prime-video-logo' alt="prime-video-logo"  onClick={() => navigate('/')}/>
        </a>
        <div className='center'>
          <button onClick={() => navigate('/')}>Home</button>
          <button onClick={() => navigate('/movies')}>Movies</button>
          <button onClick={() => navigate('/tvshows')}>TV Shows</button>
          <button className='categories' onClick={() => navigate('/categories')}>
              Categories
              <MdKeyboardArrowDown className='down-arrow' size={25}/>
          </button>
          <button onClick={() => navigate('/mystuff')}>My Stuff</button>
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