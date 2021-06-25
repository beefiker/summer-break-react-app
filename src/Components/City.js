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
  width: 200px;
  height: 125px;
  background-size: cover;
  border-radius: 1rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.bgUrl});
  margin-bottom: 1rem;
`;
const CityContainer = styled.div`
  &:hover {
    ${Image} {
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }
  }
`;
const City = ({ name, imgsrc }) => {
  return (
    <CityContainer>
      <CityName>{name && name !== null && `${name}`}</CityName>
      <Image bgUrl={imgsrc ? imgsrc : require("../assets/smalltown1.png")} />
    </CityContainer>
  );
};

export default City;
