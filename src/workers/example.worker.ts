import { square } from '../utils/calc' // importも使えるよ

/* eslint-disable @typescript-eslint/no-explicit-any */
// src/webworker/example.worker.ts
const ctx: Worker = self as any

ctx.addEventListener('message', async event => {
  console.log('worker側だよ！！ 受け取った値は', event.data)
  const res = square(event.data)
  ctx.postMessage({ input: event.data, output: res })
})

export default ctx
