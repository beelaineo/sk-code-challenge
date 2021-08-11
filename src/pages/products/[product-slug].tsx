import { Page as Content } from '../../components/Page'
import { mockProductOne, mockProductTwo } from '../../data/product'

const products = [mockProductOne, mockProductTwo]

function ProductPage({ product }) {
  return <Content document={product} />
}

export async function getStaticPaths() {
  const paths = products.map((page) => ({
    params: { 'product-slug': page.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = params['product-slug']
  const product = products.find(({ slug }) => slug == path)
  return { props: { product } }
}

export default ProductPage
