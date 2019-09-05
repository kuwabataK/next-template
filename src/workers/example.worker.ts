/* eslint-disable @typescript-eslint/no-explicit-any */
// src/webworker/example.worker.ts
const ctx: Worker = self as any

ctx.addEventListener('message', async event => {
  console.log('example.worker received 1:', event)
  ctx.postMessage({ msgCode: 'S', msg: '' })
})

export default ctx
