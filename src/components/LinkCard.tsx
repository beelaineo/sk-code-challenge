import * as React from 'react'
import Link from './Link'
import { Document } from '../types'

interface LinkCardProps {
  document: Document
}

export const LinkCard: React.FC<LinkCardProps> = (props) => {
  // switch (props.type) {
  //   case 'product':
  //     return ___
  //   case 'collection':
  //     return
  //   case 'page':
  //     return
  //   case 'custom':
  //     return
  //   default:
  //     // @ts-ignore
  //     console.warn(`Link card for type "${props.type}" is missing or nonexistent!`)
  //     return null
  // }
  return (
  <div className={`card ${props.document._type}`} id={'card'+props.document._id}>
    <small>{props.document._type}</small>
    <h2>{props.document.title}</h2>
    <div>{props.document.summary || props.document.description || null}</div>
    <Link document={props.document} />
  </div>
  )
}