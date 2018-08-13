const db = require('../db')

module.exports = db.defineModel('order', {
  orderNo: db.STRING,
  sponsorId: { // 发起人 ID
    type: db.STRING
    // references: {
    //   model: 'customer',
    //   key: 'id'
    // }
  },
  orderPersonId: { // 下单人 ID
    type: db.STRING
    // references: {
    //   model: 'customer',
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
  number: db.INTEGER, // 商品数量
  address: db.STRING, //
  logistics: db.STRING, // 物流信息
  freight: db.STRING, // 运费
  loss: db.STRING, // 损耗
  remark: db.STRING, // 备注
  reward: db.STRING, // 团队奖励
  rewardPersonId: { // 奖励受益人 ID
    type: db.STRING
    // references: {
    //   model: 'customer',
    //   key: 'id'
    // }
  },
  salesConfirmation: db.BOOLEAN, // 销售是否确认
  financialConfirmation: db.BOOLEAN, // 财务是否确认
  isAlive: db.BOOLEAN, // 是否激活
  isDelete: db.BOOLEAN // 是否删除
})
