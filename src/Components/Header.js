import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const MyHeader = styled.header`
  color: #494949;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #f2f3f7;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.4);
  z-index: 9;
`;

const List = styled.ul`
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 0 0 1rem;
`;

const Item = styled.li`
  font-size: 0.8rem;
  width: 80px;
  height: 50px;
  text-align: center;
  font-weight: ${(props) => (props.current ? "bold" : "")};
  transition: all 0.3s ease-in-out;
  /* &:hover {
    border-bottom: 3px solid ${(props) => (!props.current ? "gray" : "yellow")};
  } */
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <MyHeader>
      <Logo>
        <SLink to="/">Logo</SLink>
      </Logo>
      <List>
        <Item current={pathname === "/account"}>
          <SLink to="/login">Login</SLink>
        </Item>
        <Item current={pathname === "/register"}>
          <SLink to="/register">Register</SLink>
        </Item>
        <Item current={pathname === "/notice"}>
          <SLink to="/notice">notice</SLink>
        </Item>
      </List>
    </MyHeader>
  );
};

export default withRouter(Header);
