import {
  SUBMIT_MSG,
  FETCH_MSG,
  FETCH_ONE_MSG,
  ITEM_LOADING,
  DELETE_MSG,
} from "../actions/types";

const initialState = {
  flash: "",
  loading: false,
  messages: [],
  single: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_MSG:
      return {
        ...state,
        messages: [action.payload.msg, ...state.messages],
        flash: action.payload.flash,
      };
    case FETCH_MSG:
      return {
        ...state,
        messages: action.payload,
        loading: false,
      };
    case FETCH_ONE_MSG:
      return {
        ...state,
        single: action.payload,
        loading: false,
      };
    case DELETE_MSG:
      return {
        ...state,
        messages: state.messages.filter((msg) => msg._id !== action.payload),
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return {
        ...state,
      };
  }
}
