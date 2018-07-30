const db = require('../db')

module.exports = db.defineModel('product_sku', {
  spuId: { // 商品ID
    type: db.STRING
    // references: {
    //   model: 'product_spu',
    //   key: 'id'
    // }
  },
  name: db.STRING, // sku 名称
  img: db.STRING, // sku 图片
  describe: db.STRING, // sku 描述
  weight: db.STRING, // 权重
  vendorId: { // 供应商信息
    type: db.STRING
    // references: {
    //   model: 'vendor',
    //   key: 'id'
    // }
  },
  specs: db.STRING, // 规格
  inventory: db.INTEGER, // 库存
  minBuyNumber: db.INTEGER, // 最小购买数量
  sales: db.INTEGER, // 销售量
  price: db.STRING, // 价格
  remark: db.STRING // 产品额外信息
})
