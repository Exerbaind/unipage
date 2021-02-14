import axios from "axios";
import { fetchText } from "../api";

export const loadText = () => async (dispatch) => {
  const text = await axios.get(fetchText());
  dispatch({
    type: "FETCH_COMMON_TEXT",
    payload: {
      commonText: text.data,
    },
  });
};

export const toTestScreen = {
  type: "TO_TEST",
  payload: {
    beginTest: true,
  },
};

export const startTest = {
  type: "START_TEST",
  payload: {
    isStarted: true,
  },
};

export const toNextLetter = (letterIndex) => async (dispatch) => {
  dispatch({
    type: "NEXT_LETTER",
    payload: {
      currentLetter: letterIndex,
    },
  });
};

export const newMistake = (mistakeCounter) => async (dispatch) => {
  dispatch({
    type: "ADD_MISTAKE",
    payload: {
      mistakes: mistakeCounter,
    },
  });
};

export const symbolsPerMinute = (numberOfSymbols, timer) => async (
  dispatch
) => {
  dispatch({
    type: "COUNT_SYMBOLS",
    payload: {
      speed: Math.ceil((numberOfSymbols / timer) * 60),
    },
  });
};

export const countAccuracy = (numberOfMistakes, numberOfSymbols) => async (
  dispatch
) => {
  dispatch({
    type: "COUNT_ACCURACY",
    payload: {
      typingAccuracy: 100 - (numberOfMistakes * 100) / numberOfSymbols,
    },
  });
};

export const endTestAction = {
  type: "END_TEST",
  payload: {
    endTest: true,
  },
};
