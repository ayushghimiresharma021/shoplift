import React from 'react'
import Headers from '../components/Layout/Headers'
import Hero from '../components/Route/Hero/Hero'
import Categories from '../components/Route/Categories/Categories'
import BestDeals from '../components/Route/BestDeals/BestDeals'
import FeaturedDeals from '../components/Route/FeaturedDeals/FeaturedDeals'
import Events from '../components/Events/Events'
import Footer from '../components/Layout/Footer'

const Home = () => {
  return (
    <>
    <div>
      <Headers activeHeading={1} />
      <Hero />
      <Categories />
      <Events  />
    </div>
    <div className='mx-4'>
      <BestDeals />
      <FeaturedDeals />
    </div>
    <div>
      <Footer />
    </div>
    </>
    
  )
}

export default Home
