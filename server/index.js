const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("./mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/main", async (req, res) => {
  const posts = await mysql.query("postList");
  console.log(posts);
  res.send(posts);
});

app.post("/api/post/write", async (req, res) => {
  console.log(req.body.param);
  const result = await mysql.query("postInsert", req.body.param);
  res.send(result);
});

app.delete("/api/post/delete/:id", async (req, res) => {
  const { id } = req.params; // 라우트 경로의 :id에 매핑되는 값
  const result = await mysql.query("postDelete", id);
  res.send(result);
});

const port = 5000;
app.listen(port, () => console.log(`포트번호 연결 ${port}!`));
