export interface Document {
  title: string
  subtitle?: string
  _type: string
  _id: string
  slug: string
  linkText?: string
  tags?: string[]
  summary?: string
  description?: string
  featuredImage?: any
  coverImage?: any
  minVariantPrice?: any
  variants?: any[]
  products?: any[]
}