import React from 'react'
import Navbar from '../components/Navbar'
import requests from '../Request'
import TopRow from '../components/TopRow'
import Row from '../components/Row'
import Row1 from '../components/Row1'
import Footer from '../components/Footer'
import { Carousel } from '../components/Carousel'

const Home = () => {
  return (
    <>
    <Navbar />
    <Carousel rowID='1' fetchURL={requests.requestPopular}/>
    <TopRow rowID='2' title='Amazon Originals and Exclusives' fetchURL={requests.requestTopRated}/>
    <Row1 rowID='3' title='Recommended movies' fetchURL={requests.requestUpcoming}/>
    <Row rowID='4' title='Horror movies' fetchURL={requests.requestHorror}/>
    <Row rowID='5' title='Action movies' fetchURL={requests.requestAction}/>
    <Row rowID='6' title='Thriller movies' fetchURL={requests.requestThriller}/>
    <Row1 rowID='7' title="TV shows we think you'll like" fetchURL={requests.requestTV}/>
    <Row rowID='8' title='Comedy movies' fetchURL={requests.requestComedy}/>
    <Row rowID='9' title='Romance movies' fetchURL={requests.requestRomance}/>
    <Row rowID='10' title='Drama movies' fetchURL={requests.requestDrama}/>
    <Row rowID='12' title='Documentary movies' fetchURL={requests.requestDocumentary}/>
    <Row rowID='13' title='Science fiction movies' fetchURL={requests.requestSciFi}/>
    <Footer />
    </>
  )
}

export default Home