import React from "react";

const City = ({ name, imgsrc }) => {
  return (
    <div>
      <h1>{name && name !== null && `${name}`}</h1>
      <img src={imgsrc} />
    </div>
  );
};

export default City;
