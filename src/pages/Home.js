import React from 'react'
import { Helmet } from 'react-helmet'
import {Carousel, Highlights, HomePageIntro, HotelServices, HotelTour, LoungeAndRestaurant, Map,  MeetingVenues,  Rooms} from '../components'
import { useRoomsContext } from '../contextApi/roomsContext'
import { useReactHelmetContext } from '../contextApi/ReactHelmetContext'

const Home = () => {
  const {video, roomsType, restaurantandlounge, glance, carouselData, meetingsData } = useRoomsContext();
  const {home } = useReactHelmetContext();  
  return (
    <main>
      <Helmet>
        <title>{home.title}</title>
        <meta name={home.description} content={home.content} />
        <meta  name={home.keywords} keywords={home.keywords}/>
      </Helmet>
      <Carousel data={carouselData}/>
      <HomePageIntro/>
      <Rooms rooms = {roomsType}/>
      <LoungeAndRestaurant data={restaurantandlounge} />
      <MeetingVenues  data={meetingsData}/>
      <HotelServices data={glance}/>
      <Highlights/>
      <HotelTour data={video}/>
      <Map/>
    </main>
  )
}

export default Home