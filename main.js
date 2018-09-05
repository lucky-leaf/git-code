const Koa = require('koa')
const app = new Koa()

app.use(ctx => {
  ctx.type = 'text/html'
  ctx.body = '<h1>Hello Git</h1>'
})

app.listen(8080, () => {
  console.log('server is running...')
})
