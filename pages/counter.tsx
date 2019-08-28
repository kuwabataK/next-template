import * as React from 'react'
import Link from 'next/link'
import Layout from '../src/components/template/Layout'
import store from '../src/store/store'
import { observer } from 'mobx-react'
import { usePrevious } from '../src/utils/react-hooks'
import { cloneDeep } from 'lodash'

const CounterPage: React.FunctionComponent = observer(() => {
  const preCnt = usePrevious(cloneDeep(store.counterStore.objectCounter))
  // const preCnt = usePrevious(store.counterStore.objectCounter)
  console.log(preCnt && preCnt.counter)
  console.log(preCnt && preCnt.deepcnt.counter)

  const increment: () => void = () => {
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
