import React from "react";
import Loader from "Components/Loader";
import Title from "Components/Title";

const DetailPresenter = ({ pathname, loading, result }) => (
  <>
    <Title titleName={`TraBee | Detail : ${pathname}`} />
    {loading ? (
      <Loader />
    ) : (
      <>
        {result &&
          result.map((item) => (
            <>
              <h1>{`Rating : ${item.rating}`}</h1>
              <h1>{`Description : ${item.description}`}</h1>
            </>
          ))}
      </>
    )}
  </>
);

export default DetailPresenter;
