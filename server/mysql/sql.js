module.exports = {
  postList:
    "select id, content, lock_yn, DATE_FORMAT(wrt_dt, '%Y년 %m월 %d일 %H시 %i분') wrt_dt from TNAD_LETTER_LIST order by wrt_dt desc;",
  postInsert:
    "insert into TNAD_LETTER_LIST set ?, `wrt_dt` = DATE_FORMAT(now(), '%Y%m%d%H%i%s');",
  selectUserCoin:
    "select user_id, coin_cnt from TNAD_USER_INFO where user_id='userid';",
  updateReduceCoin:
    "update TNAD_USER_INFO set coin_cnt = coin_cnt - 1 where id=?;",
  postDelete: "delete from TNAD_LETTER_LIST where id=?;",
  postUnlock:
    "update TNAD_LETTER_LIST set lock_yn = 'N' where id=?;" +
    "update TNAD_USER_INFO set coin_cnt = coin_cnt - 1 where user_id='userid';",
};
