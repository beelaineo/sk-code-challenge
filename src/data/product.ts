import { ProductDocument } from '../types'

export const mockProductOne: ProductDocument = {
  _id: '123',
  _type: 'product',
  title: 'Solarium',
  slug: 'solarium',
  tags: ['new', 'on sale'],
  minVariantPrice: {
    currency: 'USD',
    amount: 65000,
  },
  maxVariantPrice: {
    currency: 'USD',
    amount: 78000,
  },
  featuredImage: {
    url: 'https://cdn.shopify.com/s/files/1/1105/2238/products/Solarium925_Beige_c7af5040-b81f-4b47-9f75-a44b9fc80222_1600x_crop_center.jpg?v=1594921624',
  },
  variants: [
    {
      title: 'Solarium MX',
      swatch: {
        url: 'https://cdn.sanity.io/images/i21fjdbi/production/5e3a2b5f0d3dc034fb2bb8237bfdb482cb64b11c-822x706.png?w=100&fm=webp',
      },
    },
    {
      title: 'Solarium SG',
      swatch: {
        url: 'https://cdn.sanity.io/images/i21fjdbi/production/b582428ed717c8b955692816290a399170c46f88-822x706.png?w=100&fm=webp',
      },
    },
    {
      title: 'Solarium Gold',
      swatch: {
        url: 'https://cdn.sanity.io/images/i21fjdbi/production/9c2d1b1a20a239f91084791c7e71f4866fd17d33-822x706.png?w=100&fm=webp',
      },
    },
    {
      title: 'Solarium Silver',
      swatch: {
        url: 'https://cdn.sanity.io/images/i21fjdbi/production/1908a06320c8ed9113b1a22b7c7e199d5d5ce4c8-822x706.png?w=100&fm=webp',
      },
    },
  ],
}

export const mockProductTwo: ProductDocument = {
  _id: '234',
  _type: 'product',
  title: 'Calliope',
  slug: 'calliope',
  tags: [],
  minVariantPrice: {
    currency: 'USD',
    amount: 50000,
  },
  maxVariantPrice: {
    currency: 'USD',
    amount: 50000,
  },
  featuredImage: {
    url: 'https://cdn.shopify.com/s/files/1/1105/2238/products/Caliope_Stack_Beige_1600x_crop_center.jpg?v=1559585242',
  },
  variants: [],
}
