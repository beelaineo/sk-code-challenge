import * as React from 'react'
import { useRouter } from 'next/router'

const CollectionPage = () => {
  const router = useRouter()
  return router.query['collection-slug']
}

export default CollectionPage