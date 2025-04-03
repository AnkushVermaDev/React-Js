import React, { useEffect, useState } from 'react';
import './css/homepage.css';
import Videofetching from './Videofetching';
import styles from './css/DarkLight.module.css'


const Homepage = () => {
  const [rawdata, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);

 
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/AnkushVermaDev/CustomMoviesApi/main/RetroPlex.json')
      .then((res) => res.json())
      .then((data) => {
        setdata(data.RetroPlex);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  function handleVideoClick(movie) {
    setSelectedVideo(movie);
  }

  return (
    <div className="mainpage">

      {loading ? (
        Array(6)
          .fill()
          .map((_, index) => <div key={index} className="skeleton-box"></div>)
      ) : (
        rawdata.map((item, index) => (
          <div key={item.id || index} className="Singlepage" onClick={() => handleVideoClick(item)}>
            <img src={item.imageUrl} alt={item.Title} />
            <h3>{item.Title}</h3>
          </div>
        ))
      )}

      {selectedVideo && <Videofetching movie={selectedVideo} />}
    </div>
  );
};

export default Homepage;
