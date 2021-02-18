import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitBio } from "../../actions/bioAction";

const AdminBio = () => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setabout] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [step, setStep] = useState(1);

  const dispatch = useDispatch();
  const response = useSelector((state) => state.bio.response);

  const onChange = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   setStep(2);
  //   console.log(response);
  //   const fd = new FormData();
  //   fd.append("file", file);
  //   fd.append("name", name);
  //   fd.append("about", about);
  //   fd.append("email", email);

  //   dispatch(submitBio(fd));
  // };

  switch (step) {
    case 1:
      return (
        <div className="container">
          <h5 className="text-center mt-5">
            Your Bio will be displayed on the About section of the Website
          </h5>
          <form
            method="POST"
            action="/bio"
            encType="multipart/form-data"
            onSubmit={(e) => {
              e.preventDefault();
              // setStep(2);
              window.location.href = "/admin/success";
              console.log(response);
              dispatch(submitBio(name, about, email, file));
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "4rem",
                marginTop: "3rem",
              }}
            >
              <div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="name"
                    className="form-control mb-4"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    className="form-control mb-4"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="about">About</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => setabout(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="custom-file mt-4">
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
                  onChange={onChange}
                />
                <label className="custom-file-label" htmlFor="customFile">
                  {filename}
                </label>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-block mt-4">Submit</button>
          </form>
        </div>
      );
    case 2:
      return (
        <div>
          <h1>Success</h1>
        </div>
      );
    default:
      console.log("Error");
  }
};

export default AdminBio;
