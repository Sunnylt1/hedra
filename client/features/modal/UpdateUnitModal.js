import React from "react";
import UpdateUnitForm from "../Form/UpdateUnit";

const UpdateUnitModal = ({ closeModal, unit }) => {
  return (
    <div className="modalBackground2">
      <div className="modalContainer2">
        <div className="titleCloseBtn">
          <button className="button-34" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div className="modalTitle">
          <h2>Update Unit Lease Terms:</h2>
        </div>
        <div className="modalBody">
          <UpdateUnitForm unit={unit} />
        </div>
      </div>
    </div>
  );
};

export default UpdateUnitModal;
