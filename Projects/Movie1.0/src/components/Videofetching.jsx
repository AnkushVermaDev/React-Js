import React from 'react';
import './css/videoshower.css'
const Videofetching = ({ movie }) => {
  if (!movie) {
    return null; // Don't render anything if no movie is selected
  }


  {

    setTimeout(() => {
            document.querySelector('.video-container').style.display='block'
    }, 2000);
  }


  return (

<div className="mainscreenshower"> 
    <div className="video-container">
      <h2>{movie.Title}</h2>
      <video width="100%" height="auto" controls autoPlay>
        <source src={movie.VideoUrl} type="video/mp4" />
      </video>
      <h3>{movie.Title}</h3>
    </div>
    </div>
  );
};

export default Videofetching;
