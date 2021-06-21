import React from "react";
import Section from "Components/Section";
import styled from "styled-components";
import Loader from "Components/Loader";
import City from "Components/City";

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
    <div>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search a Tag" onChange={updateTerm} />
      </Form>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Section>
            {result &&
              result.length > 0 &&
              result.map((item, index) => <City key={index} imgsrc={item.imgsrc} name={item.cityname} />)}
          </Section>
        </>
      )}
    </div>
  );
};

export default SearchPresenter;
