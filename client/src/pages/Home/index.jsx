import React from 'react'
import Hero from './Hero'
import Features from './Features'
import VideoIntro from './VideoIntro'
import Prods from './Prods'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div>
         <Helmet>
        <title>Home</title>
      </Helmet>
        <Hero />
        <Features />
        <VideoIntro />
        <Prods />
    </div>
  )
}

export default Home