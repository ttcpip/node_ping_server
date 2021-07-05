const koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const log = require('./lib/log')

const app = new koa()
const port = +process.argv[2] || +process.env.PORT || 8080

app.use(logger())
app.use(bodyParser())

app.use((ctx) => {
  const { body, query, ip, ips } = ctx.request
  const { headers, method, url } = ctx

  ctx.response.body = {
    method,
    url,
    ip,
    ips,
    body,
    query,
    headers,
  }
  ctx.response.status = 200

  log('↓')
  log(ctx.response.body)
  log('↑')
})

app.listen(port, () => {
  log(`Listening on port ${port}`)
})