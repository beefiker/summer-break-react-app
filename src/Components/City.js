import React from "react";
import styled from "styled-components";

const CityName = styled.span`
  display: block;
  margin-bottom: 0.2rem;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 125px;
  background-size: cover;
  border-radius: 25px;
  background-position: center center;
  background-image: url(${(props) => props.bgUrl});
`;

const City = ({ name, imgsrc }) => {
  return (
    <div>
      <CityName>{name && name !== null && `${name}`}</CityName>
      <Image bgUrl={imgsrc ? imgsrc : require("../assets/smalltown1.png")} />
    </div>
  );
};

export default City;
