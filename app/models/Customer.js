const db = require('../db')

module.exports = db.defineModel('customer', {
  role: db.INTEGER, // 角色 1-合伙人 2-店长
  referralId: db.STRING, // 推荐人 ID
  beneficiaryId: db.STRING, // 受益人 ID 即 推荐人的推荐人
  openID: db.STRING, // 微信openId
  weixinInfo: db.STRING, // 微信用户信息
  phone: db.STRING, // 手机号
  buyPriceLimit: db.STRING // 购买限额
})
