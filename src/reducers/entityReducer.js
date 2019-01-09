import {
  FETCH_ENTITIES,
  FETCH_ATTRIBUTES,
  FETCH_ENTITY_DATA
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ENTITIES:
      return action.payload.reduce(
        (obj, item) => ({
          ...obj,
          ...{ [item["key"]]: { ...item, ...state[item["key"]] } }
        }),
        {}
      );
    case FETCH_ATTRIBUTES:
      return {
        ...state,
        [action.payload.entityKey]: {
          ...state[action.payload.entityKey],
          attributes: action.payload.data
        }
      };
    case FETCH_ENTITY_DATA:
      return {
        ...state,
        [action.payload.entityKey]: {
          ...state[action.payload.entityKey],
          data: action.payload.data
        }
      };
    default:
      return state;
  }
};
