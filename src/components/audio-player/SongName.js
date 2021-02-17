import { useSelector } from "react-redux";
const SongName = () => {
  const songList = useSelector((state) => state.player.songs);
  const songIndex = useSelector((state) => state.player.currentSong);
  return (
    <div className="song-name">
      {songList[songIndex] && (
        <div>
          <p className="song-name__name">{songList[songIndex].name}</p>
          <p className="song-name__artist">{songList[songIndex].artist}</p>
        </div>
      )}
    </div>
  );
};

export default SongName;
