import React from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const Trailer = ({movies}) => {
  const params = useParams ();
  const  movie = movies.find((movie)=>movie.trailerID === params.id)
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };
  
   let onReady = (event) => {
    event.target.pauseVideo();}
  
  return (
    <div>
     < YouTube videoId={movie.trailerID} opts={opts} onReady={onReady}/>
      </div>
  )
}

export default Trailer