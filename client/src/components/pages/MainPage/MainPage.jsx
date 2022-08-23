import React from "react";
import { useNavigate } from "react-router-dom";
import PostList from "./PostList";
import Button from "../../ui/Button";
import { Wrapper, Container } from "../../../styles/styles";
import data from "../../../data.json";

function MainPage() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
