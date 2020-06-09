import React from "react";

const ModalButton = ({ toggleModal }) => {
  return (
    <div className="modalButtonContainer">
      <h3>Click to preview </h3>
      <button className="modalButton" onClick={toggleModal}>
        CTA Button
      </button>
    </div>
  );
};

export default ModalButton;
