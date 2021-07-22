import * as React from 'react'
import { NextRouter } from 'next/router'
import Head from 'next/head'

const { useEffect } = React

interface AppProps {
  Component: React.ComponentType
  pageProps: any
}

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/fonts/fonts.css" />
        <link rel="icon" href="/static/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
