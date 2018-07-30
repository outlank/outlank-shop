const db = require('../db')

module.exports = db.defineModel('order_product', {
  orderId: { // 订单ID
    type: db.STRING
    // references: {
    //   model: 'order',
    //   key: 'id'
    // }
  },
  productId: { // 商品ID
    type: db.STRING
    // references: {
    //   model: 'product_sku',
    //   key: 'id'
    // }
  },
  number: db.INTEGER // 商品数量
})
