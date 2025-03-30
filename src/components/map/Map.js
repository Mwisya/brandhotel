import React from 'react';
import './map.css';
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'

const Map = () => {
  return (
    <section className='map-container'>
      <div className="map-wrapper">

        <div className='map-details'>
          <div className="map-heading">
              <h2>How to get to</h2>
              <h1>Brand Hotel</h1>
          </div>
          <div className='map-address'>
            <p>Along Kikoso Road </p>
            <p>Plot No 52 Mwangaza, Kisasa Hse 300</p>
            <p>P.O BOX 2222-5555 Dodoma, Tanzania</p>
            
            <div>
              <a href="mailto:reservations@brandhotel-dodoma.com"> 
                 <MdOutlineEmail/>
                reservations@brandhotel-dodoma.com</a>
              <a href="tel:+255773467756"> <MdPhone/>  +255 773 467 756</a>
              <a href="tel:+255746780271"><MdWhatsapp/> +255 746 780 271</a>
            </div>
          </div>   
        </div>

        <div id="canvas-for-googlemap" className='google-map'> 
          <iframe title='google-map-iframe' src="https://www.google.com/maps/embed/v1/place?q=Brand+hotel+dodoma&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          style={{width:'100%', height:'100%', border:'0', frameborder:'0'}}></iframe>
        </div>
        
      </div>
    </section>
  )
}

export default Map