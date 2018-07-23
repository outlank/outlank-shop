let { addSyncDataLog, getSyncDataLog } = require('../app/controllers/syncDataLog')
const router = require('koa-router')()

router.prefix('/api')

router.post('/syncDataLog', async (ctx, next) => {
  console.log(ctx.request.body)
  let reqBody = ctx.request.body
  ctx.body = await addSyncDataLog(reqBody)
})

router.get('/syncDataLog', async (ctx, next) => {
  console.log(ctx.request.body)
  let reqBody = ctx.request.body
  ctx.body = await getSyncDataLog(reqBody)
})

module.exports = router
