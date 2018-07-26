const db = require('../db')

module.exports = db.defineModel('product', {
  product_no: db.STRING(255),
  brand: db.STRING(255),
  origin: db.STRING(255),
  specifications: db.BLOB('long'),
  detail: db.DATE,
  price: db.DATE
})
