import React, {useEffect, useState} from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/videoList';

function App() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=24&&regionCode=KR&key=${apiKey}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Navbar />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
