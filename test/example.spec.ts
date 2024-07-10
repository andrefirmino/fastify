import { expect, test } from 'vitest'

test('O usuário consegue criar uma nova transação', () => {
  // fazer a chamada http para criar uma nova transação
  const responseStatusCode = 201

  // validação
  expect(responseStatusCode).toEqual(201)
})
