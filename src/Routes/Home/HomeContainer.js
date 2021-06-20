import React, { useState } from "react";
import HomePresenter from "./HomePresenter";
import { withRouter } from "react-router-dom";

const HomeContainer = (props) => {
  const {
    match: {
      params: { id: selectedTag },
    },
  } = props;

  const [tagList, setTagList] = useState([
    "Europe",
    "Asia",
    "Africa",
    "America",
    "Oceania",
    "South Korea",
    "North Korea",
    "Bangkok",
    "Anywhere",
    "Somewhere",
  ]);
  const [sliderImgs, setSliderImgs] = useState([
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
    "https://placeimg.com/640/200/any",
  ]);
  return (
    <>
      <HomePresenter tagList={tagList} sliderImgs={sliderImgs} selectedTag={selectedTag} />
    </>
  );
};

export default withRouter(HomeContainer);
