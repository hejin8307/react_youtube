import React from 'react';
import styles from './videoItem.module.css';
import he from 'he';
import * as converter from '../../converter';

const VideoItem = ({video, onSelect, display}) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  const renderHTML = (escapedHTML: string) =>
    React.createElement('div', {
      dangerouslySetInnerHTML: {__html: escapedHTML},
    });

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
        <div>
          <img
            className={styles.channelImg}
            src={video.channel.snippet.thumbnails.medium.url}
            alt={`channelThumbnail`}
          />
          <p className={styles.title}>{he.decode(video.snippet.title)}</p>
        </div>
        <div>
          <p className={styles.channelName}>{video.snippet.channelTitle}</p>
          {/* <p className={styles.count}>
            {`조회수 ${converter.viewConverter(
              video.statistics.viewCount
            )} ● ${converter.agoConverter(video.snippet.publishedAt)}`}
          </p> */}
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
