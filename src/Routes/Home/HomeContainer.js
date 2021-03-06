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

  const getTags = async () => {
    const {
      data: { data: tags },
    } = await tagApi.getAllTags();
    let result = tags.map((item) => Object.values(item));
    setTagList(result);
  };
  useEffect(() => {
    getTags();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTag && selectedTag !== null && selectedTag.length > 0) {
          const {
            data: { data: cities },
          } = await cityApi.getSelectedCities(selectedTag);
          setResult(cities);
        } else {
          const {
            data: { data: cities },
          } = await cityApi.getAll();
          setResult(cities);
        }
      } catch {
        setError("Nothing found");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTag]);
  return (
    <>
      <HomePresenter
        loading={loading}
        tagList={tagList}
        sliderImgs={sliderImgs}
        selectedTag={selectedTag}
        result={result}
        error={error}
      />
    </>
  );
};

export default withRouter(HomeContainer);
