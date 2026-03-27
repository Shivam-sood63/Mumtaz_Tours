import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'

import Deals from '../Components/Deals'
import Whyus from '../Components/Whyus'
import Places from '../Components/Places'
import Book from '../Components/Book'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Cards/>
      <Deals/>
      <Whyus/>
      <Places/>
      <Book/>
      <Footer/>
    </div>
  )
}

export default Home
