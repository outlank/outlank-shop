const model = require('../models')

let addSyncDataLog = async (reqBody) => {
  await model.SyncDataLog.create({
    sync_type: reqBody.sync_type,
    sync_frequentness: reqBody.sync_frequentness,
    source_count: reqBody.source_count,
    save_count: reqBody.save_count,
    sync_time: reqBody.sync_time,
    create_time: reqBody.create_time,
    sync_status: reqBody.sync_status
  })
  return 'OK!'
}

let getSyncDataLog = async () => {
  let allSyncDataLog = await model.SyncDataLog.findAll()
  return allSyncDataLog
}

module.exports = { addSyncDataLog, getSyncDataLog }
