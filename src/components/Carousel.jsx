import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import './Carousel.css'
import './Row.css'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export const Carousel = ({fetchURL, rowID}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  let [movies, setMovies] = useState([])

  useEffect(()=> {
      axios.get(fetchURL).then((response) => {
          setMovies(response.data.results)
      });
  }, [fetchURL])

  movies = movies.slice(0, 10);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className='arrows'>
                <MdKeyboardArrowLeft 
                    onClick={scrollPrev}
                    className='arrow left' size={30} />
                <MdKeyboardArrowRight
                    onClick={scrollNext}
                    className='arrow right' size={30} />
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            {movies.map((item) => (
              <div className='embla__slide'>
                <img src={`https://image.tmdb.org/t/p/w780/${item.backdrop_path}`} alt={item?.title}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}