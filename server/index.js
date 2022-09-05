const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("./mysql");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/main", async (req, res) => {
  const { user_id } = req.query;
  const userInfo = await mysql.query("selectUserInfo", user_id);
  const posts = await mysql.query("postList", user_id);
  res.send([userInfo, posts]);
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

app.put("/api/post/update", async (req, res) => {
  const resultUnlock = await mysql.query("updateUnlockPost", [
    req.body.param.user_id,
    req.body.param.bank_idNum,
    req.body.param.post_id,
  ]);
  const resultCoin = await mysql.query("updateCoinReduce", [
    req.body.param.user_id,
  ]);
  res.send([resultUnlock, resultCoin]);
});

app.put("/api/post/update/allPost", async (req, res) => {
  const resultUnlock = await mysql.query("updateUnlockAllPosts", [
    req.body.param.user_id,
    req.body.param.bank_idNum,
  ]);

  const resultBank = await mysql.query("updateBankStat", [
    req.body.param.user_id,
    req.body.param.bank_idNum,
  ]);

  const resultCoin = await mysql.query("updateGetCoins", [
    req.body.param.coin_cnt,
    req.body.param.user_id,
  ]);
  res.send([resultUnlock, resultBank, resultCoin]);
});

app.put("/api/post/update/allPostComplete", async (req, res) => {
  const resultUnlock = await mysql.query("updateUnlockAllPosts", [
    req.body.param.user_id,
    req.body.param.bank_idNum,
  ]);

  const resultBank = await mysql.query("updateBankStatComplete", [
    req.body.param.user_id,
    req.body.param.bank_idNum,
  ]);

  const resultCoin = await mysql.query("updateGetCoinsComplete", [
    req.body.param.post_cnt,
    req.body.param.user_id,
  ]);
  res.send([resultUnlock, resultBank, resultCoin]);
});

const port = 5000;
app.listen(port, () => console.log(`포트번호 연결 ${port}!`));
