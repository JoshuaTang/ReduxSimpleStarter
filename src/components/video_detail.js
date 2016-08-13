import React from 'react';


const VideoDetail = ({video}) => {
  // When the VideoDetail is first rendered, the videos may not
  // be obtained from YouTube. So, in this case, I just let it
  // show loading information.
  if (!video) {
    return (<div>Loading...</div>);
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;  // same as string concatenation. ES6 syntax.

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsie embed-responsie-16by9">
        <iframe className="embed-responsie-item" src={url}></iframe>
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};


export default VideoDetail;
