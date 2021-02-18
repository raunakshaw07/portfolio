import {
  FETCH_SKILLS,
  WEBD_SKILLS,
  UI_SKILLS,
  GRAPHIC_SKILLS,
  ITEM_LOADING,
  FETCH_ONE_SKILL,
  DELETE_SKILL,
  ADD_SKILL,
  UPDATE_SKILL,
} from "../actions/types";

const initialState = {
  items: [],
  filtered: [],
  item: {},
  loading: false,
  single: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SKILLS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case WEBD_SKILLS:
      return {
        ...state,
        filtered: state.items.filter((skill) => skill.type === "webd"),
      };
    case UI_SKILLS:
      return {
        ...state,
        filtered: state.items.filter((skill) => skill.type === "ui"),
      };
    case GRAPHIC_SKILLS:
      return {
        ...state,
        filtered: state.items.filter((skill) => skill.type === "graphic"),
      };
    case ITEM_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ONE_SKILL:
      return {
        ...state,
        single: action.payload,
      };
    case DELETE_SKILL:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    case ADD_SKILL:
      return {
        ...state,
        items: [action.payload.skill, ...state.items],
        status: action.payload.flash,
      };
    case UPDATE_SKILL:
      return {
        ...state,
      };
    default:
      return state;
  }
}
