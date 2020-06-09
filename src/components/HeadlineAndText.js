import React from "react";

const HeadlineAndText = ({ headline, text, textTwo }) => {
  return (
    <div className="headlineAndText">
      <h1 style={{ textAlign: "center" }}>{headline}</h1>
      <h2 className="text">{text}</h2>
      {textTwo ? <p className="text">{textTwo}</p> : null}
    </div>
  );
};

export default HeadlineAndText;
