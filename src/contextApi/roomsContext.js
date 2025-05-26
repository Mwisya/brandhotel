import {createContext, useContext} from "react";
import {MdAir, MdBalcony, MdCoffeeMaker, MdCurtains, MdOutlineDesk, MdOutlineRoomService, MdRoomPreferences, MdTv } from 'react-icons/md'
import { LuSofa } from 'react-icons/lu'
import { FaShower, FaTv, FaWifi } from 'react-icons/fa'
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaBottleWater } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
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

// rooms
import t_room from '../assets/t_room.jpg'
import twin_room from '../assets/twin_room.jpg'
import twin_room_2 from '../assets/twin_room_2.jpg'
import twin_room_3 from '../assets/twin_room_3.jpg'
import twin_room_4 from '../assets/twin_room_4.jpg'
import twin_room_5 from '../assets/twin_room_5.jpg'
import twin_room_6 from '../assets/twin_room_6.jpg'
import twin_room_7 from '../assets/twin_room_7.jpg'
// stndadd
import standard_room from '../assets/standard_room.jpg'
import standard_room_2 from '../assets/standard_room_2.jpg'
import standard_room_3 from '../assets/standard_room_3.jpg'
import standard_room_4 from '../assets/standard_room_4.jpg'
import standard_room_5 from '../assets/standard_room_5.jpg'
import standard_room_6 from '../assets/standard_room_6.jpg'
import standard_room_7 from '../assets/standard_room_7.jpg'
import standard_room_8 from '../assets/standard_room_8.jpg'
// suite
import suite_balcony from '../assets/suite_balcony.jpg'
import suite_wc from '../assets/suite_wc.jpg'
import suite_room from '../assets/suite_room.jpg'
import suite_room_2 from '../assets/suite_room_2.jpg'
import suite_room_3 from '../assets/suite_room_3.jpg'
import suite_room_4 from '../assets/suite_room_4.jpg'
import suite_room_5 from '../assets/suite_room_5.jpg'
import suite_room_6 from '../assets/suite_room_6.jpg'
// j suite
import j_suite from '../assets/j_suite.jpg'
import j_suite_2 from '../assets/j_suite_2.jpg'
import j_suite_3 from '../assets/j_suite_3.jpg'
import j_suite_4 from '../assets/j_suite_4.jpg'
import j_suite_5 from '../assets/j_suite_5.jpg'
import j_suite_6 from '../assets/j_suite_6.jpg'
import j_suite_7 from '../assets/j_suite_7.jpg'
// ex suite
import executive_9947 from '../assets/roomTypes/executive_9947.jpg'
import executive_9944 from '../assets/roomTypes/executive_9944.jpg'
import executive_9946 from '../assets/roomTypes/executive_9946.jpg'
import executive_9956 from '../assets/roomTypes/executive_9956.jpg'
import executive_9958 from '../assets/roomTypes/executive_9958.jpg'
import executive_9941 from '../assets/roomTypes/executive_9941.jpg'
import ex_suite from '../assets/ex_suite.jpg'
import ex_suite_2 from '../assets/ex_suite_2.jpg'
import ex_suite_3 from '../assets/ex_suite_3.jpg'
import ex_suite_4 from '../assets/ex_suite_4.jpg'
import ex_suite_5 from '../assets/ex_suite_5.jpg'

// import deluxe from '../assets/deluxe.jpg'
import deluxe_1 from '../assets/deluxe_1.jpg'
import deluxe_2 from '../assets/deluxe_2.jpg'
import deluxe_3 from '../assets/deluxe_3.jpg'
import deluxe_4 from '../assets/deluxe_4.jpg'
import deluxe_5 from '../assets/deluxe_5.jpg'
import deluxe_6 from '../assets/deluxe_6.jpg'
import deluxe_7 from '../assets/deluxe_7.jpg'

import fac from '../assets/fac.jpg'
import fac_2 from '../assets/fac_2.jpg'
import fac_3 from '../assets/fac_3.jpg'
import fac_4 from '../assets/fac_4.jpg'

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
        {icon:<IoBedOutline/>,title:'King sized bed'},
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
        {icon:<IoBedOutline/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/deluxe'
    },
    {
      image: doubledeluxe,
      name: 'twin room',
      desc: 'Enjoy absolute comfort of the Twin rooms. It cultivates your stay with amazing sitting room to the double sized king-sized beds. The room’s big windows and the balcony  offer you wonderful view and a perfect relaxation spot. Its perfect for long stay guests and family.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<IoBedOutline/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/twin-room'
    },
     {
      image: j_suite_2,
      name: 'junior suite',
      desc: 'Enjoy absolute comfort of the Twin rooms. It cultivates your stay with amazing sitting room to the double sized king-sized beds. The room’s big windows and the balcony  offer you wonderful view and a perfect relaxation spot. Its perfect for long stay guests and family.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<IoBedOutline/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/junior-suite'
    },
    {
      image: suite_9925,
      name: 'suite',
      desc: 'Cozy room perfectly designed to deliver comfort.  This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisure guest. Couple up with great views of the surrounding its an ideal room for your next visit.',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<IoBedOutline/>,title:'King sized bed'},
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
        {icon:<IoBedOutline/>,title:'King sized bed'},
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
    {icon:<IoBedOutline/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Make yourself at home in our tastefully designed Standard room. Perfect for long and short stay guests and travellers. This modern room offers all the comforts with aura to make you feel like home and  spectacular views.',
  price:80000,
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<IoBedOutline/>,title:'King sized bed'},
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
  capacity:{guests:1, bed:1},
  media: [
    {type:'image', url:standardroom},
    {type:'image', url:standard_room},
    {type:'image', url:standard_room_2},
    {type:'image', url:standard_room_3},
    {type:'image', url:standard_room_4},
    {type:'image', url:standard_room_5},
    {type:'image', url:standard_room_6},
    {type:'image', url:standard_room_7},
    {type:'image', url:standard_room_8},
  ],
  link: 'rooms/standard-room'
}
const deluxe = {
  image: delux,
  name: 'deluxe room',
    displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<IoBedOutline/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Convenient and comfortable for long and short stays.  They appeal to travelers on business trips and tourist looking for simplicity.',
  price: 100000,
  capacity:{guests:2, bed:1},
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<IoBedOutline/>,title:'King sized bed'},
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
  media:[
    {type:'image', url:delux},
    {type:'image', url:deluxe_1},
    {type:'image', url:deluxe_2},
    {type:'image', url:deluxe_3},
    {type:'image', url:deluxe_4},
    {type:'image', url:deluxe_5},
    {type:'image', url:deluxe_6},
    {type:'image', url:deluxe_7},
  ],
  link: 'rooms/delux'
}
const twinRoom = {
  image: doubledeluxe,
  name: 'twin rooms',
    displayAmenities:[
     {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<IoBedOutline/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Enjoy absolute comfort of our superb Twin rooms, cultivating your stay with amazing sitting room to the double sized king-sized beds. The room’s big windows and the balcony  offer you wonderful view and a perfect relaxation spot. Its perfect for long stay guests and family.',
  price:150000,
  capacity:{guests:2, bed:2},
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<IoBedOutline/>,title:'King sized bed'},
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
  media:[
    {type: 'image', url:twin_room},
    {type: 'image', url:twin_room_2},
    {type: 'image', url:twin_room_3},
    {type: 'image', url:twin_room_4},
    {type: 'image', url:twin_room_5},
    {type: 'image', url:twin_room_6},
    {type: 'image', url:twin_room_7},
    {type: 'image', url:t_room}

  ],
  link: 'rooms/twin-room'
}
const junior_suite = {
  image: j_suite_2,
  name: 'junior suite',
    displayAmenities:[
     {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<IoBedOutline/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Welcome to our elegant Junior Suite, a haven of comfort and style. This spacious retreat features a plush king-size bed with premium linens, ensuring restful nights. The open-plan living area, adorned with modern decor, includes a cozy sofa and work desk, perfect for relaxation or productivity. Large windows flood the space with natural light, offering stunning city views. Indulge in the luxurious bathroom, equipped with a rain shower and high-end toiletries. Stay connected with complimentary high-speed Wi-Fi, fitted with 2 screens enjoy entertainment on the 55-inch smart TV. A  coffee/tea maker, and in-room safe add convenience, while climate control with 2 Air conditioners ensures your comfort is delightful.Our guest enjoy complimentary fruits, soda, juice,  bites & snacks.Ideal for couples or business travelers, our Junior Suite blends sophistication and functionality for an unforgettable stay.' 
 ,
  price:180000,
  capacity:{guests:2, bed:2},
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<IoBedOutline/>,title:'King sized bed'},
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
  media:[
    {type:'image', url:j_suite_2},
    {type:'image', url:j_suite},
    {type:'image', url:j_suite_3},
    {type:'image', url:j_suite_4}, 
    {type:'image', url:j_suite_5}, 
    {type:'image', url:j_suite_6}, 
    {type:'image', url:j_suite_7}, 
  ],
  link: 'rooms/junior-suite'
}
const suite = {
  image: suite_9925,
  name: 'suite',
    displayAmenities:[
      {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<IoBedOutline/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Cozy room perfectly designed to deliver comfort.  This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisure guest. Couple up with great view of the city is an ideal room for your next visit.',
  price:200000,
  capacity:{guests:2, bed:1},
  allAmenities:[
    {icon:<IoBedOutline/>,title:'King sized bed'},
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
  media: [
      {type:'image', url:suite_balcony},
      {type:'image', url:suite_wc},
      {type:'image', url:suite_room}, 
      {type:'image', url:suite_room_2},
      {type:'image', url:suite_room_3},
      {type:'image', url:suite_room_4}, 
      {type:'image', url:suite_room_5}, 
      {type:'image', url:suite_room_6}, 
      {type:'image', url:suite_9937}, 
      {type:'image', url:suite_9925}, 
      {type:'video', url: vid_suite }
    ],

  link: 'rooms/suite'
}
const executive_suite = {
    image: executive_9941,
    name: 'executive suite',
      displayAmenities:[
    {icon:<MdTv/>,title:'Smart Tv'},
    {icon:<IoBedOutline/>,title:'King sized-bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
    desc: 'Executive Suite offers an unparalleled blend of luxury and functionality, designed for the discerning traveler. Spanning 700 square feet, this sophisticated retreat features a spacious bedroom with a plush king-size bed, draped in premium linens. The elegant living area, adorned with modern furnishings and soft, neutral tones, includes a cozy sofa and a sleek work desk with high-speed Wi-Fi. Floor-to-ceiling windows and large balcony bathe the suite in natural light with blackout curtains for privacy offering stunning views. The marble-clad bathroom boasts a rain shower and premium toiletries. Guests enjoy a minibar in the serene  Executive Lounge, with complimentary fruits, soda, juice, bites & snacks, breakfast and lunch. Advanced in-room technology, in-room safe for convenience, including 2 screens enjoy entertainment on the 55-inch smart TV  and 2 Air conditioners for climate control, ensures seamless comfort. With meticulous attention to detail and refined aesthetics, the Executive Suite redefines opulence, creating an ideal haven for both relaxation and productivity.',
    price: 300000,
    capacity:{guests:2, bed:1},
    allAmenities:[
      {icon:<IoBedOutline/>,title:'King sized bed'},
      {icon:<MdRoomPreferences/>,title:'Spacious Iconic room'},
      {icon:<LuSofa/>,title:'Living room'},
      {icon:<MdBalcony/>,title:'Huge Balcony sitting space with drinks cabin'},      
      {icon:<MdOutlineDesk/>,title:'Working desk'},
      {icon:<MdTv/>,title:'large HD smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-Fi'},
      {icon:<FaBottleWater/>,title:'Mineral water bottles & soft drinks'},
      {icon:<BiFridge/>,title:'Mini fridge(stocked on request)'},
      {icon:<MdCurtains/>,title:'Large windows with black out curtains'},

      {icon:<MdCoffeeMaker/>,title:'Tea/Coffee maker'},
      {icon:<TbDeviceLandlinePhone/>,title:'A telephone'},
      {icon:<MdOutlineRoomService/>,title:'In room service'},
      {icon:<MdAir/>,title:'air conditioning'},
      {icon:<BiSolidDryer/>,title:'Blow dry'},
      {icon:<FaShower/>,title:'Private shower & WC'},
    ],
    media: [
      {type:'video', url:vid_exc_suite},
      {type:'image', url:executive_9947},
      {type:'image', url:executive_9944},
      {type:'image', url:executive_9946}, 
      {type:'image', url: executive_9956}, 
      {type:'image', url:executive_9958},
      {type:'image', url:executive_9941},

      {type:'image', url:ex_suite},
      {type:'image', url:ex_suite_2},
      {type:'image', url:ex_suite_3},
      {type:'image', url:ex_suite_4},
      {type:'image', url:ex_suite_5},
     ],
    link: 'rooms/executive-suite'
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
const glance = [party, dinning,room, executive_9947, delux]

// GALLERY DATA
const galleryData = {
  overview:[swimming_pool, fac, fac_2, fac_3, fac_4, lobby, hotel_outdoor, facility_9826, facility_0060, facility_0010, facility_0017],

  rooms:[standardroom, delux, blueroom, doubledeluxe, suite_9925, executive_9941, sitting, sitting_2, closet, wc, toiletries, blowdryer],

  meetings:[familygraduation, event, celebrity, meeting_venue, conference_hall],
  
  restaurant:[restaurant, dinning, lounge],
} 



export const RoomsContext = createContext();
export const RoomsProvider = ({children}) => {
    return(
      <RoomsContext.Provider value={{ video, carouselData, roomsType,restaurantandlounge, glance, standardRoom, deluxe, twinRoom, junior_suite, suite, executive_suite, galleryData, meetingsData }}>
            {children}
      </RoomsContext.Provider>
    )
};

export  const useRoomsContext = () => useContext(RoomsContext)
