import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";

const Carousel = styled.div`
  width: 90%;
  margin: 5% auto;

  .slick-arrow {
    z-index: 11;
    transform: scale(1.8);
  }
  .slick-prev:before {
    opacity: 1;
    color: black;
    content: "<";
    font-weight: bold;
    text-shadow: 1px 1px 2px gray;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    content: ">";
    font-weight: bold;
    text-shadow: 1px 1px 2px gray;
  }
  border-radius: 10px;

  /* border-radius: 20px; */
  /* box-shadow: 0px 1px 7px 3px rgba(0, 0, 0, 0.4); */
`;

const HomePresenter = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const data = [
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
  ];
  return (
    <>
      <Carousel>
        <Slider {...settings}>
          {data.map((item) => (
            <img src={`${item}`} alt="" srcset="" />
          ))}
        </Slider>
      </Carousel>
      <img src="" alt="" srcset="" />
      <Link to={`/account`}>
        <h1>Go to Account</h1>{" "}
      </Link>
    </>
  );
};

export default HomePresenter;
