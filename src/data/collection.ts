import { CollectionDocument } from '../types'
import { mockProductOne } from './product'

export const mockCollectionOne: CollectionDocument = {
  _id: 'xyz',
  _type: 'collection',
  slug: 'black-gold',
  title: 'Black Gold',
  coverImage: {
    url: 'https://cdn.sanity.io/images/i21fjdbi/production/1ae215325fe329bbb281dd26eaf8bcbddb83e79b-1704x2272.jpg?rect=0,0,1704,1821&w=1200&fm=webp',
  },
  products: Array.from({ length: 50 }).map(() => mockProductOne),
  description:
    'Our newest creation, Black Gold, is finally here. An exclusive blend of alloys form this alluring 18k hue, available nowhere else in the galaxy.',
}

export const mockCollectionTwo: CollectionDocument = {
  _id: 'abc',
  _type: 'collection',
  slug: 'mens-edit',
  title: "Men's Edit",
  coverImage: {
    url: 'https://cdn.sanity.io/images/i21fjdbi/production/548918e2698088a79c6ff2ad1633a09f8d088ed7-2291x1535.jpg?rect=0,101,2291,1155&w=2200&fm=webp',
  },
  products: Array.from({ length: 15 }).map(() => mockProductOne),
  description:
    "Browse through Spinelli Kilcollin's selection of High-End Men's Jewelry. From gold to sterling silver, these pieces shimmer & shine with sophistication and personality.",
}
