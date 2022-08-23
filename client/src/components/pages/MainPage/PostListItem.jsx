import React from "react";
import { ListItemWrapper, TitleText } from "../../../styles/styles";

function PostListItem(props) {
  const { post, onClick } = props;
  return (
    <ListItemWrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </ListItemWrapper>
  );
}

export default PostListItem;
