import * as React from 'react'
import { mockPageOne } from '../../data/page'
import { Page as Content } from '../../components/Page'

const pages = [mockPageOne]

function Page({ page }) {
  return <Content document={page} />
}

export async function getStaticPaths() {
  const paths = pages.map((page) => ({
    params: { 'page-slug': page.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = params['page-slug']
  const page = pages.find(({ slug }) => slug == path)
  return { props: { page } }
}

export default Page
