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
        title:'Standard Rooms - Brand Hotel Dodoma',
        name:'description',
        content:  'Rooms and Suites | Standard rooms',
        keywordsname:'keywords',
        keywords: "rooms and suites, standard rooms, accomodation "
    },
    deluxeroom:{
        title:'Deluxe rooms - Brand Hotel Dodoma ',
        name:'description',
        content:  'Rooms and Suites |  Deluxe rooms',
        keywordsname:'keywords',
        keywords: "rooms and suites, deluxe rooms, accomodation "
    },
    twinroom:{
        title:'Twin Rooms - Brand Hotel Dodoma',
        name:'description',
        content: 'Rooms and Suites | Twins Rooms',
        keywordsname:'keywords',
        keywords: "rooms and suites, Twins Rooms, accomodation "
    },
     juniorsuite:{
        title:'Junior Suites - Brand Hotel Dodoma',
        name:'description',
        content: 'Rooms and Suites | Junior Suites',
        keywordsname:'keywords',
        keywords: "rooms and suites, Junior Suites, accomodation "
    },
    
    suiteroom:{
        title:'Suite - Brand Hotel Dodoma',
        name:'description',
        content:  'Rooms and Suites | Suites',
        keywordsname:'keywords',
        keywords: "rooms and suites, suites, accomodation "
    },
    executivesuite:{
        title:'Executive Suites - Brand Hotel Dodoma',
        name:'description',
        content:  'Rooms and Suites | Executive suites',
        keywordsname:'keywords',
        keywords: "rooms and suites, executive suites, accomodation "
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