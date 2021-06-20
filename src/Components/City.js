import React from "react";

const City = ({ result }) => {
  return (
    <div>
      <h1>{result && result !== null ? `선택태그 : ${result}` : `none`}</h1>
    </div>
  );
};

export default City;
