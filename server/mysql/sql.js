module.exports = {
  postList: `select post_id
                  , content
                  , lock_yn
                  , DATE_FORMAT(wrt_dt, '%Y년 %m월 %d일 %H시 %i분') wrt_dt 
              from TNAD_POST_INFO 
              order by wrt_dt desc;`,
  postInsert:
    `insert into TNAD_POST_INFO set ?, wrt_dt = DATE_FORMAT(now(), '%Y%m%d%H%i%s');` +
    `update TNAD_USER_INFO 
      set coin_cnt = coin_cnt + 1 
      where user_id = 'userid';`,
  selectUserInfo: `select a.user_id
                        , a.coin_cnt
                        , b.bank_nm
                        , b.bank_idNum
                        , b.start_dt
                        , b.end_dt
                        , b.target_num
                        , (select count(post_id) post_cnt 
                          from  tnad_post_info x 
                          where x.user_id = b.user_id 
                          and x.bank_idNum = b.bank_idNum) post_cnt
                    from tnad_user_info a, tnad_bank_info b
                    where a.user_id = 'userid'
                    and a.user_id = b.user_id
                    and b.stat_cd = 'U';`,
  updateReduceCoin:
    "update TNAD_USER_INFO set coin_cnt = coin_cnt - 1 where post_id=?;",
  postDelete: "delete from TNAD_POST_INFO where post_id=?;",
  updateCoinReduce:
    "update TNAD_USER_INFO set coin_cnt = coin_cnt - 1 where user_id=?;",
  updateUnlockPost: `update TNAD_POST_INFO
                      set lock_yn = 'N'
                      where user_id = ?
                      and bank_idNum = ?
                      and post_id = ?;`,
  updateGetCoins: `update TNAD_USER_INFO
                    set coin_cnt = coin_cnt + ?
                    where user_id = ?;`,
  updateUnlockAllPosts: `update TNAD_POST_INFO
                          set lock_yn = 'N'
                          where user_id = ?
                          and bank_idNum = ?;`,
  updateBankStat: `update TNAD_BANK_INFO
                    set stat_cd = 'S'
                    where user_id = ?
                    and bank_idNum = ?;`,
  updateBankStatComplete: `update TNAD_BANK_INFO
                            set stat_cd = 'F'
                            where user_id = ?
                            and bank_idNum = ?;`,
};
