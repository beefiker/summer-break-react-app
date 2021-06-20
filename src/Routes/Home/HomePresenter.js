import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SliderComponent from "Components/SliderComponent";

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
  box-shadow: 6px 6px 6px #dfe0e1, -6px -6px 6px #ffffff;
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

const HomePresenter = ({ tagList, sliderImgs, selectedTag }) => {
  return (
    <>
      <SliderComponent sliderImgs={sliderImgs} />
      <TagContainer>
        <UL>
          {tagList.map((item, index) => (
            <Link to={`/tag/${item}`} key={`${index}`}>
              <TagItems current={selectedTag === item}>{item}</TagItems>
            </Link>
          ))}
        </UL>
      </TagContainer>
      <h1>{`선택된 태그 : ${selectedTag} `}</h1>
    </>
  );
};

export default HomePresenter;
