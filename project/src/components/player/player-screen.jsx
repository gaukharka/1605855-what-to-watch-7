import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getMovies } from '../../store/movie-data/selectors';
import { timeFormating } from '../../utils/utils';
import { seconds } from '../../consts';

function PlayerScreen() {
  const movies = useSelector(getMovies);
  const params = useParams();
  const [currentMovie] = movies.filter((item) => item.id === +params.id);
  const {name, backgroundImage, videoLink, runTime} = currentMovie;

  const history = useHistory();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const videoDuration = runTime*seconds;

  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const playOrPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const onProgress = (e) => setCurrentVideoTime(e.target.currentTime);

  const onFullScreen = (elem) => {
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="player" ref={playerRef}>
      <video
        src={videoLink}
        className="player__video"
        poster={backgroundImage}
        onProgress={onProgress}
        muted={false}
        ref={videoRef}
      >
      </video>

      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={`${(currentVideoTime/videoDuration)*100}%`}
              max="100"
            >
            </progress>

            <div
              className="player__toggler"
              style={{left: `${(currentVideoTime/videoDuration)*100}%`}}
            >Toggler
            </div>
          </div>
          <div className="player__time-value">{timeFormating(videoDuration - currentVideoTime)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={playOrPause}
          >
            {isVideoPlaying ?
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </> :
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>}
          </button>
          <div className="player__name">{name}</div>

          <button
            type="button"
            className="player__full-screen"
            onClick={() => onFullScreen(playerRef.current)}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerScreen;
