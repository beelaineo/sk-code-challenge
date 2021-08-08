export interface Document {
  title: string
  _type: string
  _id: string
  slug: string
  tags?: string[]
  summary?: string
  description?: string
  featuredImage?: any
  coverImage?: any
  minVariantPrice?: any
}