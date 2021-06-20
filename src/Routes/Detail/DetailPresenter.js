import React from "react";

const DetailPresenter = (props) => {
  const {
    location: { pathname },
  } = props;
  console.log(pathname);
  return (
    <div>
      <h1>Detail{`${pathname}`}</h1>
    </div>
  );
};

export default DetailPresenter;
