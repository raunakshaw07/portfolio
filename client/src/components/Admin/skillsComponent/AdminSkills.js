import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";
import defImg from "../../../images/project-img.jpg";
import { storage } from "../../../firebase";
import { addSkill } from "../../../actions/skillsAction";
import Status from "./Status";

import {
  fetchOneSkill,
  fetchSkills,
  deleteSkill,
} from "../../../actions/skillsAction";
import UpdateSkill from "./UpdateSkill";

const AdminSkills = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const data = useSelector((state) => state.skill.items);
  const single = useSelector((state) => state.skill.single);
  const [step, setStep] = useState(1);
  const [open, setOpen] = React.useState(false);
  const [rowId, setRowId] = React.useState(null);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [imagePreview, setImagePreview] = useState(defImg);
  const [imageAsFile, setImageAsFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [type, setType] = useState(null);
  const [url, setUrl] = useState(null);
  const [status, setStatus] = useState(null);

  const [state] = React.useState({
    columns: [
      {
        id: 1,
        title: "Title",
        field: "title",
        sorting: false,
      },
      {
        id: 2,
        title: "Type",
        field: "type",
        sorting: false,
      },
      {
        id: 3,
        title: "Date & Time",
        field: "sentAt",
        defaultSort: "desc",
        render: (rowData) => (
          <div style={{ display: "flex" }}>
            <p className="mr-3">
              {moment(rowData.createdAt).format("MMM Do, YYYY")}
            </p>
            <p>{moment(rowData.createdAt).format("h:mm:ss A")}</p>
          </div>
        ),
      },
    ],
  });

  const handleClose = () => {
    setOpen(false);
  };
  const onClick = () => {
    dispatch(deleteSkill(rowId));
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
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
          .then((imgUrl) => {
            const skill = { title, desc, type, url, imgUrl };
            const flash = "Successfully added!";
            setStatus("Successfully added");
            dispatch(addSkill(skill, flash));
          });
      }
    );
  };

  switch (step) {
    case 1:
      return (
        <div className="container">
          <button
            className="btn nav-bg text-light mt-5 mb-3 px-3 py-2"
            onClick={() => setStep(3)}
          >
            <h5>
              <i className="fas fa-plus-circle mr-3"></i>
              Add Skills
            </h5>
          </button>
          <MaterialTable
            title="Skills"
            columns={state.columns}
            data={data}
            actions={[
              {
                icon: "delete",
                tooltip: "Delete Skill",
                onClick: (event, rowdata) => {
                  setRowId(rowdata._id);
                  setOpen(true);
                },
              },
              {
                icon: "edit",
                tooltip: "Edit Skill",
                onClick: (event, rowdata) => {
                  dispatch(fetchOneSkill(rowdata._id));
                  setStep(2);
                },
              },
            ]}
            options={{
              headerStyle: {
                fontSize: "1.3rem",
                fontWeight: "bolder",
                backgroundColor: "rgba(138, 213, 228, 0.4)",
              },
              rowStyle: (rowData) => ({
                backgroundColor:
                  selectedRow === rowData.tableData.id ? "#EEE" : "#FFF",
              }),
            }}
            onRowClick={(evt, selectedRow) =>
              setSelectedRow(selectedRow.tableData.id)
            }
          />

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Confirm Delete"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this skill ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{ outline: "none" }}
                color="primary"
              >
                No
              </Button>
              <Button
                onClick={onClick}
                style={{ outline: "none" }}
                color="primary"
                autoFocus
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    case 2:
      // console.log(single);
      return (
        <div className="container my-5">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <button className="btn text-light" onClick={() => setStep(1)}>
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
            <div className="p-2 bd-highlight">
              <h3>Update Skill</h3>
            </div>
          </div>
          <UpdateSkill single={single} setStep={setStep} />
        </div>
      );
    case 3:
      return (
        <div className="container my-5">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="p-2 bd-highlight">
              <button className="btn text-light" onClick={() => setStep(1)}>
                <i className="fas fa-arrow-left"></i>
              </button>
            </div>
            <div className="p-2 bd-highlight">
              <h3>Add Skill</h3>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title of Skill</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="desc">Description</label>
                  <textarea
                    className="form-control"
                    id="desc"
                    rows="3"
                    onChange={(e) => setDesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select
                    className="form-control"
                    id="type"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option selected="selected" disabled>
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
                    onChange={(e) => setUrl(e.target.value)}
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
                    <button className="btn nav-bg text-light">Add</button>
                  </div>
                  <div className="p-2 bd-highlight">
                    <button
                      className="btn nav-bg text-light"
                      onClick={() => setStep(1)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col"
              style={{ display: "grid", placeItems: "center" }}
            >
              <Status status={status} />
              <div
                className="image"
                style={{
                  height: "80%",
                  width: "80%",
                }}
              >
                <img
                  src={imagePreview}
                  alt="Preview"
                  style={{
                    height: "100%",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    default:
      console.log("error");
  }
};

export default AdminSkills;
