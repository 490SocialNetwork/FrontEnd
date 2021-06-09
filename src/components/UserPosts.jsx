import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import ReplyCard from "./ReplyCard";

const UserPosts = ({ user, text, replies, index, userReply }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [reply, setReply] = useState("");
  const handleCancel = () => {
    setIsReplying(false);
    setReply("");
  };
  const handleReply = () => {
    userReply(index, {
      text: reply,
      user: { name: localStorage.getItem("username") },
    });
    setIsReplying(false);
    setReply("");
  };
  return (
    <Wrapper>
      <MainCont>
        <UserName>{user.name}</UserName>
        <Text>{text}</Text>
      </MainCont>
      {!isReplying ? (
        <InteractCont>
          <Button onClick={() => setIsReplying(true)}>Reply</Button>
        </InteractCont>
      ) : (
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder="Type your reply"
            rows={3}
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <ButtonCont>
            <Button
              variant="primary"
              type="submit"
              className="mr-4"
              onClick={handleReply}
            >
              Post
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonCont>
        </Form.Group>
      )}
      <ReplyCont>
        {replies.map((info) => (
          <ReplyCard {...info} />
        ))}
      </ReplyCont>
    </Wrapper>
  );
};

export default UserPosts;

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 30px;
  border: 1px solid #c0c2c4;
`;
const MainCont = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;
const ReplyCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const InteractCont = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px 0px;
  border-top: 1px solid #ebeef0;
  border-bottom: 1px solid #ebeef0;
`;
const UserName = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;
const Text = styled.p`
  font-size: 23px;
  line-height: 1.4;
`;
const ButtonCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 10px;
`;
