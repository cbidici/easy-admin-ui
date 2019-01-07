import { FETCH_ENTITIES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ENTITIES:
      return [...action.payload];
    default:
      return state;
  }
};
