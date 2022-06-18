import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from './components/layout'


export default function MyApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}