import * as React from 'react'
import { useRouter } from 'next/router'
import { mockPageOne } from '../../data/page'

const Page = () => {
  const router = useRouter()
  return router.query['page-slug']
}

export default Page