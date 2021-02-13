const initialState = {
  commonText: [],
  mistakes: 0,
  currentLetter: 0,
  speed: 0,
  typingAccuracy: 100,
  beginTest: false,
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COMMON_TEXT":
      return {
        ...state,
        commonText: action.payload.commonText.join("").split(""),
      };
    case "START_TEST":
      return {
        ...state,
        beginTest: action.payload.beginTest,
      };
    case "NEXT_LETTER":
      return {
        ...state,
        currentLetter: action.payload.currentLetter,
      };
    case "ADD_MISTAKE":
      return {
        ...state,
        mistakes: action.payload.mistakes,
      };
    default:
      return {
        ...state,
      };
  }
};

export default gamesReducer;
