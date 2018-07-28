const db = require('../db')

module.exports = db.defineModel('product_spu', {
  brand: db.STRING, // 商品品牌
  specifications: db.STRING, // 商品品名
  detail: db.TEXT, // 商品详情
  specsClass: db.STRING, // 商品规格分类
  classification: db.STRING // 商品分类
})
