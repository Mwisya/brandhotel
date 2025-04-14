import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { ContactButtons, Footer, Header } from './components';
import { AboutUs, GalleryPage,  ContactUs, Deluxe, DoubleDeluxe, ExecutiveSuite, Home, Meetings,RoomsPage, PresidentialSuite,  StandardRoom, Suite, TandConditions, PrivacyPolicyPage } from './pages';
import './App.css'

function App() {
  return (
    <div className='app'>
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='rooms' element={<RoomsPage/>}>
          <Route path='deluxe' element={<Deluxe/>}/>
          <Route path='double-deluxe' element={<DoubleDeluxe/>}/>
          <Route path='standard-room' element={<StandardRoom/>}/>
          <Route path='suite' element={<Suite/>}/>
          <Route path='executive-suite' element={<ExecutiveSuite/>}/>
          <Route path='presidential-suite' element={<PresidentialSuite/>}/>
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
