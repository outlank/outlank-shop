const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

let files = fs.readdirSync(path.join(__dirname, '/../routes'))

let jsFiles = files.filter((f) => {
  return f.endsWith('.js')
}, files)

for (let f of jsFiles) {
  // console.log(`import model from file ${f}...`);
  let name = f.substring(0, f.length - 3)
  // eslint-disable-next-line no-path-concat
  let route = require(__dirname + '/../routes/' + name)
  router.use('', route.routes(), route.allowedMethods())
}

module.exports = router
