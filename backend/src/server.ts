import { Hono } from 'hono'
import classRoute from "./routes/newclass"
const app = new Hono()
app.get('/', (c) => c.text('Hello Bun!'))

app.route('/api/newclass',classRoute)

export default app

function logger(): import("hono").MiddlewareHandler<import("hono/types").BlankEnv, "*", {}> {
   throw new Error('Function not implemented.')
}
