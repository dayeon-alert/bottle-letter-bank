import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import {
  Wrapper,
  ListWrapper,
  PostViewButtonContainer,
} from "../../../styles/styles";
import axios from "axios";

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;

function PostViewPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/main", { params: { user_id: "userid" } }) //
      .then((response) => {
        setData(response.data[0]);
      });
  }, []);

  const onClickHandler = () => {
    axios.delete(`/api/post/delete/${postId}`);
    navigate("/");
  };

  if (data == null) return null;

  const post = data.find((item) => {
    return item.post_id == postId;
  });

  return (
    <Wrapper>
      <ListWrapper>
        <PostViewButtonContainer>
          <Button
            title="뒤로 가기"
            onClick={() => {
              navigate("/");
            }}
          />
          <Button title="삭제하기" onClick={onClickHandler} />
        </PostViewButtonContainer>
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>
      </ListWrapper>
    </Wrapper>
  );
}

export default PostViewPage;
