import SongName from "./SongName";
import SongControl from "./SongControl";
const AudioPlayer = () => {
  return (
    <div className="audio-player">
      <SongName />
      <SongControl />
    </div>
  );
};

export default AudioPlayer;
