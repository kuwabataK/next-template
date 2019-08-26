import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/template/Layout'
import store from '../store/store';
import {observer} from 'mobx-react'

const CounterPage: React.FunctionComponent = observer(() => {

    const increment = () => {
        store.counterStore.increment()
    }

    const decrement = () => {
        store.counterStore.decrement()
    }

    return <Layout title="カウンターページ | Next.js + TypeScript Example">
        <h1>カウンターページ</h1>
        <p>mobxを使ったカウンターページのサンプルです</p>
        <p>{store.counterStore.counter}</p>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
})
export default CounterPage
