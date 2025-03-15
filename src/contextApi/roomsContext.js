import {createContext, useContext} from "react";
import {MdAir, MdBalcony, MdCoffeeMaker, MdCurtains, MdOutlineBed, MdOutlineRoomService, MdRoomPreferences, MdTv } from 'react-icons/md'
import { FaShower, FaTv, FaWifi } from 'react-icons/fa'
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiFridge, BiSolidDryer } from "react-icons/bi";

import standardroom from '../assets/roomTypes/standardroom.jpg'
import delux from '../assets/roomTypes/delux.jpg'
import doubledeluxe from '../assets/roomTypes/doubledeluxe.jpg'
import suite_9925 from '../assets/roomTypes/suite_9925.jpg'
import suite_9937 from '../assets/roomTypes/suite_9937.jpg'
// GALLERY
import dinning from '../assets/gallery/dinning.jpg'
import room from '../assets/gallery/room.jpg'
import party from '../assets/gallery/party.jpg'
// ROOMS AND SUITES
import executive_9947 from '../assets/roomTypes/executive_9947.jpg'
import executive_9944 from '../assets/roomTypes/executive_9944.jpg'
import executive_9946 from '../assets/roomTypes/executive_9946.jpg'
import executive_9956 from '../assets/roomTypes/executive_9956.jpg'
import executive_9958 from '../assets/roomTypes/executive_9958.jpg'
import executive_9941 from '../assets/roomTypes/executive_9941.jpg'
import facility_0010 from '../assets/venues/facility_0010.jpg'

import meeting_venue from '../assets/venues/meeting_venue.jpg'
import conference_hall from '../assets/venues/conference_hall.jpg'

import walkway from '../assets/walkway.jpg'
import welcome from '../assets/welcome.jpg'
import event from '../assets/event.jpg'
import swimming_pool from '../assets/swimming_pool.jpg'

import lounge from '../assets/gallery/lounge.jpg'
import restaurant from '../assets/gallery/restaurant.jpg'
import hotel_tour from '../assets/gallery/hotel_tour.mp4'


const video = hotel_tour

// CAROUSEL IMAGES DATA
const carouselData = [
  {image:welcome,
  title:'Feels like home'
  },
  {image:walkway,
  title:'perfect gateway'
  },
  {image:executive_9947,
  title:'Enjoy Ultimate Hospitality'
  },
  {image:event,
  title:'Meetings & events'
  },
  {image:swimming_pool,
  title:'Swim & bask'
  },
]
//ROOMS TYPES
const roomsType = [
    {
      image: standardroom,
      name: 'standard  room',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],

      link: 'rooms/standard-room'
    },
    {
      image: delux,
      name: 'deluxe',
      desc: 'Convenient and comfortable for long and short stays.  They appeal to travelers on business trips and tourist looking for simplicity.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/deluxe'
    },
    {
      image: doubledeluxe,
      name: 'double deluxe',
      desc: 'Enjoy the upgrade of the doble deluxe,  with an amazing sitting room to the double sized king-sized beds in the bedroom. The room’s big windows and the balcony  offer you wonderful view and a perfect relaxation spot. Its perfect for long stay guests and family.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/double-deluxe'
    },
    {
      image: suite_9925,
      name: 'suite',
      desc: 'Cozy room perfectly designed to deliver comfort.  This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisure guest. Couple up with great views of the surrounding its an ideal room for your next visit.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/suite'
    },
    {
      image: executive_9941,
      name: 'executive suite',
      desc: 'Premium experience requires premium services. It is a perfect pick if you want to delight yourself in style, savor unparallel moments and comfort. Furnished with modern essentials, elegant furniture, fittings and modern-day amenities.  This room is simply the best with an aura to make yourself at home, it assures you executive luxurious experience.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/executive-suite'
    },
]
 //INDEPENDENT ROOMS TYPES
const standardRoom = {
  image: standardroom,
  name: 'standard  room',
  displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view.',
  price:80000,
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<BiSolidDryer/>,title:'Hair dryer'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images: [standardroom],
  link: 'rooms/standard-room'
}
const deluxRoom = {
  image: delux,
  name: 'delux room',
    displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Convenient and comfortable for long and short stays.  They appeal to travelers on business trips and tourist looking for simplicity.',
  price: 100000,
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<BiSolidDryer/>,title:'Hair dryer'},
    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images: [delux],
  link: 'rooms/delux'
}
const doubleDeluxRoom = {
  image: doubledeluxe,
  name: 'double deluxe',
    displayAmenities:[
     {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Enjoy the upgrade of the doble deluxe,  with an amazing sitting room to the double sized king-sized beds in the bedroom. The room’s big windows and the balcony  offer you wonderful view and a perfect relaxation spot. Its perfect for long stay guests and family.',
  price:150000,
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdBalcony/>,title:'Balcony'},      
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<BiFridge/>,title:'Mini Fridge available(stocked on request)'},
    {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<BiSolidDryer/>,title:'Hair dryer'},
    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images:[doubledeluxe],
  link: 'rooms/double-delux'
}
const suiteRoom = {
  image: suite_9925,
  name: 'suite',
    displayAmenities:[
      {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Cozy room perfectly designed to deliver comfort.  This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisure guest. Couple up with great view of the city is an ideal room for your next visit.',
  price:180000,
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<MdOutlineBed/>,title:'Working desk'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdBalcony/>,title:'Balcony'},      
    {icon:<BiFridge/>,title:'Mini Fridge available(stocked on request)'},
    {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<BiSolidDryer/>,title:'Hair dryer'},
    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images: [suite_9925, suite_9937],
  link: 'rooms/suite'
}
const executivesuiteRoom = {
    image: executive_9941,
    name: 'executive suite',
      displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
    desc: 'Premium experience requires premium services. It is a perfect pick if you want to delight yourself in style, savor unparallel moments and comfort. Furnished with modern essentials, elegant furniture, fittings and modern-day amenities.  This room is simply the best with an aura to make yourself at home, it assures you executive luxurious experience.',
    price: 200000,
    allAmenities:[
      {icon:<MdOutlineBed/>,title:'King sized-bed'},
      {icon:<MdOutlineBed/>,title:'Working desk'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<FaWifi/>,title:'High speed Wi-Fi'},
      {icon:<MdBalcony/>,title:'Balcony'},      
      {icon:<BiFridge/>,title:'Mini Fridge available(stocked on request)'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdOutlineRoomService/>,title:'In room service'},
      {icon:<MdAir/>,title:'air conditioning'},
      {icon:<BiSolidDryer/>,title:'Hair dryer'},

      {icon:<FaShower/>,title:'Private shower & WC'},
    ],
    images: [ executive_9947, executive_9944, executive_9946,   executive_9956, executive_9958,  executive_9941,],
    link: 'rooms/executive-suite'
}
// MEETING AND EVENTS
const meetingsData = {
  title : 'meetings & events',
  displayImage: facility_0010,
  heading:'Overview',
  content:'Plan your next Conference, Meeting, event or get together, you can find perfect venue at Brand Hotel. Our facility, with variety of spaces capable of catering to small and large groups be it a conference or meeting. We are equipped to make sure all your need and wants are met to make any activity remarkable and successful. Hesitate not to be in touch with us to help you plan your activity of choice.',

  halls: [
    {
      image:conference_hall,
      title:'conference',
      desc:' If you are looking for a conducive setting to fulfill conference meetings, well look no further. Our facility  is well equipped and unquestionably capable of offering outmost delight. Ou conferencing venue is designed to hold up to 100 participants. This space is perfect to fulfill the purpose of a successful conference meeting.',
      
    },
    {
        image: meeting_venue,
        title:'meetings',
        desc:'Our boardroom offers your unflawed venue for your meetings, extending privacy and suitable atmosphere for any meeting procedure. With a capacity of up to 75 people, this space is ideal for small and considerable group meetings.'
    
    },
   ],

  amenities: [
    'Audio-Visual equipments', 'Wi-Fi access to all participants', 'Meeting stationary includes pens & note books', 'Conference assistance available', 'Complimentary juice for participants','Bottled mineral water', 'LCD projector (Tsh 50,000 per day)', 'Ample parking space available to all '
  ],
  
  venues: {
      venuesName:'conference & meetings',
      venuesContent: 'Plan your next Conference, Meeting, event or get together, you can find perfect venue at Brand Hotel. Our facility, with variety of spaces capable of catering to small and large groups be it a conference or meeting. We are equipped to make sure all your need and wants are met to make any activity remarkable and successful. Hesitate not to be in touch with us to help you plan your activity of choice.',
      venuesImages:[
        {
          image: conference_hall,
          venue: 'conference room',
        },
        {
          image: meeting_venue,
          venue: 'boardroom',
        },
      ]
    },
  
}
// GALLERY DATA
const galleryData = {
  overview:[],
  rooms:[standardroom, delux, doubledeluxe, suite_9925, executive_9941],
  meetings:[],
  restaurant:[],
} 
// const accomodation = [
//   {
//     image: standardroom,
//     name: 'standard  room',
//     desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
//     price:'80 000',
//     allAmenities:[
//       {icon:<MdRoomPreferences/>,title:'Spacious room'},
//       {icon:<BiSolidDryer/>,title:'Hair dryer'},
//       {icon:<MdOutlineBed/>,title:'King sized bed'},
//       {icon:<MdTv/>,title:'large smart Tv'},
//       {icon:<FaWifi/>,title:'High speed Wi-fi'},
//       {icon:<FaShower/>,title:'Private shower & WC'},
//       {icon:<MdOutlineRoomService/>,title:'In room service available'},
//       {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
//       {icon:<MdCurtains/>,title:'Black out curtains'},
//       {icon:<MdAir/>,title:'air conditioning'},
//     ],
//     images:['img1', 'img2'],
//     link: 'rooms/standard-room'
//   },
//   {
//     image: delux,
//     name: 'delux room',
//     desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
//     price:'100 000',
//     allAmenities:[
//       {icon:<MdRoomPreferences/>,title:'Spacious room'},
//       {icon:<MdOutlineBed/>,title:'King sized bed'},
//       {icon:<MdTv/>,title:'large smart Tv'},
//       {icon:<FaWifi/>,title:'High speed Wi-fi'},
//       {icon:<FaShower/>,title:'Private shower & WC'},
//       {icon:<MdOutlineRoomService/>,title:'In room service available'},
//       {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
//       {icon:<MdCurtains/>,title:'Black out curtains'},
//       {icon:<MdAir/>,title:'air conditioning'},
//     ],
//     images:['img1', 'img2'],
//     link: 'rooms/delux'
//   },
//   {
//     image: doubledelux,
//     name: 'double delux room',
//     desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
//     price:'100 000',
//     allAmenities:[
//       {icon:<MdRoomPreferences/>,title:'Spacious room'},
//       {icon:<MdOutlineBed/>,title:'King sized bed'},
//       {icon:<MdTv/>,title:'large smart Tv'},
//       {icon:<FaWifi/>,title:'High speed Wi-fi'},
//       {icon:<FaShower/>,title:'Private shower & WC'},
//       {icon:<MdOutlineRoomService/>,title:'In room service available'},
//       {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
//       {icon:<MdCurtains/>,title:'Black out curtains'},
//       {icon:<MdAir/>,title:'air conditioning'},
//     ],
//     images:['img1', 'img2'],
//     link: 'rooms/double-delux'
//   },
//   {
//     image: suite,
//     name: 'suite',
//     desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
//     price:'120 000',
//     allAmenities:[
//       {icon:<MdRoomPreferences/>,title:'Spacious room'},
//       {icon:<MdOutlineBed/>,title:'King sized bed'},
//       {icon:<MdTv/>,title:'large smart Tv'},
//       {icon:<FaWifi/>,title:'High speed Wi-fi'},
//       {icon:<FaShower/>,title:'Private shower & WC'},
//       {icon:<MdOutlineRoomService/>,title:'In room service available'},
//       {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
//       {icon:<MdCurtains/>,title:'Black out curtains'},
//       {icon:<MdAir/>,title:'air conditioning'},
//     ],
//     images:['img1', 'img2'],
//     link: 'rooms/suite'
//   },
//   {
//     image: executivesuite,
//     name: 'executive suite',
//     desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
//     price: '150 000',
//     allAmenities:[
//       {icon:<MdRoomPreferences/>,title:'Spacious room'},
//       {icon:<MdOutlineBed/>,title:'King sized bed'},
//       {icon:<MdTv/>,title:'large smart Tv'},
//       {icon:<FaWifi/>,title:'High speed Wi-fi'},
//       {icon:<FaShower/>,title:'Private shower & WC'},
//       {icon:<MdOutlineRoomService/>,title:'In room service available'},
//       {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
//       {icon:<MdCurtains/>,title:'Black out curtains'},
//       {icon:<MdAir/>,title:'air conditioning'},
//     ],
//     images:['img1', 'img2'],
//     link: 'rooms/executive-suite'
//   },
// ]
// HOMEPAGE DATA
const glance = [party, dinning,room, executive_9947, delux ]
const restaurantandlounge = [restaurant, lounge]


export const RoomsContext = createContext();
export const RoomsProvider = ({children}) => {
  
    return(
      <RoomsContext.Provider value={{video, carouselData, roomsType,restaurantandlounge ,glance, standardRoom, deluxRoom,doubleDeluxRoom, suiteRoom, executivesuiteRoom, galleryData, meetingsData}}>
            {children}
      </RoomsContext.Provider>
    )
}

export  const useRoomsContext = () => useContext(RoomsContext)
