import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(() => ({
  paper: {
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
    backgroundColor: "#fff",
    maxWidth: "80%",
    margin: "40px auto",
    overflow: "hidden",
    boxSizing: "border-box",
    padding: "28px",
    borderRadius: "18px",
    maxHeight: "calc(100vh - 80px)"
  }
}));

export function GDModal(props) {
  const classes = useStyles();

  const { children, onClose = () => undefined } = props;
  return (
    <Modal {...props} onClose={onClose}>
      <div className={classes.paper}>{children}</div>
    </Modal>
  );
}
