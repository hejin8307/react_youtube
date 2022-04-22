import React, {Component} from 'react';
import styles from './videoItem.module.css';

class VideoItem extends Component {
  render() {
    const video = this.props.video;
    return (
      <li className={styles.video}>
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={`image-${video.id}`}
        />
      </li>
    );
  }
}

export default VideoItem;

//   <h1>{props.video.snippet.thumbnails.default.url}</h1>
