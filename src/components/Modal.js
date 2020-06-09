import React, { Component } from "react";

class Modal extends Component {
  render() {
    const { modalOn, toggleModal } = this.props;
    return modalOn === true ? (
      <div
        className="modalBackground"
        onClick={toggleModal}
        style={
          modalOn === true
            ? { animation: "appearAnim 0.5s" }
            : { animation: "disappearAnim 0.5s" }
        }
      >
        <div className="modalWrapper">
          <div className="modalContent">
            <i className="fas fa-times" onClick={toggleModal} />

            {/*  */}
          </div>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
