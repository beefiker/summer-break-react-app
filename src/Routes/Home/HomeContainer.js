import React, { useState, useEffect } from "react";
import HomePresenter from "./HomePresenter";
import { withRouter } from "react-router-dom";
import { cityApi, tagApi } from "api";

const HomeContainer = (props) => {
  const {
    match: {
      params: { id: selectedTag },
    },
  } = props;

  const [tagList, setTagList] = useState([]);

  const getTags = async () => {
    const {
      data: { data },
    } = await tagApi.getAllTags();
    let result = data.map((item) => Object.values(item));
    setTagList(result);
  };

  useEffect(() => {
    getTags();
  }, []);

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
        if (selectedTag && selectedTag !== null && selectedTag.length > 0) {
          const {
            data: { data: given },
          } = await cityApi.getSelectedCities(selectedTag);
          setResult(given);
        } else {
          const {
            data: { data: given },
          } = await cityApi.getAll();
          setResult(given);
        }
        console.table(result);
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
