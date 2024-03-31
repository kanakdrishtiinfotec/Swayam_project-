import React from 'react'
import HomeCategory from './HomeCategory'
import CategoryShowcase from '../Home/CategoryShowcase'
import Banner from '../Home/Banner'
import Feature from '../components/Feature';
import Fact from '../components/Fact'
import Feature1 from '../components/Feature1';


const Home = () => {
  return (
    <div>
      <Banner/>
      <Feature/>
      <HomeCategory/>
      <Feature1/>
      
      <CategoryShowcase/>
      <Fact/>
    </div>
  )
}

export default Home
