import * as React from 'react'
import { HomeView } from '../views/HomeView'
import { mockProductOne, mockProductTwo } from '../data/product'
import { mockCollectionOne, mockCollectionTwo } from '../data/collection'
import { mockPageOne } from '../data/page'

const linkData = [
  mockProductOne,
  mockProductTwo,
  mockCollectionOne,
  mockCollectionTwo,
  mockPageOne,
]

const HomePage = () => <HomeView linkData={linkData} />

export default HomePage
