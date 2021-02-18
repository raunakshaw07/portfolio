import {
  SUBMIT_MSG,
  FETCH_MSG,
  ITEM_LOADING,
  DELETE_MSG,
  FETCH_ONE_MSG,
} from "./types";
import axios from "axios";

export const submitMsg = (msg, flash) => (dispatch) => {
  axios.post("/message", msg).then((res) => {
    dispatch({
      type: SUBMIT_MSG,
      payload: { msg, flash },
    });
  });
};

export const fetchMsg = () => async (dispatch) => {
  dispatch(setItemLoading());
  const res = await axios.get("/message");
  dispatch({
    type: FETCH_MSG,
    payload: res.data,
  });
};

export const fetchOneMsg = (id) => async (dispatch) => {
  dispatch(setItemLoading());
  const res = await axios.get(`/message/${id}`);
  dispatch({
    type: FETCH_ONE_MSG,
    payload: res.data,
  });
};

export const deleteMsg = (id) => (dispatch) => {
  axios.delete(`/message/${id}`).then((res) => {
    dispatch({
      type: DELETE_MSG,
      payload: id,
    });
  });
};

export const setItemLoading = () => {
  return {
    type: ITEM_LOADING,
  };
};
