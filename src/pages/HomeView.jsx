import React, { useState, useEffect } from "react";
import PageLayout from "../components/PageLayout";
import UserPosts from "../components/UserPosts";
import styled from "styled-components";
import getPosts from "../api/getPosts";
import { Button, Modal, Form } from "react-bootstrap";
import createPost from "../api/createPost";
import getUsers from "../api/getUsers";
import { Redirect } from "react-router";
import Games from "../components/games";

const HomeView = ({ admin }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [viewChat, setViewChat] = useState(false);

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
  const handleAddPost = async () => {
    const tempObj = [...posts];
    tempObj.unshift({
      message_txt: newPost,
      userid: localStorage.getItem("username"),
      replies: [],
    });
    setPosts(tempObj);
    handleHide();
    await createPost({
      message_txt: newPost,
      userid: localStorage.getItem("username"),
    });
  };
  const getAllPosts = async () => {
    const allPosts = await getPosts();
    setPosts(allPosts.reverse() || []);
    console.log(allPosts);
  };
  const getAllUsers = async () => {
    const allUsers = await getUsers();
    setUsers(allUsers || []);
    console.log(allUsers);
  };
  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);
  return (
    <PageLayout admin={admin} users={users}>
      {viewChat && <Redirect to="/chat" />}
      <Wrapper>
        <Left>
          <MenuCont>
            <Button size="lg" onClick={() => setShowPostModal(true)}>
              Create Post
            </Button>
            <div className="mt-4"></div>
            <Button
              size="lg"
              variant="outline-primary"
              onClick={() => setViewChat(true)}
            >
              Chat
            </Button>
          </MenuCont>
        </Left>
        <Center>
          {posts.map((info, index) => (
            <UserPosts {...info} index={index} userReply={userReply} />
          ))}
        </Center>
        <Right>
          <Games />
        </Right>
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
  max-width: 500px;
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
