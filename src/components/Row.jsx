import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Row = ({title, fetchURL, rowID}) => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        });
    }, [fetchURL])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 1300;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 1300;
    }

  return (
    <div className='row'>
        <div className='title'>
            <h2 className='prime-text'>Prime</h2>
            <h2 className='title-text'>{title}</h2>
            <button className='see-more'>
                <p>See more</p>
                <MdKeyboardArrowRight size={30} color='white' />
            </button>
        </div>
        <div className='slider-container'>
            <div className='arrows'>
                <MdKeyboardArrowLeft className='arrow left' onClick={slideLeft} size={20} />
                <MdKeyboardArrowRight className='arrow right' onClick={slideRight} size={20} />
            </div>
            <div id={'slider' + rowID} className='slider'>
                {movies.map((item) => (
                    <div className='movies'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item?.title}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Row