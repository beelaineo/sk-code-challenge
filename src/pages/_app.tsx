import * as React from 'react'
import { NextRouter } from 'next/router'
import {
  x,
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import Head from 'next/head'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: NextRouter
}

const sans = '"Helvetica Neue", helvetica, sans-serif'
const serif = '"Inferi", Georgia, serif'

const theme = {
  ...defaultTheme,
  fonts: {
    display: serif,
    body: serif,
  },
  fontFamilies: {
    mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    serif: serif,
    sans: sans,
  },
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
      <x.main
        p="2rem"
        backgroundColor="gray-100"
        fontFamily={serif}
        fontWeight="light"
        minHeight="100vh"
      >
        <Component {...pageProps} />
      </x.main>
    </ThemeProvider>
  )
}

export default App
