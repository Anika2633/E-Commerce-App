import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OutPolicy from '../components/OutPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection />
      <BestSeller />
      <OutPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home