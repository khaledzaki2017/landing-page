import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HeaderCarousel from "./components/HeaderCarousel";
import HeadlineAndText from "./components/HeadlineAndText";

import ModalButton from "./components/ModalButton";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";
import UploadImages from "./components/UploadImages";

class App extends Component {
  state = {
    modalOn: false,
  };

  toggleModal = (e) => {
    const { modalOn } = this.state;

    if (
      e.target.className === "modalBackground" ||
      e.target.className === "modalButton" ||
      e.target.classList.contains("fa-times")
    ) {
      this.setState({ modalOn: !modalOn });
    } else {
      return;
    }
  };
  render() {
    const { modalOn } = this.state;
    return (
      <div className="App">
        <Navbar />
        <UploadImages />
        <Header />

        <HeaderCarousel />
        <div className="contentContainer">
          <HeadlineAndText headline="AppGain" />

          <ModalButton toggleModal={this.toggleModal} />
          <Modal modalOn={modalOn} toggleModal={this.toggleModal} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
