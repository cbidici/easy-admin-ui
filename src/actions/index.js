import api from "../api";
import { FETCH_ENTITIES, FETCH_ATTRIBUTES, FETCH_ENTITY_DATA } from "./types";

export const fetchEntities = () => async dispatch => {
  const response = await api.get("/entities");
  dispatch({ type: FETCH_ENTITIES, payload: response.data });
};

export const fetchAttributes = entityKey => async dispatch => {
  const response = await api.get(`/entities/${entityKey}/attributes`);
  dispatch({
    type: FETCH_ATTRIBUTES,
    payload: { entityKey, data: response.data }
  });
};

export const fetchEntityData = entityKey => async dispatch => {
  const response = await api.get(`/entities/${entityKey}/data`);
  dispatch({
    type: FETCH_ENTITY_DATA,
    payload: { entityKey, data: response.data }
  });
};
