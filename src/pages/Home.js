import React from 'react'
import Hero from '../components/Hero';
import Posts from '../components/Posts';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
    return (
      <div>
        <Hero />
        <SectionTitle>Nos annonces</SectionTitle>
        <Posts/>
      </div>
  )
}

export default Home