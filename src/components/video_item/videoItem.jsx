import React from 'react';
import styles from './videoItem.module.css';
import * as converter from '../../converter';

const VideoItem = ({video, onSelect, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    // <li className={styles.video} onClick={() => onSelect(video)}>
    <li
      className={`${styles.video} ${displayType}`}
      onClick={() => onSelect(video)}
    >
      <img
        className={styles.img}
        src={video.snippet.thumbnails.medium.url}
        alt={`image-${video.id}`}
      />
      <div className={styles.info}>
        <p className={styles.title}>
          {video.snippet.title.includes('&#39;')
            ? video.snippet.title.replace(/&#39;/g, "'")
            : video.snippet.title}
        </p>
        <p className={styles.channelName}>{video.snippet.channelTitle}</p>
        {/* <p className={styles.count}>
          {`조회수 ${converter.viewConverter(
            video.statistics.viewCount
          )} ● ${converter.agoConverter(video.snippet.publishedAt)}`}
        </p> */}
      </div>
    </li>
  );
};

export default VideoItem;
