import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { transactionsRoute } from './routes/transactions'

export const app = fastify()

app.register(cookie)

app.addHook('preHandler', async (request) => {
  console.log(`[${request.method} ${request.url}]`)
})

app.register(transactionsRoute, {
  prefix: 'transactions',
})
