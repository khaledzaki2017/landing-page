import React, { Component } from "react";
import { images } from "../images";

//Header for Desktop View
export default class Header extends Component {
  render() {
    return (
      <div className="header forDesktop">
        <img src={images.img1} alt="man with a suit" />
        <img src={images.img9} alt="man with a suit" />
      </div>
    );
  }
}
