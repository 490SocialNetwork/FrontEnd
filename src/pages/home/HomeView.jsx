import React, { useState, useEffect } from "react";
import PageLayout from "../../components/PageLayout";
import UserPosts from "../../components/UserPosts";
import styled from "styled-components";
import getPosts from "../../api/getPosts";

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
  const userReply = (index, info) => {
    const tempObj = [...posts];
    tempObj[index].replies.push(info);
    setPosts(tempObj);
  };
  useEffect(() => {
    // YOUR API CALL IS HERE UNCOMMENT LINE 29 TO TEST IF IT WORKS
    const allPosts = getPosts();
    //setPosts(allPosts)
  }, []);
  return (
    <PageLayout admin={admin}>
      <Wrapper>
        {posts.map((info, index) => (
          <UserPosts {...info} index={index} userReply={userReply} />
        ))}
      </Wrapper>
    </PageLayout>
  );
};

export default HomeView;

const Wrapper = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
`;
