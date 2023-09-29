import React from 'react';
import VideoModal from './VideoModal';

function VideoGallery() {
  return (
    <div>
      <VideoModal
        videoTitle="LIVE #4 Cours Dipôle RC"
        videoUrl="https://www.youtube.com/embed/GpTLHSqFkOM"
      />

      <div id="cont">
        <a href="#myModal" data-toggle="modal">
          <div className="video">
            <img
              src="https://i3.ytimg.com/vi/GpTLHSqFkOM/maxresdefault.jpg"
              className="pic"
              alt="Video Thumbnail"
            />
            <label>LIVE #4 Cours Dipôle RC</label>
          </div>
        </a>
        <a href="#myModal1" data-toggle="modal">
          <div className="video"></div>
        </a>
        {/* Add more video links as needed */}
      </div>
    </div>
  );
}

export default VideoGallery;
