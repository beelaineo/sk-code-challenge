import * as React from 'react'
import { CollectionDocument, PageDocument, ProductDocument } from '../types'
import { LinkCard } from '../components/LinkCard'

interface HomeViewProps {
  linkData: ( CollectionDocument | PageDocument | ProductDocument )[]
}

export const HomeView: React.FC<HomeViewProps> = ({ linkData }) => {
  return (
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
  )
    }