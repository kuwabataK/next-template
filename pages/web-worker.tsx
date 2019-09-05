/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import Layout from '../src/components/template/Layout'
import Link from 'next/link'
// worker import時はfileパスの頭に 'worker-loader?name=static/[hash].worker.js!' をつける
import MyWorker from 'worker-loader?name=static/[hash].worker.js!../src/workers/example.worker'

let worker: MyWorker

const WebWorker: React.FC = () => {
  // mount時にworkerを作成する
  React.useEffect(() => {
    worker = new MyWorker()
    // unmount時にworkerをterminateする
    return () => worker.terminate()
  }, [])

  /**
   * workerから帰ってくるイベント発火時に実行される関数
   * @param event
   */
  const onWorkerMessage = (event: { data: number }) => {
    console.log('Workerから結果が帰ってきたよ！！！', event.data)
  }
  /**
   * workerの処理を実行する
   */
  const exec = () => {
    worker.onmessage = onWorkerMessage // workerから帰ってくる処理結果をひろうリスナーを登録
    worker.postMessage(33) // イベント経由でworkerに処理を依頼
  }

  return (
    <Layout title="WebWorkerテスト | Next.js + TypeScript Example">
      <h1>WebWorkerテスト</h1>
      <button onClick={exec}>WebWorker呼び出し</button>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Layout>
  )
}

export default WebWorker
