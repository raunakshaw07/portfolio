import {
  FETCH_SKILLS,
  WEBD_SKILLS,
  UI_SKILLS,
  GRAPHIC_SKILLS,
  ITEM_LOADING,
  DELETE_SKILL,
  FETCH_ONE_SKILL,
  ADD_SKILL,
  UPDATE_SKILL,
} from "./types";
import axios from "axios";

export const fetchSkills = () => (dispatch) => {
  dispatch(setItemLoading());
  axios.get("/skills").then((res) =>
    dispatch({
      type: FETCH_SKILLS,
      payload: res.data,
    })
  );
};

export const webdSkills = () => {
  return {
    type: WEBD_SKILLS,
  };
};

export const uiSkills = () => {
  return {
    type: UI_SKILLS,
  };
};

export const graphicSkills = () => {
  return {
    type: GRAPHIC_SKILLS,
  };
};

export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  };
};

export const fetchOneSkill = (id) => async (dispatch) => {
  const res = await axios.get(`/skills/${id}`);
  dispatch({
    type: FETCH_ONE_SKILL,
    payload: res.data,
  });
};

export const deleteSkill = (id) => (dispatch) => {
  axios.delete(`/skills/${id}`);
  dispatch({
    type: DELETE_SKILL,
    payload: id,
  });
};

export const addSkill = (skill, flash) => (dispatch) => {
  axios.post("/skills/add", skill).then((res) => {
    dispatch({
      type: ADD_SKILL,
      payload: { skill, flash },
    });
  });
};

export const updateSkill = (skill, id) => (dispatch) => {
  axios.post(`/skills/update/${id}`, skill).then((res) => {
    dispatch({
      type: UPDATE_SKILL,
    });
  });
};
