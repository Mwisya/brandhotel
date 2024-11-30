import {Routes, Route} from 'react-router-dom';
import { Footer, Header } from './components';
import { AboutUs, AccomodationPage, ContactUs, Gallery, Home, Meetings } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/accomodation' element={<AccomodationPage/>}/>
        <Route path='/meetings' element={<Meetings/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
