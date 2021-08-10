import * as React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
  const router = useRouter()
  return router.query['page-slug']
}

export default Page
