import React, { useState } from "react";
import classes from "./PostModal.module.css";

const PostModal = () => {
  const [additionalStyles, setAdditionalStyles] = useState({});

  const handleAddStyles = () => {
    // Modify the styles object as needed
    setAdditionalStyles({
      display: "none",
    });
  };

  return (
    <div className={classes.container} style={{ ...additionalStyles }}>
      <div className={classes.modal}>
        Modal goes here
        <button onClick={handleAddStyles} className={classes.close}>
          x
        </button>
      </div>
    </div>
  );
};

export default PostModal;
