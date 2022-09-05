import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostList from "./PostList";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ModalEdit from "../../ui/ModalEdit";
import { Wrapper, Container, BankInfoContainer } from "../../../styles/styles";

function MainPage() {
  const navigate = useNavigate();

  const [userInfoData, setUserInfoData] = useState({});
  const [postListData, setPostListData] = useState([]);
  const [open, setOpen] = useState("");
  const [postId, setPostId] = useState(0);
  const [modalVal, setModalVal] = useState();

  useEffect(() => settingUserInfo("userid"), []);

  const settingUserInfo = (userId) => {
    axios
      .get("/api/main", { params: { user_id: userId } }) //
      .then((response) => {
        setUserInfoData(response.data[0][0]);
        setPostListData(response.data[1]);
      });
  };

  const onClickPost = (post) => {
    if (post.lock_yn !== "Y") navigate(`post/${post.post_id}`);
    setPostId(post.post_id);
    setModalVal("unlockPost");
    setOpen("Modal");
  };

  const onClickModalTrue = () => {
    if (modalVal === "unlockPost") {
      axios.put(`/api/post/update`, {
        param: {
          user_id: userInfoData.user_id,
          bank_idNum: userInfoData.bank_idNum,
          post_id: postId,
        },
      });
    } else if (modalVal === "unlockAllPost") {
      axios.put(`/api/post/update/allPost`, {
        param: {
          user_id: userInfoData.user_id,
          bank_idNum: userInfoData.bank_idNum,
          coin_cnt: userInfoData.post_cnt,
        },
      });
    } else if (modalVal === "unlockAllPostComplete") {
      axios.put(`/api/post/update/allPostComplete`, {
        param: {
          user_id: userInfoData.user_id,
          bank_idNum: userInfoData.bank_idNum,
          post_cnt: userInfoData.post_cnt,
        },
      });
    }
    settingUserInfo(userInfoData.user_id);
    setOpen("");
  };

  return (
    <>
      {open === "EditModal" && (
        <ModalEdit
          onClickModal={() => settingUserInfo(userInfoData.user_id)}
          onCloseModal={() => setOpen("")}
          userInfoData={userInfoData}
        ></ModalEdit>
      )}
      {open === "Modal" && (
        <Modal
          modalValue={modalVal}
          onClickModalTrue={onClickModalTrue}
          onCloseModal={() => setOpen("")}
          userInfoData={userInfoData}
        />
      )}
      <Wrapper>
        현재 코인 {userInfoData.coin_cnt}코인
        <Container>
          <BankInfoContainer
            onClick={() => {
              userInfoData.post_cnt < userInfoData.target_num
                ? setModalVal("unlockAllPost")
                : setModalVal("unlockAllPostComplete");
              setOpen("Modal");
            }}
          >
            현재 작성 포스트/목표량 : {userInfoData.post_cnt}/
            {userInfoData.target_num}
          </BankInfoContainer>
          {userInfoData.post_cnt < userInfoData.target_num && (
            <Button title="작성" onClick={() => setOpen("EditModal")}></Button>
          )}
        </Container>
        <PostList
          posts={postListData}
          onClickItem={(post) => onClickPost(post)}
        />
      </Wrapper>
    </>
  );
}

export default MainPage;
