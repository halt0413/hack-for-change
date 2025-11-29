import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get("/", (c) => c.text('Hono'))

serve({
    fetch: app.fetch,
    port: 8000,
})

console.log('API running: http://localhost:8000')
