import React, { useState, createRef } from "react";
import { useDispatch } from "react-redux";
import Status from "./Status";
import { storage } from "../../../firebase";
import { updateSkill } from "../../../actions/skillsAction";

const UpdateSkill = ({ single, setStep }) => {
  const titleRef = createRef();
  const descRef = createRef();
  const urlRef = createRef();
  const typeRef = createRef();
  const dispatch = useDispatch();
  const [status, setStatus] = useState(null);

  const { title, body, type, url, imgUrl } = single;
  const [imagePreview, setImagePreview] = useState(null);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [selected, setSelected] = useState(null);
  const [compTitle, setTitle] = useState(null);
  const [compDesc, setDesc] = useState(null);
  const [compUrl, setUrl] = useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (imageAsFile !== null) {
      if (imageAsFile === "") {
        console.error(
          `not an image, the image file is a ${typeof imageAsFile}`
        );
      }
      const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
      uploadTask.on(
        "state_changed",
        (snapShot) => {
          console.log(snapShot);
        },
        (err) => {
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((firebaseUrl) => {
              const skill = {
                title: titleRef.current.value,
                desc: descRef.current.value,
                type: typeRef.current.value,
                url: urlRef.current.value,
                imgUrl: firebaseUrl,
              };
              setStatus("Successfully added");
              dispatch(updateSkill(skill, single._id));
            });
        }
      );
    } else {
      const skill = {
        title: titleRef.current.value,
        desc: descRef.current.value,
        type: typeRef.current.value,
        url: urlRef.current.value,
        imgUrl: "",
      };
      setStatus("Successfully added");
      dispatch(updateSkill(skill, single._id));
    }
  };

  return (
    <div className="row mt-4">
      <div className="col-6">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title of Skill</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={compTitle ? compTitle : title}
              onChange={(e) => setTitle(e.target.value)}
              ref={titleRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea
              className="form-control"
              id="desc"
              rows="3"
              value={compDesc ? compDesc : body}
              onChange={(e) => setDesc(e.target.value)}
              ref={descRef}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <select
              className="form-control"
              id="type"
              value={selected ? selected : type}
              ref={typeRef}
              onChange={(e) => {
                console.log(e.target.value);
                setSelected(e.target.value);
              }}
            >
              <option value="null" hidden>
                Select Type
              </option>
              <option value="webd">Web Development</option>
              <option value="ui">UI/UX Design</option>
              <option value="graphic">Graphic Design</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              className="form-control"
              id="link"
              value={compUrl ? compUrl : url}
              onChange={(e) => setUrl(e.target.value)}
              ref={urlRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thumbnail">Thumbnail</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                accept="image/*"
                onChange={(e) => {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImagePreview(reader.result);
                  };
                  reader.readAsDataURL(e.target.files[0]);
                  setImageAsFile(e.target.files[0]);
                }}
              />
              <label className="custom-file-label" htmlFor="customFile">
                Choose file
              </label>
            </div>
          </div>
          <div
            className="d-flex flex-row bd-highlight mb-3"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div className="p-2 bd-highlight">
              <button className="btn nav-bg text-light" type="submit">
                Update
              </button>
            </div>
            <div className="p-2 bd-highlight">
              <button
                className="btn nav-bg text-light"
                onClick={() => {
                  setImagePreview(null);
                  setStep(1);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="col" style={{ display: "grid", placeItems: "center" }}>
        <Status status={status} />
        <div
          className="image"
          style={{
            height: "80%",
            width: "80%",
          }}
        >
          <img
            src={imagePreview ? imagePreview : imgUrl}
            alt="Preview"
            style={{
              height: "100%",
              width: "100%",
              border: "2px dashed #000",
              padding: "1rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateSkill;
