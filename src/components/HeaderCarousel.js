import React, { Component } from "react";
import { imagesFour } from "../images";

// HeaderCarousel for Mobile view
class HeaderCarousel extends Component {
  state = {
    images: [],
    activeIndex: 0,
  };

  componentDidMount() {
    const imagesArr = Object.keys(imagesFour).map((img) => imagesFour[img]);
    this.setState({ images: imagesArr });

    setInterval(this.incActiveIndex, 5000);
  }

  incActiveIndex = () => {
    const { activeIndex, images } = this.state;
    if (activeIndex < images.length - 1) {
      this.setState({ activeIndex: activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  };

  decActiveIndex = () => {
    const { activeIndex, images } = this.state;
    if (activeIndex <= 0) {
      this.setState({ activeIndex: images.length - 1 });
    } else {
      this.setState({ activeIndex: activeIndex - 1 });
    }
  };

  render() {
    const { images, activeIndex } = this.state;
    const { carouselHeadline } = this.props;
    let output;
    let activeCircles;

    if (images.length === 0) {
      output = <h3>loading</h3>;
    } else {
      output = <img src={images[activeIndex]} alt="man with a suit" />;
      activeCircles = images.map((image, i) => (
        <div key={i} className="circle">
          <div className={activeIndex === i ? "innerCircle" : null} />
        </div>
      ));
    }

    return (
      <div className="headerCarousel forMobile forTablet">
        {output}
        <i
          className="far fa-arrow-alt-circle-right"
          onClick={this.incActiveIndex}
        />
        <i
          className="far fa-arrow-alt-circle-left"
          onClick={this.decActiveIndex}
        />
        <div className="activeCircles">{activeCircles}</div>
        <h3 className="carouselHeadline forMobile">{carouselHeadline}</h3>
      </div>
    );
  }
}

export default HeaderCarousel;
