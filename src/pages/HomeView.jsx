import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import UserPosts from "../components/UserPosts";
import styled from "styled-components";
import getPosts from "../api/getPosts";
import { Button, Modal, Form } from "react-bootstrap";

const HomeView = ({ admin }) => {
  const mockData = [
    {
      user: { name: "Tom Willson" },
      text: "Lorem Ipsum is simply dummy text of thy of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
      replies: [
        {
          user: { name: "Bill Bob" },
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
        },
      ],
    },
    {
      user: { name: "Tom Willson" },
      text: "Lorem Ipsum is simply dummy text of thy of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
      replies: [
        {
          user: { name: "Bill Bob" },
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
        },
      ],
    },
  ];
  const [posts, setPosts] = useState(mockData);
  const [newPost, setNewPost] = useState("");
  const [showPostModal, setShowPostModal] = useState(false);

  const userReply = (index, info) => {
    const tempObj = [...posts];
    tempObj[index].replies.push(info);
    setPosts(tempObj);
  };
  const handleHide = () => {
    setNewPost("");
    setShowPostModal(false);
  };
  const handleAddPost = () => {
    const tempObj = [...posts];
    tempObj.unshift({
      text: newPost,
      user: { name: localStorage.getItem("username") },
      replies: [],
    });
    setPosts(tempObj);
    handleHide();
    //ADD CREATE POST API HERE
  };
  useEffect(() => {
    // YOUR API CALL IS HERE UNCOMMENT LINE 29 TO TEST IF IT WORKS
    const allPosts = getPosts();
    //setPosts(allPosts)
  }, []);
  return (
    <PageLayout admin={admin}>
      <Wrapper>
        <Left>
          <MenuCont>
            <Button size="lg" onClick={() => setShowPostModal(true)}>
              Create Post
            </Button>
          </MenuCont>
        </Left>
        <Center>
          {posts.map((info, index) => (
            <UserPosts {...info} index={index} userReply={userReply} />
          ))}
        </Center>
        <Right></Right>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showPostModal}
          onHide={handleHide}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Create A Post
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                placeholder="What's happening?"
                rows={3}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleHide}>
              Close
            </Button>
            <Button onClick={handleAddPost}>Create</Button>
          </Modal.Footer>
        </Modal>
      </Wrapper>
    </PageLayout>
  );
};

export default HomeView;

const Wrapper = styled.div`
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
`;
const Left = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;
const Center = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
`;
const Right = styled.div`
  background: white;
  flex: 1;
`;
const MenuCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;
