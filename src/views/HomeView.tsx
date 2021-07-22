import * as React from 'react'
import { LinkCard } from '../components/LinkCard'

interface HomeViewProps {
  linkData: any
}

export const HomeView: React.FC<HomeViewProps> = ({ linkData }) => {
  return (
    <div>
      {linkData.map(
        (link) => null,
        // remove `null` and render a card for each linked document
      )}
      {
        // Here, render a hard-coded card for the Customization page
      }
    </div>
  )
}
