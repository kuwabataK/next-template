import * as React from 'react'
import { NextPageContext } from 'next'
import Layout from '../src/components/template/Layout'
import { User } from '../src/interfaces'
import { findData } from '../src/utils/sample-api'
import ListDetail from '../src/components/atoms/ListDetail'

type Props = {
  item?: User
  errors?: string
}

class InitialPropsDetail extends React.Component<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query
      const item = await findData(Array.isArray(id) ? id[0] : id)
      return { item }
    } catch (err) {
      return { errors: err.message }
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    const { item, errors } = this.props

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      )
    }

    return (
      <Layout
        title={`${item ? item.name : 'Detail'} | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
    )
  }
}

export default InitialPropsDetail
