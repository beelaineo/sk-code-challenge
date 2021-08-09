import * as React from 'react'
import { Document } from '../types'
import { x } from '@xstyled/styled-components'

interface SwatchesProps {
  document: Document
}

const CardVariantSwatches: React.FC<SwatchesProps> = ({ document }) => {
  if (document.variants) {
    return (
      <x.div className="swatches" display="inline-block" mx={2} spaceX={1}>
        {document.variants.map(
          (variant, i) => (
            <x.img display="inline-block" width="16px" title={variant.title} src={variant.swatch.url} key={variant.title} />
          )
        )}
      </x.div>
    )
  } else { return null }
}

export default CardVariantSwatches