import { SUBMIT_BIO } from "./types";
import axios from "axios";

export const submitBio = (name, about, email, file) => async (dispatch) => {
  const fd = new FormData();
  fd.append("name", name);
  fd.append("about", about);
  fd.append("email", email);
  fd.append("file", file);
  const res = await axios.post("/bio", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  dispatch({
    type: SUBMIT_BIO,
    payload: res.data,
  });
};
