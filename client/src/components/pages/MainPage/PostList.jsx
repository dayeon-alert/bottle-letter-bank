import React from "react";
import PostListItem from "./PostListItem";
import { ListWrapper } from "../../../styles/styles";

function PostList(props) {
  const { posts, onClickItem } = props;

  return (
    <ListWrapper>
      {posts.map((post) => {
        return (
          <PostListItem
            key={post.post_id}
            post={post}
            onClick={() => {
              onClickItem(post);
            }}
          />
        );
      })}
    </ListWrapper>
  );
}

export default PostList;
