import React from "react";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItemWrapper, TitleText, WrtDtText } from "../../../styles/styles";

function PostListItem(props) {
  const { post, onClick } = props;
  if (post.lock_yn !== "Y") {
    return (
      <ListItemWrapper onClick={onClick}>
        <TitleText>{post.content}</TitleText>
        <WrtDtText>{post.wrt_dt}</WrtDtText>
      </ListItemWrapper>
    );
  } else {
    return (
      <ListItemWrapper onClick={onClick}>
        <FontAwesomeIcon icon={faLock} size="2x" className="fa-lock" />
      </ListItemWrapper>
    );
  }
}
export default PostListItem;
