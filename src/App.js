import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { ContactButtons, Footer, Header } from './components';
import { AboutUs, GalleryPage,  ContactUs, Deluxe, TwinRoom, ExecutiveSuite, Home, Meetings,RoomsPage,  StandardRoom, Suite, TandConditions, PrivacyPolicyPage, JuniorSuite } from './pages';
import './App.css'

function App() {
  return (
    <div className='app'>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='rooms' element={<RoomsPage/>}>
          <Route path='standard-room' element={<StandardRoom/>}/>
          <Route path='deluxe' element={<Deluxe/>}/>
          <Route path='twin-room' element={<TwinRoom/>}/>
          <Route path='junior-suite' element={<JuniorSuite/>}/>
          <Route path='suite' element={<Suite/>}/>
          <Route path='executive-suite' element={<ExecutiveSuite/>}/>
        </Route>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='contact' element={<ContactUs/>}/>    
        <Route path='gallery' element={<GalleryPage/>}/>
        <Route path='meetings' element={<Meetings/>}/>
        <Route path='privacy-policy' element={<PrivacyPolicyPage/>}/>
        <Route path='terms-and-conditions' element={<TandConditions/>}/>
      </Routes>  
    <ContactButtons/>
    <Footer/>
    </div>
  );
}

export default App;
