import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import stripeRouter  from './router/stripeRouter'
import stripeWebhook from './stripe/webhook/stripe'

const app = new Hono()

app.route("/stripe", stripeRouter)

app.route("/webhook/stripe", stripeWebhook);

serve({
    fetch: app.fetch,
    port: 8000,
})

console.log('API running: http://localhost:8000')
