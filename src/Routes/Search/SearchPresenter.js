import React from "react";
import Section from "Components/Section";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "Components/Loader";
import City from "Components/City";
import Message from "Components/Message";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Form = styled.form`
  margin-bottom: 50px;
  width: 90%;
  margin: 5% auto;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({ result, handleSubmit, updateTerm, loading }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>TraBee | Search</title>
        </Helmet>
      </HelmetProvider>

      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Cities by Tag or Name..." onChange={updateTerm} />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <Section>
          {result && result.length > 0 ? (
            result.map((item, index) => (
              <Link to={`/detail/${item.cityname}`} key={index}>
                <City imgsrc={item.imgsrc} name={item.cityname} />
              </Link>
            ))
          ) : (
            <Message msg="Nothing found" />
          )}
        </Section>
      )}
    </>
  );
};

export default SearchPresenter;
