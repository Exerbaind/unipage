import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import playSong from "../../assets/play.svg";
import switchTrack from "../../assets/track-control.svg";
import pauseTrack from "../../assets/stop.svg";

import { isPlayingHandler, songSwitch } from "../../actions/audioPlayerAction";
const SongControl = () => {
  const dispatch = useDispatch();
  const songList = useSelector((state) => state.player.songs);
  const songIndex = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const audioRef = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [isPlaying, songIndex]);
  const songHandler = () => {
    if (isPlaying) {
      dispatch(isPlayingHandler(false));
      audioRef.current.pause();
    } else {
      dispatch(isPlayingHandler(true));
      audioRef.current.play();
    }
  };

  const nextSong = () => {
    if (songIndex >= songList.length - 1) {
      dispatch(songSwitch(0));
    } else {
      dispatch(songSwitch(songIndex + 1));
    }
  };

  const prevSong = () => {
    if (songIndex === 0) {
      dispatch(songSwitch(songList.length - 1));
    } else {
      dispatch(songSwitch(songIndex - 1));
    }
  };

  return (
    <div className="song-control-container">
      {songList[songIndex] && (
        <div className="song-control">
          <img
            src={switchTrack}
            alt=""
            className="song-control__track-switch prev-track"
            onClick={prevSong}
          />
          {isPlaying ? (
            <img
              src={pauseTrack}
              alt=""
              className="song-control__play"
              onClick={songHandler}
            />
          ) : (
            <img
              src={playSong}
              alt=""
              className="song-control__play"
              onClick={songHandler}
            />
          )}
          <img
            src={switchTrack}
            alt=""
            className="song-control__track-switch next-track"
            onClick={nextSong}
          />
          <audio ref={audioRef} src={songList[songIndex].audio}></audio>
        </div>
      )}
    </div>
  );
};

export default SongControl;
