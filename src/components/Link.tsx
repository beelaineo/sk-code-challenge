import * as React from 'react'
import NextLink from 'next/link'
import { Document } from '../types'
import { x } from '@xstyled/styled-components'
import Arrow from './LinkArrow'

interface LinkProps {
  document: Document
}

const Link: React.FC<LinkProps> = (props) => {
  switch (props.document._type) {
    case 'product':
      return (
        <>
        <NextLink href={`/products/${encodeURIComponent(props.document.slug)}`}>
          <x.a
            color={{ _: 'gray-800', hover: 'black', visited: 'gray-600' }}
            cursor="pointer"
            textDecoration="underline"
          >
            view product <Arrow />
          </x.a>
        </NextLink>
        </>
      )
    case 'collection':
      return (
        <NextLink href={`/collections/${encodeURIComponent(props.document.slug)}`}>
          <x.a
            color={{ _: 'gray-800', hover: 'black', visited: 'gray-600' }}
            cursor="pointer"
            textDecoration="underline"
          >
            shop collection <Arrow />
          </x.a>
        </NextLink>
      )
    case 'page':
      return (
        <NextLink href={`/pages/${encodeURIComponent(props.document.slug)}`}>
          <x.a
            color={{ _: 'gray-800', hover: 'black', visited: 'gray-600' }}
            cursor="pointer"
            textDecoration="underline"
          >
            learn more <Arrow />
          </x.a>
        </NextLink>
      )
      case 'custom':
        return (
          <NextLink href={`/${encodeURIComponent(props.document.slug)}`}>
            <x.a
              color={{ _: 'gray-800', hover: 'black', visited: 'gray-600' }}
              cursor="pointer"
              textDecoration="underline"
            >
              {props.document.linkText ? props.document.linkText : 'read more'} <Arrow />
            </x.a>
          </NextLink>
        )
    default:
      // @ts-ignore
      console.warn(`Link for type "${props.document._type}" is missing or nonexistent!`)
      return null
  }
}

export default Link