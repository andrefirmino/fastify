import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('tb_transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 100.25,
    })
    .returning('*')

  return transaction
})

app.get('/transactions', async () => {
  const transactions = await knex('tb_transactions').select('*')

  return transactions
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
