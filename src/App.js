import React,{useLayoutEffect} from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import { Footer, Header, WhatsApp } from './components';
import { AboutUs, GalleryPage,  ContactUs, Delux, DoubleDelux, ExecutiveSuite, Home, Meetings,RoomsPage,  StandardRoom, Suite } from './pages';
import './App.css'
const Wrapper = ({children})=>{
  const {pathname} = useLocation()
      useLayoutEffect(() => {
          window.scrollTo({top:0,left:0,behaviour:'instant'});
        }, [pathname] );
        
         return children
}

function App() {

  return (
    <div className='app'>
      <Wrapper>
        <Header/>
        <Routes>
          <Route index path='/' element={<Home/>}/>
          <Route path='rooms' element={<RoomsPage/>}>
            <Route path='deluxe' element={<Delux/>}/>
            <Route path='double-deluxe' element={<DoubleDelux/>}/>
            <Route path='standard-room' element={<StandardRoom/>}/>
            <Route path='suite' element={<Suite/>}/>
            <Route path='executive-suite' element={<ExecutiveSuite/>}/>
          </Route>
          <Route path='about' element={<AboutUs/>}/>
          <Route path='contact' element={<ContactUs/>}/>    
          <Route path='gallery' element={<GalleryPage/>}/>
          <Route path='meetings' element={<Meetings/>}/>
        </Routes>
        
        <WhatsApp/>
        <Footer/>

      </Wrapper>
    </div>
  );
}

export default App;
