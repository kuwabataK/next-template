/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import Link from 'next/link'
import Layout from '../src/components/template/Layout'
import store from '../src/store/store'
import { observer } from 'mobx-react'
import { usePrevious } from '../src/utils/react-hooks'
import MyWorker from 'worker-loader?name=static/[hash].worker.js!../src/workers/example.worker'

const CounterPage: React.FunctionComponent = observer(() => {
  const onWorkerMessage = (event: any) => {
    console.log('イベントリスナから結果が帰ってきたよ！！！')
    console.log('onWorkerMessage', event.data)
  }
  const goReady = () => {
    const worker = new MyWorker()
    worker.postMessage({ aaa: 'aaaaa' })
    worker.addEventListener('message', onWorkerMessage)
  }

  const preCnt = usePrevious(store.counterStore.objectCounter, {
    deepCopy: true
  })
  // const preCnt = usePrevious(store.counterStore.objectCounter)
  console.log(preCnt && preCnt.counter)
  console.log(preCnt && preCnt.deepcnt.counter)

  const increment: () => void = () => {
    goReady()
    store.counterStore.incrementObj()
  }

  const decrement: () => void = () => {
    store.counterStore.decrementObj()
  }

  const incrementDeep: () => void = () => {
    store.counterStore.incrementDeep()
  }

  const decrementDeep: () => void = () => {
    store.counterStore.decrementDeep()
  }

  return (
    <Layout title="カウンターページ | Next.js + TypeScript Example">
      <h1>カウンターページ</h1>
      <p>mobxを使ったカウンターページのサンプルです</p>
      <p>{store.counterStore.objectCounter.counter}</p>
      <p>deep: {store.counterStore.objectCounter.deepcnt.counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={incrementDeep}>deep+</button>
      <button onClick={decrementDeep}>deep-</button>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
})
export default CounterPage
