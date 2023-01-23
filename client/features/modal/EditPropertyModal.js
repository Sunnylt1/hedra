import React from "react";
import EditPropertyForm from "../Form/EditProperty";

const EditPropertyModal = ({ closeModalOther }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="button-34" onClick={() => closeModalOther(false)}>
            X
          </button>
        </div>
        <div className="modalTitle">
          <h2>Edit Property:</h2>
        </div>
        <div className="modalBody">
          <EditPropertyForm />
        </div>
      </div>
    </div>
  );
};

export default EditPropertyModal;
