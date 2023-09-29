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
      <div
        className="modal fade"
        id="myModal"
        style={{ display: modalVisible ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-xl modal-ku">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.videoTitle}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={closeModal}
              >
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

export default VideoModal;
