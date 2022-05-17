import React, {Component} from 'react';
import styles from './videoItem.module.css';
import * as converter from './converter';

class VideoItem extends Component {
  render() {
    const video = this.props.video;
    return (
      <li className={styles.video}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={`image-${video.id}`}
        />
        <div className={styles.info}>
          <span className={styles.title}>{video.snippet.title}</span>
          <span className={styles.channelName}>
            {video.snippet.channelTitle}
          </span>
          {/* <p className={styles.count}>
            {`조회수 ${converter.viewConverter(
              video.statistics.viewCount
            )} ● ${converter.agoConverter(video.snippet.publishedAt)}`}
          </p> */}
        </div>
      </li>
    );
  }
}

export default VideoItem;
