/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/react-in-jsx-scope */
import { NextPage } from 'next'
import Link from 'next/link'
import Layout from '../src/components/template/Layout'
import List from '../src/components/molecules/List'
import { User } from '../src/interfaces'
import { findAll } from '../src/utils/sample-api'

type Props = {
  items: User[]
  pathname: string
}

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="List Example (as Functional Component) | Next.js + TypeScript Example">
    <h1>List Example (as Function Component)</h1>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

WithInitialProps.getInitialProps = async ({ pathname }) => {
  // Example for including initial props in a Next.js function compnent page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = await findAll()

  return { items, pathname }
}

export default WithInitialProps
