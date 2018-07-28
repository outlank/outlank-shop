const db = require('../db')

module.exports = db.defineModel('vendor', {
  name: db.STRING, // 商品品名
  region: db.STRING, // 供应商地区
  contact: db.STRING, // 商品联系方式
  detail: db.TEXT, // 供应商详情
  remark: db.STRING // 备注
})
