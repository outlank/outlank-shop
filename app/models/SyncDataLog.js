const db = require('../db')

module.exports = db.defineModel('sync_data_log', {
  sync_type: db.STRING(255),
  sync_frequentness: db.INTEGER(255),
  source_count: db.INTEGER(255),
  save_count: db.INTEGER(255),
  sync_time: db.DATE,
  create_time: db.DATE,
  sync_status: db.INTEGER(255)
})
