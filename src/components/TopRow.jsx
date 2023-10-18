import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Row.css';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const TopRow = ({title, fetchURL, rowID}) => {
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
    <div className='top-row'>
        <div className='title'>
            <h2 className='prime-text'>Prime</h2>
            <h2 className='title-text'>{title}</h2>
        </div>
        <div className='slider-container'>
            <div className='arrows'>
                <MdKeyboardArrowLeft 
                    onClick={slideLeft}
                    className='arrow left' size={30}/>
                <MdKeyboardArrowRight
                    onClick={slideRight}
                    className='arrow right' size={30}/>
            </div>
            <div id={'slider' + rowID} className='slider'>
                {movies.map((item) => (
                    <div className='movies'>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item?.title} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default TopRow