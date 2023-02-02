import axios from "axios";
import { API_STRUCTURE } from "../Reducers/AuthReducer";

export const getData = () => {
  return async (dispatch) => {
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );

      dispatch({ type: API_STRUCTURE, payload: reponse.data });
    } catch (e) {
      console.log("errorf", e);
    }
  };
};
