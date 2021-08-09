import * as React from 'react'
import { GetStaticProps, GetStaticPropsContext, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { mockProductOne, mockProductTwo } from '../../data/product'

const ProductPage = () => {
  const router = useRouter()
  return router.query['product-slug']
}


// This function gets called at build time
export async function getStaticProps() {
  const products = [
    mockProductOne,
    mockProductTwo
  ]

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}
// This function gets called at build time
export async function getStaticPaths() {
  const products = [
    mockProductOne,
    mockProductTwo
  ]
  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { 'product-slug': product.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export default ProductPage