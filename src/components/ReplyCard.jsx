import React from "react";
import styled from "styled-components";

const ReplyCard = ({ user, text }) => {
  return (
    <Wrapper>
      <UserName>{user.name}</UserName>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default ReplyCard;

const Wrapper = styled.div`
  width: 100%;
  padding-left: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
`;
const UserName = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 15px;
  line-height: 1.4;
`;
