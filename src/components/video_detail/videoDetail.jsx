import React, {useRef, useState} from 'react';
import styles from './videoDetail.module.css';
import he from 'he';
import * as converter from '../../converter';

const VideoDetail = ({video, video: {snippet}}) => {
  const renderHTML = (escapedHTML: string) =>
    React.createElement('div', {
      dangerouslySetInnerHTML: {__html: escapedHTML},
    });
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.content}>
      <iframe
        className={styles.video}
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
      />
      <div className={styles.videoInfo}>
        <p className={styles.tags}>
          {snippet.tags && snippet.tags.map((tag) => `#${tag} `).slice(0, 5)}
        </p>
        <h2 className={styles.title}>{he.decode(video.snippet.title)}</h2>
        <div className={styles.metadata}>
          {/* <p>{`조회수 ${converter.viewConverter(
            video.statistics.viewCount
          )}`}</p> */}
          {/* <p>●</p> */}
          <p>{`최초공개: ${converter.dateConverter(
            video.snippet.publishedAt
          )}`}</p>
          {/* <p>
          {`조회수 ${converter.viewConverter(
            video.statistics.viewCount
          )} ● ${converter.dateConverter(video.snippet.publishedAt)}`}
        </p> */}
          <div>
            <button>
              <i className="fa-solid fa-thumbs-up"></i>&nbsp;
              {/* <p>{video.statistics.likeCount}</p> */}
              좋아요
            </button>
            <button>
              <i className="fa-solid fa-thumbs-down"></i>&nbsp; 싫어요
            </button>
            <button>
              <i className="fa-solid fa-share"></i>&nbsp; 공유
            </button>
            <button>
              <i className="fa-solid fa-bookmark"></i>&nbsp; 저장
            </button>
            <button>
              <i className="fa-solid fa-ellipsis"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.channelInfo}>
          <div>
            <div>
              <img
                className={styles.img}
                src={video.channel.snippet.thumbnails.medium.url}
                alt={`channelThumbnail`}
              />
              <div className={styles.channelTitle}>
                <p>{snippet.channelTitle}</p>
                <p>
                  {video.channel.statistics.subscriberCount &&
                    `구독자 ${converter.subscriberConverter(
                      video.channel.statistics.subscriberCount
                    )}`}
                </p>
              </div>
            </div>
            <button className={styles.subscribeBtn}>구독</button>
          </div>
          <div className={styles.videoDescription}>
            <pre
              className={`${styles.description} ${
                open ? styles.open : styles.close
              }`}
            >
              {snippet.description}
            </pre>
            <button className={styles.moreBtn} onClick={() => setOpen(!open)}>
              {open ? '간략히' : '더보기'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
