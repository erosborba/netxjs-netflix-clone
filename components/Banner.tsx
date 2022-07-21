import { useState, useEffect } from 'react'
import { Movie } from '../typings'
import { baseUrl } from '../utils/movie'
import Image from 'next/image';
import {FaPlay} from "react-icons/fa";
import { InformationCircleIcon } from '@heroicons/react/solid';
import React from 'react';

interface Props {
    netflixOriginals: Movie[]
}

function Banner(netflixOriginals: Props) {
    const [movie, setMovie] = useState<Movie | null>()
    useEffect(() => {
      netflixOriginals ?
        setMovie(
            netflixOriginals.netflixOriginals[Math.floor(Math.random() * netflixOriginals.netflixOriginals.length)]
        )
    : console.log('loading')} 
,[netflixOriginals.netflixOriginals])

  return (
    
    
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
    <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
      <img
        
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        
        
      />
    </div>

    <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl drop-shadow-md ">
      {movie?.title || movie?.name || movie?.original_name}
    </h1>
    <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl drop-shadow-md ">
      {movie?.overview}
    </p>
    <div className='flex space-x-3 drop-shadow-md '>
        <button className='bannerButton bg-white text-black'>
            <FaPlay className='h-4 w-4 text-black'/>  Play</button>
        <button className='bannerButton bg-[gray]/70'>Mais Info<InformationCircleIcon className='h-5 w-5 md:h-8 md:w8' /></button>
    </div>
    </div>
   )
}

export default Banner