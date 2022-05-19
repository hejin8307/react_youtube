import React from 'react';
import styles from './videoList.module.css';
import VideoItem from '../video_item/videoItem';

const VideoList = ({videos, onSelect, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <ul className={`${styles.videoList} ${displayType}`}>
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onSelect={onSelect}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
