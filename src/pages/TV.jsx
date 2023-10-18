import React from 'react'
import requests from '../Request'
import Navbar from '../components/Navbar'
import { Carousel } from '../components/Carousel'
import Row1 from '../components/Row1'
import TopRow from '../components/TopRow'
import Row from '../components/Row'
import Footer from '../components/Footer'

const TV = () => {
  return (
    <>
    <Navbar />
    <h1>TV shows</h1>
    <Carousel fetchURL={requests.requestTV}/>
    <Row1 rowID='1' title='Prime Subtitled TV' fetchURL={requests.requestUpcoming}/>
    <TopRow rowID='2' title='Amazon Originals and Exclusives' fetchURL={requests.requestPopular}/>
    <Row rowID='3' title="TV shows we think you'll like" fetchURL={requests.requestTV}/>
    <Row rowID='4' title='Korean TV' fetchURL={requests.requestKorean}/>
    <Row rowID='5' title='Mystery and thriller TV' fetchURL={requests.requestThriller}/>
    <Row rowID='6' title='Drama TV' fetchURL={requests.requestDrama}/>
    <Row rowID='7' title='Top TV' fetchURL={requests.requestTopRated}/>
    <Row rowID='8' title='Anime TV' fetchURL={requests.requestAnime}/>
    <Row rowID='9' title='Recently added TV' fetchURL={requests.requestUpcoming}/>
    <Row rowID='10' title='Romance TV' fetchURL={requests.requestRomance}/>
    <Footer />
    </>
  )
}

export default TV