import React from "react";
import AddTaskForm from "../Form/AddTask";

const AddTaskModal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="button-34" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div className="modalTitle">
          <h2>Add New Task:</h2>
        </div>
        <div className="modalBody">
          <AddTaskForm />
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
