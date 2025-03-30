import {createContext, useContext} from "react";

const helmetData = {
    home:{
        title:'Home - Brand Hotel Dodoma',
        name:'description',
        content: 'home Brand Hotel Dodoma',
        keywordsname:'keywords',
        keywords: "home, accomodation, rooms and suites, meetings, conference, restaurant, dinning"
    },
    standardroom:{
        title:'Standard Room - Brand Hotel Dodoma',
        name:'description',
        content:  'Rooms and Suites | Standard room',
        keywordsname:'keywords',
        keywords: "rooms and suites, standard room, accomodation "
    },
    deluxeroom:{
        title:'Deluxe room - Brand Hotel Dodoma ',
        name:'description',
        content:  'Rooms and Suites |  Deluxe',
        keywordsname:'keywords',
        keywords: "rooms and suites, deluxe, accomodation "
    },
    doubledeluxe:{
        title:'Double Deluxe - Brand Hotel Dodoma',
        name:'description',
        content: 'Rooms and Suites | Double Deluxe',
        keywordsname:'keywords',
        keywords: "rooms and suites, double deluxe, accomodation "
    },
    suiteroom:{
        title:'Suite - Brand Hotel Dodoma',
        name:'description',
        content:  'Rooms and Suites | Suite',
        keywordsname:'keywords',
        keywords: "rooms and suites, suite, accomodation "
    },
    executivesuite:{
        title:'Executive Suite - Brand Hotel Dodoma',
        name:'description',
        content:  'Rooms and Suites | Executive suite',
        keywordsname:'keywords',
        keywords: "rooms and suites, executive suite, accomodation "
    },
    meeting:{
        title:'Conference & Meetings - Brand Hotel Dodoma',
        name:'description',
        content: 'Conference, meetings and events Brand Hotel Dodoma',
        keywordsname:"keywords",
        keywords: "conference, Meetings, Events, Family gathering, Party",
    },
    gallery:{
        title:'Gallery - Brand Hotel Dodoma',
        name:'description',
        content: 'ghotel gallery Brand Hotel Dodoma',
        keywordsname:'keywords',
        keywords: "gallery, Overview, Rooms and Suites, Meetings, Conference, Restaurant, Dinning"
    },
    contact:{
        title:'Contact Us - Brand Hotel Dodoma',
        name:'description',
        content: 'Brand Hotel Dodoma cntact details',
        keywordsname:'keywords',
        keywords:" Brand Hotel, Contact, Call, Email, Map, Enquiry, Bookings, Reservations"
    },
    about:{
        title:'About Us - Brand Hotel Dodoma',
        name:'description',
        content: 'About Brand Hotel Dodoma',
        keywordsname: "keywords",
        keywords:"About, Accomodation, Rooms and Suites, Events, Meetings, Conference, Restaurant, Dinning, Swimming pool,"
    },
}
export const ReactHelmetContext = createContext();
export const ReactHelmetProvider = ({children}) => {
  
    return(
      <ReactHelmetContext.Provider value={helmetData}>
        {children}
      </ReactHelmetContext.Provider>
    )
}

export const useReactHelmetContext = () => useContext(ReactHelmetContext);