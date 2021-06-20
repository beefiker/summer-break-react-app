import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Carousel = styled.div`
  width: 90%;
  margin: 5% auto;

  .slick-arrow {
    z-index: 11;
    transform: scale(2);
  }
  .slick-prev:before {
    opacity: 1;
    color: #f1f3f5;
    content: "<";
    font-weight: 900;
    text-shadow: 1px 1px 2px #caccce, -1px -1px 1px #ffffff;
  }
  .slick-next:before {
    opacity: 1;
    color: #f1f3f5;
    content: ">";
    font-weight: 900;
    text-shadow: 1px 1px 2px #caccce, -1px -1px 1px #ffffff;
  }
  border-radius: 10px;
  /* box-shadow: 0px 1px 7px 3px rgba(0, 0, 0, 0.4); */
`;

const SliderComponent = ({ sliderImgs }) => {
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
  return (
    <>
      <Carousel>
        <Slider {...settings}>
          {sliderImgs.map((item, index) => (
            <img src={item} alt={item} key={index} />
          ))}
        </Slider>
      </Carousel>
    </>
  );
};

export default SliderComponent;
