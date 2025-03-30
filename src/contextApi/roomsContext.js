import {createContext, useContext} from "react";
import {MdAir, MdBalcony, MdCoffeeMaker, MdCurtains, MdOutlineBed, MdOutlineDesk, MdOutlineRoomService, MdRoomPreferences, MdTv } from 'react-icons/md'
import { LuSofa } from 'react-icons/lu'
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
import facility_9826 from '../assets/gallery/facility_9826.jpg'
import lobby from '../assets/gallery/lobby.jpg'
import wc from '../assets/gallery/wc.jpg'
import toiletries from '../assets/gallery/toiletries.jpg'
import blowdryer from '../assets/gallery/blowdryer.jpg'
import blueroom from '../assets/gallery/blueroom.jpg'
import room from '../assets/gallery/room.jpg'
import party from '../assets/gallery/party.jpg'
import celebrity from '../assets/gallery/celebrity.jpg'
import lounge from '../assets/gallery/lounge.jpg'
import facility_0060 from '../assets/gallery/facility_0060.jpg'
import restaurant from '../assets/gallery/restaurant.jpg'
import familygraduation from '../assets/gallery/familygraduation.jpg'
import hotel_tour from '../assets/gallery/hotel_tour.mp4'
import vid_suite from '../assets/gallery/vid_suite.mp4'
import vid_exc_suite from '../assets/gallery/vid_exc_suite.mp4'

// ROOMS AND SUITES
import executive_9947 from '../assets/roomTypes/executive_9947.jpg'
import executive_9944 from '../assets/roomTypes/executive_9944.jpg'
import executive_9946 from '../assets/roomTypes/executive_9946.jpg'
import executive_9956 from '../assets/roomTypes/executive_9956.jpg'
import executive_9958 from '../assets/roomTypes/executive_9958.jpg'
import executive_9941 from '../assets/roomTypes/executive_9941.jpg'

import facility_0017 from '../assets/venues/facility_0017.jpg'
import facility_0010 from '../assets/venues/facility_0010.jpg'

import meeting_venue from '../assets/venues/meeting_venue.jpg'
import conference_hall from '../assets/venues/conference_hall.jpg'
import walkway from '../assets/walkway.jpg'
import welcome from '../assets/welcome.jpg'
import event from '../assets/event.jpg'
import swimming_pool from '../assets/swimming_pool.jpg'
import hotel_outdoor from '../assets/hotel_outdoor.jpg'
import closet from '../assets/images/closet.jpg'
import sitting from '../assets/images/sitting.jpg'
import sitting_2 from '../assets/images/sitting_2.jpg'
import { FaBottleWater } from "react-icons/fa6";

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
      name: 'deluxe room',
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
const standard_room = {
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
    {icon:<MdOutlineDesk/>,title:'Working desk'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<FaBottleWater/>,title:'2 Mineral water bottles'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdCoffeeMaker/>,title:'Tea/Coffee maker'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<FaShower/>,title:'Private shower & WC'},
    {icon:<BiSolidDryer/>,title:'Blow dry'},
  ],
  capacity:{guests:2, bed:1},
  images: [standardroom],
  link: 'rooms/standard-room'
}
const deluxe = {
  image: delux,
  name: 'deluxe room',
    displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Convenient and comfortable for long and short stays.  They appeal to travelers on business trips and tourist looking for simplicity.',
  price: 100000,
  capacity:{guests:2, bed:1},
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<MdOutlineDesk/>,title:'Working desk'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<FaBottleWater/>,title:'2 Mineral water bottles'},
    {icon:<MdCoffeeMaker/>,title:'Tea/Coffee maker'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<FaShower/>,title:'Private shower & WC'},
    {icon:<BiSolidDryer/>,title:'Blow dry'},
  ],
  images: [delux],
  link: 'rooms/delux'
}
const double_deluxe = {
  image: doubledeluxe,
  name: 'double deluxe',
    displayAmenities:[
     {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Enjoy the upgrade of the doble deluxe,  with an amazing sitting room to the double sized king-sized beds in the bedroom. The room’s big windows and the balcony  offer you wonderful view and a perfect relaxation spot. Its perfect for long stay guests and family.',
  price:150000,
  capacity:{guests:4, bed:2},
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<MdOutlineDesk/>,title:'Working desk'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<MdCoffeeMaker/>,title:'Tea/Coffee maker'},
    {icon:<MdBalcony/>,title:'Balcony'},      
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<FaBottleWater/>,title:'2 Mineral water bottles'},
    {icon:<BiFridge/>,title:'Mini fridge(stocked on request)'},
    {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<BiSolidDryer/>,title:'Blow dry'},
    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images:[doubledeluxe],
  link: 'rooms/double-delux'
}
const suite = {
  image: suite_9925,
  name: 'suite',
    displayAmenities:[
      {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Cozy room perfectly designed to deliver comfort.  This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisure guest. Couple up with great view of the city is an ideal room for your next visit.',
  price:180000,
  capacity:{guests:2, bed:1},
  allAmenities:[
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<LuSofa/>,title:'Living room'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<MdOutlineDesk/>,title:'Working desk'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<FaBottleWater/>,title:'2 Mineral water bottles'},
    {icon:<BiFridge/>,title:'Mini fridge(stocked on request)'},
    {icon:<MdBalcony/>,title:'Balcony'},      
    {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdCoffeeMaker/>,title:'Tea/Coffee maker'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<BiSolidDryer/>,title:'Blow dry'},
    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images: [suite_9925, suite_9937],
  video: vid_suite ,
  link: 'rooms/suite'
}
const executive_suite = {
    image: executive_9941,
    name: 'executive suite',
      displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
    desc: 'Executive stays calls for premium services and this suite fits the purpose. It is a perfect pick if you want to delight yourself in style,luxury to savor unparalleled moments in comfort. Furnished with modern essentials, elegant furniture, fittings and modern-day amenities.  This room is simply the best with an aura to make yourself at home, it assures you executive luxurious experience.',
    price: 200000,
    capacity:{guests:2, bed:1},
    allAmenities:[
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<LuSofa/>,title:'Living room'},
      {icon:<MdOutlineDesk/>,title:'Working desk'},
      {icon:<FaBottleWater/>,title:'2 Mineral water bottles'},
      {icon:<BiFridge/>,title:'Mini fridge(stocked on request)'},
      {icon:<FaWifi/>,title:'High speed Wi-Fi'},
      {icon:<MdBalcony/>,title:'Balcony'},      
      {icon:<MdCoffeeMaker/>,title:'Tea/Coffee maker'},
      {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdOutlineRoomService/>,title:'In room service'},
      {icon:<MdAir/>,title:'air conditioning'},
      {icon:<BiSolidDryer/>,title:'Blow dry'},

      {icon:<FaShower/>,title:'Private shower & WC'},
    ],
    images: [ executive_9947, executive_9944, executive_9946,   executive_9956, executive_9958,  executive_9941,],
    video: vid_exc_suite,
    link: 'rooms/executive-suite'
}
const presidential_suite = {
  image: executive_9941,
  name: 'presidential suite',
    displayAmenities:[
  {icon:<MdTv/>,title:'Smart Tv'},
  {icon:<MdOutlineBed/>,title:'King sized-bed'},
  {icon:<FaWifi/>,title:'Wi-fi'},
],
  desc: 'presidetial suite  ',
  price: 300000,
  allAmenities:[
    {icon:<MdOutlineBed/>,title:'King sized-bed'},
    {icon:<MdOutlineBed/>,title:'Working desk'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<FaWifi/>,title:'High speed Wi-Fi'},
    {icon:<MdBalcony/>,title:'Balcony'},      
    {icon:<BiFridge/>,title:'Mini Fridge available(stocked on request) '},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<TbDeviceLandlinePhone/>,title:'Telephone'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdOutlineRoomService/>,title:'In room service'},
    {icon:<MdAir/>,title:'air conditioning'},
    {icon:<BiSolidDryer/>,title:'Hair dryer'},

    {icon:<FaShower/>,title:'Private shower & WC'},
  ],
  images: [],
  link: 'rooms/presidential-suite'
}
// MEETING AND EVENTS
const meetingsData = {
  title : 'meetings & events',
  displayImage: facility_0010,
  heading:'Overview',
  content:'Plan your next Conference, Meeting, event or get together, you can find perfect venue at Brand Hotel. Our facility, with variety of spaces capable of catering to small and large groups be it a conference or meeting. We are equipped to make sure all your need and wants are met to make any activity remarkable and successful.',
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
      venuesContent: 'Plan your next Conference, Meeting, event or get together, you can find perfect venue at Brand Hotel. Our facility, with variety of spaces capable of catering to small and large groups be it a conference or meeting. We are equipped to make sure all your need and wants are met to make any activity remarkable and successful.',
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
const restaurantandlounge = [restaurant, lounge]
const glance = [party, dinning,room, executive_9947, delux ]

// GALLERY DATA
const galleryData = {
  overview:[swimming_pool, lobby, hotel_outdoor, facility_9826, facility_0060, facility_0010, facility_0017],

  rooms:[standardroom, delux, blueroom, doubledeluxe, suite_9925, executive_9941, sitting, sitting_2, closet, wc, toiletries, blowdryer],

  meetings:[familygraduation, event, celebrity, meeting_venue, conference_hall],
  
  restaurant:[restaurant, dinning, lounge],
} 



export const RoomsContext = createContext();
export const RoomsProvider = ({children}) => {
  
    return(
      <RoomsContext.Provider value={{video, carouselData, roomsType,restaurantandlounge ,glance, standard_room, deluxe,double_deluxe, suite, executive_suite, presidential_suite, galleryData, meetingsData}}>
            {children}
      </RoomsContext.Provider>
    )
}

export  const useRoomsContext = () => useContext(RoomsContext)
