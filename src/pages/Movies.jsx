import React from 'react';
import requests from '../Request';
import Navbar from '../components/Navbar';
import { Carousel } from '../components/Carousel';
import Row1 from '../components/Row1';
import TopRow from '../components/TopRow';
import Row from '../components/Row';
import './Pages.css';
import Footer from '../components/Footer';

const Movies = () => {
  return (
    <>
      <Navbar />
      <h1>Movies</h1>
      <Carousel fetchURL={requests.requestPopular}/>
      <Row1 rowID='1' title='Recommended movies' fetchURL={requests.requestUpcoming}/>
      <TopRow rowID='2' title='Amazon Originals and Exclusives' fetchURL={requests.requestTopRated}/>
      <Row rowID='3' title='Comedy movies' fetchURL={requests.requestComedy}/>
      <Row rowID='4' title='Subtitled movies' fetchURL={requests.requestAction}/>
      <Row rowID='5' title='Drama movies' fetchURL={requests.requestDrama}/>
      <Row rowID='6' title='Top movies' fetchURL={requests.requestHorror}/>
      <Row rowID='7' title='Mystery and thriller movies' fetchURL={requests.requestThriller}/>
      <Row rowID='8' title='Romance movies' fetchURL={requests.requestRomance}/>
      <Row rowID='9' title='Korean movies' fetchURL={requests.requestKorean}/>
      <Row rowID='`0' title='Kids and family movies' fetchURL={requests.requestKids}/>
      <Footer />
    </>
  )
}

export default Movies