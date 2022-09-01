import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostList from "./PostList";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ModalEdit from "../../ui/ModalEdit";
import { Wrapper, Container } from "../../../styles/styles";

function MainPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [coin, setCoin] = useState(0);
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [postId, setPostId] = useState(false);
  const [content, setContent] = useState("");
  const sUserId = "userid";

  useEffect(() => settingUserInfo(sUserId), []);

  const onClickHandler = () => {
    let dataToSubmit = {
      param: {
        id: "1-" + Date.now(),
        bank_num: 1,
        user_id: sUserId,
        content: content,
        lock_yn: "Y",
      },
    };
    axios.post("/api/post/write", dataToSubmit);

    setContent("");

    settingUserInfo(sUserId);
  };

  const onClickUnlock = () => {
    axios.put(`/api/post/update/${postId}`);
    settingUserInfo(sUserId);
    setOpen(false);
  };

  const settingUserInfo = (userId) => {
    axios
      .get("/api/main", { params: { user_id: userId } }) //
      .then((response) => {
        setData(response.data[0]);
        setCoin(response.data[1][0].coin_cnt);
      });
  };

  return (
    <>
      <ModalEdit
        onClickModal={onClickHandler}
        onCloseModal={() => setEditOpen(false)}
        open={editOpen}
      />
      <Modal
        value={`${coin}코인 중 1코인을 사용해 쪽지를 열어보겠습니까?`}
        onClickModal={onClickUnlock}
        onCloseModal={() => setOpen(false)}
        open={open}
      />
      <Wrapper>
        <Container>
          <Button title="작성" onClick={() => setEditOpen(true)}></Button>
        </Container>
        <PostList
          posts={data}
          onClickItem={(item) => {
            setPostId(item.id);
            item.lock_yn === "Y" ? setOpen(true) : navigate(`post/${postId}`);
          }}
        />
      </Wrapper>
    </>
  );
}

export default MainPage;
