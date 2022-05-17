import React, {useEffect, useState} from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/videoList';

function App({youtube}) {
  const [videos, setVideos] = useState([]);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Navbar onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
