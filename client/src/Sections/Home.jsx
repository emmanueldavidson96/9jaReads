import React from 'react'
import Banner from '../components/Banner'
import FavoriteBook from '../components/FavoriteBook'
import FavBook from '../components/FavBook'
import PromoBanner from '../components/PromoBanner'
import OtherBooks from '../components/OtherBooks'
import Reviews from '../components/Reviews'

export default function Home() {
  return (
    <div className=''>
      <Banner/>
      <FavoriteBook/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Reviews/>
    </div>
  )
}
