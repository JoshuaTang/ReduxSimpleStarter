import React from 'react';

// I need to pass videos from parent component to
// VideoList.
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};


export default VideoList;
