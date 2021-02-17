import songsData from "../songsData";

export const loadSongs = {
  type: "FETCH_SONGS",
  payload: {
    songs: songsData(),
  },
};

export const isPlayingHandler = (flag) => async (dispatch) => {
  dispatch({
    type: "SONG_HANDLER",
    payload: {
      isPlaying: flag,
    },
  });
};

export const songSwitch = (nextSongID) => async (dispatch) => {
  dispatch({
    type: "SONG_SWITCH",
    payload: {
      currentSong: nextSongID,
    },
  });
};
