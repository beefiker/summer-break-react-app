import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SliderComponent from "Components/SliderComponent";
import City from "Components/City";

const TagContainer = styled.div`
  width: 90%;
  height: 20%;
  margin: 0 5% 0 5%;
  display: flex;
  min-height: 100px;
`;

const TagItems = styled.span`
  background: ${(props) => (props.current ? "blue" : "#f8f9fa")};
  color: ${(props) => (props.current ? "white" : "#707070")};
  box-shadow: 4px 4px 4px #dfe0e1, -4px -4px 4px #ffffff;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  text-align: center;
  float: left;
  border-radius: 0.5rem;
  padding: 0.3rem 0.8rem;
  margin: 0.3rem;
  font-size: 0.8rem;
  transition: all 0.2s linear;
  overflow: hidden;

  &:hover {
    background: #e9ecef;
    color: #707070;
  }
`;

const UL = styled.ul`
  width: 100%;
`;

const HomePresenter = ({ tagList, sliderImgs, selectedTag, result }) => {
  return (
    <>
      <SliderComponent sliderImgs={sliderImgs} />
      <TagContainer>
        <UL>
          {tagList.map((item, index) => (
            <Link to={selectedTag === item ? `/` : `/tag/${item}`} key={`${index}`}>
              <TagItems current={selectedTag == item}>{item}</TagItems>
            </Link>
          ))}
        </UL>
      </TagContainer>

      {result && result !== null
        ? result.map((item, index) => <City key={index} imgsrc={item.imgsrc} name={item.name} />)
        : "nothing"}
    </>
  );
};

export default withRouter(HomePresenter);
