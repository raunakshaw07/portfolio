import React, { useEffect } from "react";
import MaterialTable from "material-table";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  fetchMsg,
  deleteMsg,
  fetchOneMsg,
} from "../../../actions/messageAction";
import moment from "moment";

const MaterialTableDemo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMsg());
  }, [dispatch]);

  const messages = useSelector((state) => state.message.messages);
  const single = useSelector((state) => state.message.single);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [rowId, setRowId] = React.useState(null);
  const [state] = React.useState({
    columns: [
      {
        title: "Name",
        field: "name",
        sorting: false,
      },
      {
        title: "E-mail",
        field: "email",
        sorting: false,
      },
      {
        title: "Subject",
        field: "subject",
        sorting: false,
      },
      {
        title: "Date & Time",
        field: "sentAt",
        defaultSort: "desc",
        render: (rowData) => (
          <div style={{ display: "flex" }}>
            <p className="mr-3">
              {moment(rowData.sentAt).format("MMM Do, YYYY")}
            </p>
            <p>{moment(rowData.sentAt).format("h:mm:ss A")}</p>
          </div>
        ),
      },
    ],
  });
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);

  const handleClose = () => {
    setOpen(false);
  };
  const onClick = () => {
    dispatch(deleteMsg(rowId));
    setOpen(false);
  };

  switch (step) {
    case 1:
      return (
        <div className="container mt-3">
          <div className="inbox-container">
            <br />
            <br />
            <br />
            <MaterialTable
              title="Inbox Messages"
              columns={state.columns}
              data={messages}
              actions={[
                {
                  icon: "delete",
                  tooltip: "Delete Message",
                  onClick: (event, rowdata) => {
                    setRowId(rowdata._id);
                    setOpen(true);
                  },
                },
                {
                  icon: "label_important",
                  tooltip: "Read Message",
                  onClick: (event, rowdata) => {
                    dispatch(fetchOneMsg(rowdata._id));
                    setStep(2);
                  },
                },
              ]}
              onRowClick={(evt, selectedRow) =>
                setSelectedRow(selectedRow.tableData.id)
              }
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
                exportButton: true,
              }}
            />
          </div>

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
                Are You Sure You Want To Delete This Message ?
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
      return (
        <div
          className="container py-5 my-5 rounded-lg"
          style={{ background: "#fff", color: "#000", height: "80vh" }}
        >
          <div style={{ display: "flex" }}>
            <button
              className="btn border-right pr-3"
              onClick={() => setStep(1)}
            >
              <i className="fas fa-arrow-left mr-3"></i> GO BACK
            </button>
            <div className="ml-4">
              <h1>{single.name}</h1>
              <p>{single.email}</p>
            </div>
          </div>
          <hr width="100%" style={{ border: "0.5px solid #aaa" }} />
          <p style={{ display: "flex" }}>Subject : {single.subject}</p>
          <div className="msg-body" style={{ display: "flex" }}>
            <h5>Body :</h5>
            <p
              className="message-body"
              style={{ backgroundColor: "rgba(138, 213, 228, 0.4)" }}
            >
              {single.msg}
            </p>
          </div>
        </div>
      );
    default:
      console.log("error");
  }
};

export default MaterialTableDemo;
