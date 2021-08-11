import * as React from 'react'
import NextLink from 'next/link'
import { Document } from '../types'
import { x } from '@xstyled/styled-components'

interface PageProps {
  document: Document
}

export const Page: React.FC<PageProps> = (props) => {
  return (
    <x.div minHeight="calc(100vh - 4rem)" display="flex" flexDirection="column" justifyContent="space-between">

      <x.h1 fontSize={20} fontWeight="normal">
        {props.document.title}
      </x.h1>

      <x.div mt={3} fontSize={16} textAlign="center">
        <NextLink
            href="/"
          >
            <x.a
              color={{ _: 'gray-800', hover: 'black', visited: 'gray-600' }}
              cursor="pointer"
              textDecoration="underline"
            >
              back to home
            </x.a>
          </NextLink>
      </x.div>

    </x.div>
  )
}
