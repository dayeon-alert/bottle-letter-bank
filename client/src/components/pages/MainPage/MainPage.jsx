import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostList from "./PostList";
import TextInput from "../../ui/TextInput";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { Wrapper, Container } from "../../../styles/styles";

function MainPage() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [coin, setCoin] = useState(0);
  const [modal, setModal] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get("/api/main", { params: { user_id: "userid" } }) //
      .then((response) => {
        setData(response.data[0]);
        setCoin(response.data[1][0].coin_cnt);
      });
  }, []);

  const onClickHandler = () => {
    let dataToSubmit = {
      param: {
        id: "1-" + Date.now(),
        bank_num: 1,
        user_id: "userid",
        content: content,
        lock_yn: "Y",
      },
    };
    axios.post("/api/post/write", dataToSubmit);

    setContent("");

    axios
      .get("/api/main", { params: { user_id: "userid" } }) //
      .then((response) => {
        setData(response.data[0]);
        setCoin(response.data[1][0].coin_cnt);
      });
  };

  return (
    <>
      {modal && (
        <Modal
          value={`${coin}코인 중 1코인을 사용해 쪽지를 열어보겠습니까?`}
          onClickClose={() => {
            setModal("");
          }}
          onClickModal={() => {
            axios.put(`/api/post/update/${modal}`);
            axios
              .get("/api/main", { params: { user_id: "userid" } }) //
              .then((response) => {
                setData(response.data[0]);
                setCoin(response.data[1][0].coin_cnt);
              });
            setModal("");
          }}
        />
      )}
      <Wrapper>
        <Container>
          <TextInput
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
          <Button title="글 작성하기" onClick={onClickHandler} />
        </Container>
        <PostList
          posts={data}
          onClickItem={(item) => {
            item.lock_yn === "Y"
              ? setModal(item.id)
              : navigate(`post/${item.id}`);
          }}
        />
      </Wrapper>
    </>
  );
}

export default MainPage;
