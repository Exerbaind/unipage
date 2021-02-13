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

export const beginToPrint = {
  type: "START_TEST",
  payload: {
    beginTest: true,
  },
};
