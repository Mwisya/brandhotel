import React from 'react'
import {Carousel, Highlights, HotelServices, HotelTour, Introduction, LoungeAndRestaurant, Map,  MeetingVenues,  Rooms} from '../../components'
import { useRoomsContext } from '../../contextApi/roomsContext'

const Home = () => {
  const {video, roomsType, restaurantandlounge, glance, carouselData, meetingsData } = useRoomsContext()
  const overview =  'Brand Hotel Dodoma is conveniently located in Kisasa house 300. Easily accessible as it only a few kilometers away. We offer outstanding services from accommodation,  restaurant to lounge to all our esteemed guests. Our hotel bookings come with exclusive access to the swimming pool and complimentary breakfast to all our guests.The hotel is a collection of spacious, tastefully furnished rooms and suites with all necessary amenities including King-sized beds, Wi-Fi connection, HD Smart Tv, Air conditioner, Large windows fitted with blackout curtains offering privacy and stunning views of the surroundings  day and night, Balcony for relaxation, shower and WC fitted with blow dryer and basic toiletries, Coffee/tea maker, Cozy sandals not forgetting mini fridge which are restocked on request. Relish delightful moments of the sundown  in our beautiful garden with family and friends. Swim like a dolphin and bask in the outdoor swimming pool.Delight your meals of the day at our signature restaurant with a selection of international favorites and a fusion of innovative Tanzania Delicacies. Savor every moment like never before at Brand Hotel with at our state-of-art lounge, stocked with local and international drinks of preference to make a selection from. Enjoy your sips at the lounge in a conducive setting. For official services, we offer variety of  venues to fulfill the purpose. Enjoy absolute ambiance,  relaxed and private spaces to carry on with your meetings, conferences or events. Our venues are equipped with necessary amenities to make any meeting a success.'
  
  return (
    <main>
      <Carousel data={carouselData}/>
      <Introduction overview={overview}/>
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