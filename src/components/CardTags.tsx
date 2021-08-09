import * as React from 'react'
import { Document } from '../types'
import { x } from '@xstyled/styled-components'

interface TagsProps {
  document: Document
}

const CardTags: React.FC<TagsProps> = ({ document }) => {
  if (document.tags) {
    return (
      <x.div className="tags" position="absolute" mt={8} mr={8} top={0} right={0} spaceX={2}>
        {document.tags.map(
          (tag, i) => (
            <x.div key={`tag${i}`} display="inline-block" p={2} bg="red-200">{tag}</x.div>
          )
        )}
      </x.div>
    )
  } else {
    return null
  }
}

export default CardTags