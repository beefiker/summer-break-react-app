import React from "react";
import styled from "styled-components";

const MessageContainer = styled.div`
  width: 40vw;
  margin: 0 auto;
  text-align: start;
  font-size: 1.3rem;
`;

const Message = ({ msg }) => {
  return <MessageContainer>{msg}</MessageContainer>;
};

export default Message;
