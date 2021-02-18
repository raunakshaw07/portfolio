import { SUBMIT_BIO } from "../actions/types";

const initialState = {
  response: "",
  bio: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_BIO:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return { ...state };
  }
}
