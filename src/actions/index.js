import api from "../api";
import { FETCH_ENTITIES } from "./types";

export const fetchEntities = () => async dispatch => {
  const response = await api.get("/entities");
  dispatch({ type: FETCH_ENTITIES, payload: response.data });
};
