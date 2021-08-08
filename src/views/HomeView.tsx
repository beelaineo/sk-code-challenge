import * as React from 'react'
import { CollectionDocument, PageDocument, ProductDocument } from '../types'
import { LinkCard } from '../components/LinkCard'
import { x } from '@xstyled/styled-components'

interface HomeViewProps {
  linkData: ( CollectionDocument | PageDocument | ProductDocument )[]
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
          <LinkCard document={link} />
        )
      )}
      {
        // Here, render a hard-coded card for the Customization page
      }
    </div>
    </>
  )
    }