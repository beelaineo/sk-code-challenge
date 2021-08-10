import * as React from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const router = useRouter()
  return router.query['product-slug']
}

export default ProductPage