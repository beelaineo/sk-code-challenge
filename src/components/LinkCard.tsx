import * as React from 'react'
import Link from './Link'
import CardTags from './CardTags'
import { Document } from '../types'
import { x } from '@xstyled/styled-components'

interface LinkCardProps {
  document: Document
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

const cardColor = (type) => {
  switch (type) {
    case 'product':
      return 'indigo-200'
    case 'collection':
      return 'amber-200'
    case 'page':
      return 'pink-200'
    case 'custom':
      return 'green-200'
    default:
      return 'gray-200'
  }
}

export const LinkCard: React.FC<LinkCardProps> = (props) => {
  return (
  <x.div
    className={`card ${props.document._type}`}
    id={'card'+props.document._id}
    p={8}
    maxWidth="lg"
    mx="auto"
    my={16}
    bg="white"
    borderRadius="lg"
    boxShadow="lg"
    borderWidth="11 0 0 0"
    borderStyle="solid"
    borderColor={cardColor(props.document._type)}
    fontSize={13}
    position="relative"
  >
    {props.document.featuredImage ? <img width="90px" src={props.document.featuredImage.url} /> : null}
    {props.document.coverImage ? <img width="90px" src={props.document.coverImage.url} /> : null}
    
    {props.document.tags && props.document.tags.length > 0 ? <CardTags document={props.document} /> : null}

    <x.h2 mt={3} mb={1} fontSize={20} fontWeight="normal">{props.document.title}</x.h2>
    
    {props.document._type == 'product' ? <p>starting at {priceFormatter.format(props.document.minVariantPrice.amount/100).replace(/(\.|,)00$/g, '')}</p> : null}
    {props.document._type == 'collection' ? <p>50+ items</p> : null}

    <div>{props.document.summary || props.document.description || null}</div>
    <x.div mt={6} fontSize={16} textAlign="center">
      <Link document={props.document} />
    </x.div>
  </x.div>
  )
}