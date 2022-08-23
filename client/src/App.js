import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage/MainPage";
import PostWritePage from "./components/pages//PostWritePage/PostWritePage";
import PostViewPage from "./components/pages/PostViewPage/PostViewPage";
import styled from "styled-components";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <BrowserRouter>
      <MainTitleText>레터 뱅크</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
