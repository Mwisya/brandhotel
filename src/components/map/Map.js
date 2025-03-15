import React from 'react';
import './map.css';
import { MdOutlineEmail, MdPhone, MdWhatsapp } from 'react-icons/md'

const Map = () => {
  return (
    <section className='map-container'>
      <div className="map-wrapper">

        <div className='map-details'>
          <div className="map-heading">
              {/* <MdLocationPin/> */}
              <h2>How to get to</h2>
              <h1>Brand Hotel</h1>
          </div>
          <div className='map-address'>
            <p>Kisasa, Dodoma, Tanzania </p>
            <p>Plot No 52 Mwangaza House 300</p>
            <p>Along Kikoso Road, Kikoso </p>
            <p>P.O BOX 2222-5555 Dodoma, Tanzania</p>
            
            <div>
              <a href="mailto:reservations@brandhotel-dodoma.com"> 
                <i> <MdOutlineEmail/></i>
                reservations@brandhotel-dodoma.com</a>
              <a href="tel:+255773467756"> <i> <MdPhone/></i>  +255 773 467 756</a>
              <a href="tel:+255746780271"> <i><MdWhatsapp/></i> +255 746 780 271</a>
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
{/* <div style="text-decoration:none; overflow:hidden;max-width:100%;width:500px;height:500px;"><div id="canvas-for-googlemap" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Brand+hotel+dodoma&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="from-embedmap-code" href="https://www.bootstrapskins.com/themes" id="grab-map-info">premium bootstrap themes</a><style>#canvas-for-googlemap .text-marker{}.map-generator{max-width: 100%; max-height: 100%; background: none;</style></div> */}