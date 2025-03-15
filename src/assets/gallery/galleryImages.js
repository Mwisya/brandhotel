//FACILITY IMAGES
import facility1 from './facility1.jpg'
import facility2 from './facility2.jpg'
import facility4 from './facility4.webp'
import facility3 from './facility3.jpg'
import facility5 from './facility5.jpg'
import facility_0057 from './facility_0057.jpg'
import facility_0060 from './facility_0060.jpg'
import facility_9826 from './facility_9826.jpg'

// RESSTAURANT IMAGES
import restaurant1 from './restaurant1.jpg'
import restaurant2 from './restaurant2.jpg'
import restaurant3 from './restaurant3.jpg'
import restaurant4 from './restaurant4.jpg'

//MEETINGS GALLLERY

import meeting1 from './meeting1.jpg'
import meeting2 from './meeting2.jpg'
import meeting3 from './meeting3.jpg'
import meeting4 from './meeting4.jpg'
//rooms

import standardroom from '../roomTypes/standardroom.jpg'
import delux from '../roomTypes/delux.jpg'
import doubledelux from '../roomTypes/doubledelux.jpg'
import suite from '../roomTypes/executivesuite.jpg'
import executivesuite from '../roomTypes/executivesuite.jpg'


export const facility = [ facility_0057, facility_0060, facility_9826, facility1, facility2, facility3, facility4, facility5]
export const restaurant = [restaurant1, restaurant2, restaurant3, restaurant4 ]
 export const meetings = [meeting1, meeting2, meeting3, meeting4]

 export const rooms = [standardroom ,delux, doubledelux, suite, executivesuite]

 export const galleryImages = [
     {rooms : [standardroom ,delux, doubledelux, suite, executivesuite]

     },
    {facility : [ facility_0057, facility_0060, facility_9826, facility1, facility2, facility3, facility4, facility5]
        
    },

    {restaurant : [restaurant1, restaurant2, restaurant3, restaurant4 ]

    },

    {meetings : [meeting1, meeting2, meeting3, meeting4]},
 ]