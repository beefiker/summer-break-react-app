import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import DetailPresenter from "./DetailPresenter";
import { cityApi } from "api";

const DetailContainer = (props) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);
  const {
    match: {
      params: { id: selectedCity },
    },
  } = props;

  const fetchData = async () => {
    try {
      const {
        data: { data: info },
      } = await cityApi.getDetail(selectedCity);
      setResult(info);
    } catch {
      setError("No info");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <DetailPresenter loading={loading} pathname={selectedCity} result={result} />;
};

export default withRouter(DetailContainer);
