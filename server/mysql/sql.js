module.exports = {
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
                  order by (case when b.stat_cd = 'U' then 1 else 2 end)
                  , b.open_dttm desc 
                  limit 1;`,
  postList: `select post_id
                  , content
                  , lock_yn
                  , DATE_FORMAT(wrt_dt, '%Y.%m.%d') wrt_dt 
              from TNAD_POST_INFO 
              order by wrt_dt desc;`,
  postInsert:
    `insert into TNAD_POST_INFO set ?, wrt_dt = DATE_FORMAT(now(), '%Y%m%d%H%i%s');` +
    `update TNAD_USER_INFO 
      set coin_cnt = coin_cnt + 1 
      where user_id = 'userid';`,
  postDelete: "delete from TNAD_POST_INFO where post_id = ?;",
  updateUnlockPost: `update TNAD_POST_INFO
                      set lock_yn = 'N'
                      where user_id = ?
                      and bank_idNum = ?
                      and post_id = ?;`,
  updateCoinReduce:
    "update TNAD_USER_INFO set coin_cnt = coin_cnt - 1 where user_id=?;",
  updateUnlockAllPosts: `update TNAD_POST_INFO
                          set lock_yn = 'N'
                          where user_id = ?
                          and bank_idNum = ?
                          and lock_yn != 'N';`,
  updateBankStat: `update TNAD_BANK_INFO
                    set stat_cd = 'S'
                    where user_id = ?
                    and bank_idNum = ?;`,
  updateGetCoins: `update TNAD_USER_INFO
                    set coin_cnt = coin_cnt + ?
                    where user_id = ?;`,
  updateBankStatComplete: `update TNAD_BANK_INFO
                            set stat_cd = 'C'
                            where user_id = ?
                            and bank_idNum = ?;`,
  updateGetCoinsComplete: `update TNAD_USER_INFO
                            set coin_cnt = coin_cnt + round(? * 1.2)
                            where user_id = ?;`,
};
