const initialState = {
  songs: [],
  currentSong: 0,
  isPlaying: false,
};

const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SONGS":
      return {
        ...state,
        songs: action.payload.songs,
      };
    case "SONG_SWITCH":
      return {
        ...state,
        currentSong: action.payload.currentSong,
      };
    case "SONG_HANDLER":
      return {
        ...state,
        isPlaying: action.payload.isPlaying,
      };
    default:
      return {
        ...state,
      };
  }
};

export default audioPlayerReducer;
