import {createContext, useContext} from "react";
import {MdAir, MdCoffeeMaker, MdCurtains, MdOutlineBed, MdOutlineRoomService, MdRoomPreferences, MdTv } from 'react-icons/md'
import { FaShower, FaTv, FaWifi } from 'react-icons/fa'
import standardroom from '../assets/roomTypes/standardroom.jpg'
import delux from '../assets/roomTypes/delux.jpg'
import doubledelux from '../assets/roomTypes/doubledelux.jpg'
import suite from '../assets/roomTypes/executivesuite.jpg'
import executivesuite from '../assets/roomTypes/executivesuite.jpg'
import { BiSolidDryer } from "react-icons/bi";
import { facility, meetings, restaurant } from "../assets/gallery/galleryImages";
import { deluxe, executiveSuite, standard, suiteGallery } from "../assets/roomTypes/roomTypeImage";

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
      name: 'delux room',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/delux'
    },
    {
      image: doubledelux,
      name: 'double delux room',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
      amenities:[ 
        {icon:<MdRoomPreferences/>,title:'Big rooms'},
        {icon:<MdOutlineBed/>,title:'King sized bed'},
        {icon:<FaTv/>,title:'smart Tv'},
        {icon:<FaWifi/>,title:'Wi-fi'},
        {icon:<FaShower/>,title:'rain shower'},
        {icon:<MdOutlineRoomService/>,title:'room service'},
      ],
      link: 'rooms/double-delux'
    },
    {
      image: suite,
      name: 'suite',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
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
      image: executivesuite,
      name: 'executive suite',
      desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
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
const standardRoom = {
  image: standardroom,
  name: 'standard  room',
  displayAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
  price:'80 000',
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<BiSolidDryer/>,title:'Hair dryer'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-fi'},
    {icon:<FaShower/>,title:'Private shower & WC'},
    {icon:<MdOutlineRoomService/>,title:'In room service available'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
  ],
  images: standard,
  link: 'rooms/standard-room'
}
const deluxRoom = {
  image: delux,
  name: 'delux room',
    displayAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
  price:'100 000',
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-fi'},
    {icon:<FaShower/>,title:'Private shower & WC'},
    {icon:<MdOutlineRoomService/>,title:'In room service available'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
  ],
  images: deluxe,
  link: 'rooms/delux'
}
const doubleDeluxRoom = {
  image: doubledelux,
  name: 'double delux',
    displayAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
  price:'150 000',
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-fi'},
    {icon:<FaShower/>,title:'Private shower & WC'},
    {icon:<MdOutlineRoomService/>,title:'In room service available'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
  ],
  images:deluxe,
  link: 'rooms/double-delux'
}
const suiteRoom =   {
  image: suite,
  name: 'suite',
    displayAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
  desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
  price:'180 000',
  allAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<MdTv/>,title:'large smart Tv'},
    {icon:<FaWifi/>,title:'High speed Wi-fi'},
    {icon:<FaShower/>,title:'Private shower & WC'},
    {icon:<MdOutlineRoomService/>,title:'In room service available'},
    {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
    {icon:<MdCurtains/>,title:'Black out curtains'},
    {icon:<MdAir/>,title:'air conditioning'},
  ],
  images: suiteGallery,
  link: 'rooms/suite'
}
const executivesuiteRoom =  {
    image: executivesuite,
    name: 'executive suite',
      displayAmenities:[
    {icon:<MdRoomPreferences/>,title:'Spacious room'},
    {icon:<MdOutlineBed/>,title:'King sized bed'},
    {icon:<FaWifi/>,title:'Wi-fi'},
  ],
    desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
    price: '200 000',
    allAmenities:[
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-fi'},
      {icon:<FaShower/>,title:'Private shower & WC'},
      {icon:<MdOutlineRoomService/>,title:'In room service available'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdAir/>,title:'air conditioning'},
    ],
    images: executiveSuite,
    link: 'rooms/executive-suite'
}

const accomodation = [
  {
    image: standardroom,
    name: 'standard  room',
    desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
    price:'80 000',
    allAmenities:[
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<BiSolidDryer/>,title:'Hair dryer'},
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-fi'},
      {icon:<FaShower/>,title:'Private shower & WC'},
      {icon:<MdOutlineRoomService/>,title:'In room service available'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdAir/>,title:'air conditioning'},
    ],
    images:['img1', 'img2'],
    link: 'rooms/standard-room'
  },
  {
    image: delux,
    name: 'delux room',
    desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
    price:'100 000',
    allAmenities:[
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-fi'},
      {icon:<FaShower/>,title:'Private shower & WC'},
      {icon:<MdOutlineRoomService/>,title:'In room service available'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdAir/>,title:'air conditioning'},
    ],
    images:['img1', 'img2'],
    link: 'rooms/delux'
  },
  {
    image: doubledelux,
    name: 'double delux room',
    desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
    price:'100 000',
    allAmenities:[
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-fi'},
      {icon:<FaShower/>,title:'Private shower & WC'},
      {icon:<MdOutlineRoomService/>,title:'In room service available'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdAir/>,title:'air conditioning'},
    ],
    images:['img1', 'img2'],
    link: 'rooms/double-delux'
  },
  {
    image: suite,
    name: 'suite',
    desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
    price:'120 000',
    allAmenities:[
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-fi'},
      {icon:<FaShower/>,title:'Private shower & WC'},
      {icon:<MdOutlineRoomService/>,title:'In room service available'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdAir/>,title:'air conditioning'},
    ],
    images:['img1', 'img2'],
    link: 'rooms/suite'
  },
  {
    image: executivesuite,
    name: 'executive suite',
    desc: 'Make yourself at home in our tastefully designed room. Perfect for long stay guests and families. This moderm room offers all the comforts of home and spectacular view',
    price: '150 000',
    allAmenities:[
      {icon:<MdRoomPreferences/>,title:'Spacious room'},
      {icon:<MdOutlineBed/>,title:'King sized bed'},
      {icon:<MdTv/>,title:'large smart Tv'},
      {icon:<FaWifi/>,title:'High speed Wi-fi'},
      {icon:<FaShower/>,title:'Private shower & WC'},
      {icon:<MdOutlineRoomService/>,title:'In room service available'},
      {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
      {icon:<MdCurtains/>,title:'Black out curtains'},
      {icon:<MdAir/>,title:'air conditioning'},
    ],
    images:['img1', 'img2'],
    link: 'rooms/executive-suite'
  },
]

const roomsGallery = [standardroom, suite, executivesuite, delux, doubledelux ]
const facilityGallery = facility
const restaurantGallery = restaurant
const meetingsGallery = meetings


export const RoomsContext = createContext();
export const RoomsProvider = ({children}) => {
  
    return(
      <RoomsContext.Provider value={{ roomsType, accomodation, standardRoom, deluxRoom,doubleDeluxRoom, suiteRoom, executivesuiteRoom, roomsGallery, facilityGallery, restaurantGallery, meetingsGallery}}>
            {children}
      </RoomsContext.Provider>
    )
}

export  const useRoomsContext = () => useContext(RoomsContext)
