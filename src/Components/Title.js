import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Title = ({ titleName }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{titleName}</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default Title;
