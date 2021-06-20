import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { withRouter } from "react-router-dom";
import { cityApi } from "api";

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
    "South-Korea",
    "North-Korea",
    "Bangkok",
    "Anywhere",
    "Somewhere",
  ]);
  const [sliderImgs, setSliderImgs] = useState([
    "https://placeimg.com/1640/500/any",
    "https://placeimg.com/1640/500/any",
    "https://placeimg.com/1640/500/any",
    "https://placeimg.com/1640/500/any",
    "https://placeimg.com/1640/500/any",
  ]);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  useEffect(() => {
    console.log(`Query with ${selectedTag}`);

    const fetchData = async () => {
      try {
        const {
          data: { data: given },
        } = await cityApi.test();
        setResult(given);
        console.table(given);
      } catch {
        setError("Nothing found");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // setResult(selectedTag);
    // axios로 selectedTag에 대한 값 받아서 setResult state 세팅
  }, [selectedTag]);
  return (
    <>
      <HomePresenter tagList={tagList} sliderImgs={sliderImgs} selectedTag={selectedTag} result={result} />
    </>
  );
};

export default withRouter(HomeContainer);
