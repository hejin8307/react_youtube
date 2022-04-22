import React from 'react';
import styles from './videoList.module.css';
import VideoItem from '../video_item/videoItem';

const VideoList = (props) => (
  <ul className={styles.videoList}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
