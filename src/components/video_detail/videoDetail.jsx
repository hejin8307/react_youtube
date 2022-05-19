import React from 'react';
import styles from './videoDetail.module.css';
import * as converter from '../video_item/converter';

const VideoDetail = ({video, video: {snippet}}) => {
  // console.log(video);
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${video.id}`} />
      <p className={styles.tags}>
        {snippet.tags && snippet.tags.map((tag) => `#${tag} `)}
      </p>
      <h2 className={styles.title}>{snippet.title}</h2>
      <div>
        <p>
          {`조회수 ${converter.viewConverter(
            video.statistics.viewCount
          )} ● ${converter.dateConverter(video.snippet.publishedAt)}`}
        </p>
        <button>
          <i className="fa-solid fa-thumbs-up"></i>
          <p>{video.statistics.likeCount}</p>
        </button>
        <button>
          <i className="fa-solid fa-thumbs-down"></i>
          <p>싫어요</p>
        </button>
        <button>
          <i className="fa-solid fa-share"></i>
          <p>공유</p>
        </button>
        <button>
          <i className="fa-solid fa-bookmark"></i>
          <p>저장</p>
        </button>
      </div>
      <div>
        <div>
          <p>{snippet.channelTitle}</p>
          <button>구독</button>
        </div>
        <p>{snippet.description}</p>
        <button>더보기</button>
      </div>
    </div>
  );
};

export default VideoDetail;
