import { Page as Content }  from '../../components/Page'
import { mockCollectionOne, mockCollectionTwo } from '../../data/collection'

const collections = [
  mockCollectionOne,
  mockCollectionTwo
]

function CollectionPage({ collection }) {
  return <Content document={collection} />
}

export async function getStaticPaths() {
  const paths = collections.map((collection) => ({
    params: { 'collection-slug': collection.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const path = params['collection-slug']
  const collection = collections.find( ({ slug }) => slug == path)
  return { props: { collection } }
}

export default CollectionPage