import * as React from 'react'
import { CollectionDocument, PageDocument, ProductDocument, Document } from '../types'
import { LinkCard } from '../components/LinkCard'
import { x } from '@xstyled/styled-components'

interface HomeViewProps {
  linkData: ( CollectionDocument | PageDocument | ProductDocument )[]
}

export const mockPageOne: PageDocument = {
  _id: '789',
  _type: 'page',
  slug: 'the-story-of-sk',
  title: 'The story of SK',
  summary:
    'Spinelli Kilcollin was founded in 2010 by husband-and-wife team Yves Spinelli and Dwyer Kilcollin out of their garage on the east side of Los Angeles. The brand launched with an innovative series of interconnected Galaxy rings, which are designed to be stacked or worn across several fingers, and which are now synonymous with the Spinelli Kilcollin aesthetic.',
}

const customCard: Document = {
  _id: 'xxx',
  _type: 'custom',
  title: 'Customize',
  subtitle: 'Read about the step by step process of creating a custom piece.',
  slug: 'customize',
  featuredImage: {
    url: '/static/images/customze.png',
  },
  linkText: 'take the quiz',
  summary: 'Our in-house team will produce a unique 3D render of your design so that you can see your ideas brought to life and make sure the details are just right.'
}

export const HomeView: React.FC<HomeViewProps> = ({ linkData }) => {
  return (
    <>
    <x.h1 fontSize="xl" fontWeight="medium">
      Homepage
    </x.h1>
    <div>
      {linkData.map(
        (link) => (
          <LinkCard key={link._id} document={link} />
        )
      )}
      {
        <LinkCard document={customCard} />
      }
    </div>
    </>
  )
    }