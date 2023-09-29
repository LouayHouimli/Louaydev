import React, { useState } from 'react';

function VideoModal(props) {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="bs-example">
      <div className="modal fade" id="myModal" style={{ display: modalVisible ? 'block' : 'none' }}>
        <div className="modal-dialog modal-xl modal-ku">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.videoTitle}</h5>
              <button type="button" className="close" data-dismiss="modal" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  id="cartoonVideo"
                  className="embed-responsive-item"
                  width="1920"
                  height="315"
                  src={props.videoUrl}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <VideoModal videoTitle="LIVE #4 Cours Dipôle RC" videoUrl="https://www.youtube.com/embed/GpTLHSqFkOM" />

      <div id="cont">
        <a href="#myModal" data-toggle="modal">
          <div className="video">
            <img src="https://i3.ytimg.com/vi/GpTLHSqFkOM/maxresdefault.jpg" className="pic" alt="Video Thumbnail" />
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

export default Blog;
