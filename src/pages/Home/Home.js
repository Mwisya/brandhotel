import React from 'react'
import {Experiences, Introduction, NewsLetter, OurServices, Rooms, SlideShow, Visit} from '../../components'
import { useRoomsContext } from '../../contextApi/roomsContext'

const Home = () => {
  const { roomsType } = useRoomsContext()
  const overview = {
    heading:'Overview',
    content: 'Brand Hotel Dodoma is conveniently located in Kisasa house 300. Easily accessible as it only a few kilometers away.  The hotel is a collection of 90 spacious, tastefully furnished Deluxe Rooms, Suites, and Executive suites offering stunning views of the city by day and night.Indulge in delightful moments of sundowns. Unwind in our beautiful garden or our heated swimming pool and Enjoy your favorite drinks in our  modern lounge with exceptional services.  Delight your palette at our signature restaurant  with a selection of international favorites and a fusion of innovative Tanzania  Delicacies. Enjoy intimate and private spaces for all your meeting and events with our five fully equipped state-of-the-art meeting rooms.Savour every moment like never before at Brand Hotel with delight.'
  }
  return (
    <main>
      <SlideShow/>
      <Introduction overview={overview}/>
      <Rooms rooms = {roomsType}/>
      <OurServices/>
      <Experiences/>
      <Visit/>
      <NewsLetter/>
    </main>
  )
}

export default Home