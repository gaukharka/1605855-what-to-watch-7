import React, {useRef, useEffect}  from'react';
import PropTypes from 'prop-types';

function VideoPreview(props) {
  const {previewImage, previewVideo, isActive} = props;

  const videoRef = useRef(null);

  useEffect(() => {
    let timeout;

    if(isActive) {
      timeout = setTimeout(() => videoRef.current.play(), 1000);
    } else {
      videoRef.current.pause();
    }

    return () => clearTimeout(timeout);
  }, [isActive]);

  return (
    <div className="small-film-card__image">
      <video
        muted
        height="175"
        type="video/mp4"
        src={previewVideo}
        poster={previewImage}
        ref={videoRef}
      />
    </div>
  );
}

VideoPreview.propTypes = {
  previewImage: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default VideoPreview;
