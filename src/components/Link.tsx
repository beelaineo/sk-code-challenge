import * as React from 'react'
import NextLink from 'next/link'
import { Document } from '../types'

interface LinkProps {
  document: Document
}

const Link: React.FC<LinkProps> = (props) => {
  switch (props.document._type) {
    case 'product':
      return (
        <NextLink href={`/products/${encodeURIComponent(props.document.slug)}`}>
          <a>view product</a>
        </NextLink>
      )
    case 'collection':
      return (
        <NextLink href={`/collections/${encodeURIComponent(props.document.slug)}`}>
          <a>shop collection</a>
        </NextLink>
      )
    case 'page':
      return (
        <NextLink href={`/pages/${encodeURIComponent(props.document.slug)}`}>
          <a>learn more</a>
        </NextLink>
      )
    default:
      // @ts-ignore
      console.warn(`Link for type "${props.document._type}" is missing or nonexistent!`)
      return null
  }
}

export default Link