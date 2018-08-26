const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.body = 'Hello Git'
})

app.listen(8080, () => {
  console.log('server is running...')
})
