import React, { useState } from "react";
import classes from "./PostModal.module.css";

const PostModal = () => {
  const [additionalStyles, setAdditionalStyles] = useState({});

  const handleAddStyles = () => {
    setAdditionalStyles({
      display: "none",
    });
  };

  return (
    <div className={classes.container} style={{ ...additionalStyles }}>
      <div className={classes.modal}>
        <button onClick={handleAddStyles} className={classes.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </button>
        <div className={classes.modalContent}>
          <img className={classes.pic} src="./pics/images/modal.png" />
          <div className={classes.modalText}>
            <p className={classes.modalHeaderText}>
              A RECYCLING FACTORY AND WANT TO JOIN US?
            </p>
            <p className={classes.emailText}>
              Join our recycling community to create posts requesting materials
              and contribute to environmental conservation.{" "}
              <a href="/sign-up">Sign up here</a> to make a difference!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
