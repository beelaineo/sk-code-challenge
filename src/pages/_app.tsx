import * as React from 'react'
import { NextRouter } from 'next/router'
import { x, defaultTheme, ThemeProvider, Preflight } from '@xstyled/styled-components'
import Head from 'next/head'

const { useEffect } = React

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: NextRouter
}

const theme = {
  ...defaultTheme
}

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Head>
        <link rel="stylesheet" href="/static/fonts/fonts.css" />
        <link rel="icon" href="/static/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <x.main m={'10'}>
        <Component {...pageProps} />
      </x.main>
    </ThemeProvider>
  )
}

export default App
