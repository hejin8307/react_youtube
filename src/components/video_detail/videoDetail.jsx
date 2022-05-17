import React from 'react';

const VideoDetail = ({selectedVideo}) => {
  // console.log(snippet);
  return (
    <div>
      <iframe src={`https://www.youtube.com/embed/${selectedVideo.id}`} />
      {/* <h2>{selectedVideo}</h2> */}
    </div>
  );
};

export default VideoDetail;
