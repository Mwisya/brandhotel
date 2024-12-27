import {Routes, Route} from 'react-router-dom';
import { Footer, Header } from './components';
import { AboutUs, AccomodationPage,Gallery, BarAndRestaurant, ContactUs, Delux, DoubleDelux, ExecutiveSuite, Home, Meetings, MeetingsAndEvents, Rooms, RoomsGallery, StandardRoom, Suite, NoMatch, Facility } from './pages';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='rooms' element={<Rooms/>}>
        <Route path='delux' element={<Delux/>}/>
        <Route path='double-delux' element={<DoubleDelux/>}/>
        <Route path='standard-room' element={<StandardRoom/>}/>
        <Route path='suite' element={<Suite/>}/>
        <Route path='executive-suite' element={<ExecutiveSuite/>}/>
      </Route>
       <Route path='about' element={<AboutUs/>}/>
       <Route path='contact' element={<ContactUs/>}/>
      
      <Route path='gallery' element={<Gallery/>}>
        <Route index element={<RoomsGallery/>}/>
        <Route path='gallery' element={<RoomsGallery/>}/>
        <Route path='facility' element={<Facility/>}/>
        <Route path='restaurant' element={<BarAndRestaurant/>}/>
        <Route path='meetings' element={< MeetingsAndEvents/>}/>
        <Route path='*' element={< NoMatch/>}/>
      </Route>

      <Route path='accomodation' element={<AccomodationPage/>}/>
      <Route path='meetings' element={<Meetings/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
