import * as React from 'react'
import Link from './Link'
import Tags from './CardTags'
import VariantSwatches from './CardVariantSwatches'
import { Document } from '../types'
import { x } from '@xstyled/styled-components'
import Image from 'next/image'

interface LinkCardProps {
  document: Document
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
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
      id={'card' + props.document._id}
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
      {props.document.featuredImage ? (
        <Image
          src={props.document.featuredImage.url}
          height="90px" // Desired size with correct aspect ratio
          width="90px" // Desired size with correct aspect ratio
          alt={props.document.title}
        />
      ) : null}

      {props.document.coverImage ? (
        <x.div
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundImage={`url(${props.document.coverImage.url})`}
          w="90px"
          h="90px"
        />
      ) : null}

      {props.document.tags && props.document.tags.length > 0 ? (
        <Tags document={props.document} />
      ) : null}

      <x.h2 mt={3} mb={1} fontSize={20} fontWeight="normal">
        {props.document.title}
        {props.document.variants && props.document.variants.length > 0 ? (
          <VariantSwatches document={props.document} />
        ) : null}
      </x.h2>

      {props.document._type == 'product' ? (
        <p>
          starting at{' '}
          {priceFormatter
            .format(props.document.minVariantPrice.amount / 100)
            .replace(/(\.|,)00$/g, '')}
        </p>
      ) : null}
      {props.document.products ? (
        <p>{props.document.products.length} items</p>
      ) : null}
      {props.document.subtitle ? <p>{props.document.subtitle}</p> : null}

      <x.div my={3}>
        {props.document.summary || props.document.description || null}
      </x.div>
      <x.div mt={3} fontSize={16} textAlign="center">
        <Link document={props.document} />
      </x.div>
    </x.div>
  )
}
