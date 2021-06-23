import React from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SliderComponent from "Components/SliderComponent";
import Section from "Components/Section";
import City from "Components/City";
import Loader from "Components/Loader";
import Message from "Components/Message";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Title from "Components/Title";

const TagContainer = styled.div`
  width: 90%;
  height: 20%;
  margin: 10% 5% 0 5%;
  display: flex;
  min-height: 100px;
`;

const TagItems = styled.span`
  background: ${(props) => (props.current ? "gray" : "#f8f9fa")};
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

const HomePresenter = ({ loading, tagList, sliderImgs, selectedTag, result }) => (
  <>
    <Title titleName={`TraBee | Home ${selectedTag ? `: ${selectedTag}` : ""}`} />
    {loading ? (
      <Loader />
    ) : (
      <>
        <SliderComponent sliderImgs={sliderImgs} />
        <TagContainer>
          <UL>
            {tagList.map((item, index) => (
              <Link to={selectedTag == item ? `/` : `/tag/${item}`} key={`${index}`}>
                <TagItems current={selectedTag == item}>{item}</TagItems>
              </Link>
            ))}
          </UL>
        </TagContainer>
        <Section>
          {result && result !== null && result.length > 0 ? (
            result.map((item, index) => (
              <Link to={`/detail/${item.cityname}`} key={index}>
                <City imgsrc={item.imgsrc} name={item.cityname} />
              </Link>
            ))
          ) : (
            <Message msg={`No cities with selected tag`} />
          )}
        </Section>
      </>
    )}
  </>
);

export default withRouter(HomePresenter);
