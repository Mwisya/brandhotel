import React from 'react';
import './map.css';

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
            <p>P.O Box 2682,</p>
            <p>Dodoma, Tanzania </p>
            <p>Plot No 52 Mwangaza, Kisasa Hse 300</p>
            
            <div>
              <a href="tel:+255750866722"><span>Call:</span>+255 750 866 722</a>
              <a href="tel:+255773467756"><span>Call:</span>+255 773 467 756</a>
              <a href="mailto:bookings@brandhotel-dodoma.com"> 
              <span>Email:</span>            bookings@brandhotel-dodoma.com</a>
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