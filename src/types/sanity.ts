export interface SanityDocument {
  _id: string
  _type: string
}

type Maybe<T> = T | null | void

export interface Money {
  currency: string
  amount: number
}

/**
 * Products
 */

export interface ProductDocument extends SanityDocument {
  title: string
  _type: 'product'
  slug: string
  minVariantPrice: Money
  maxVariantPrice: Money
  featuredImage?: Maybe<Image>
  variants: ProductVariant[]
  tags: string[]
}

export interface ProductVariant {
  title: string
  swatch: Maybe<Image>
}

/**
 * Collections
 */

export interface CollectionDocument extends SanityDocument {
  title: string
  _type: 'collection'
  slug: string
  coverImage?: Maybe<Image>
  description: string
  products: ProductDocument[]
}

/**
 * General Pages
 */

export interface PageDocument extends SanityDocument {
  title: string
  _type: 'page'
  slug: string
  summary: string
  coverImage?: Maybe<Image>
}

/**
 * Shared
 */

export interface Image {
  url: string
}
