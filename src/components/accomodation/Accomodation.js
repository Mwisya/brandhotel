import React from 'react'
import './accomodation.css'
import { MdEmail, MdPhone } from 'react-icons/md'
import {accomodation} from '../../data/data'

const Accomodation = () => {
  return (
    <section className='accomodation-container'>
      <div className='introduction'>
        <p className='info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda! Velit quasi, asperiores molestias est a saepe ipsa facilis ratione magni vitae corporis cupiditate alias? In repellendus ea quibusdamvitae corporis cupiditate alias? In repellendus ea quibusdam ut?
        </p>
      </div>

      <div className='accomodation'>
        <h1>our rooms</h1>
        <div className='grid'>
          {
            accomodation.map((room)=>{
              return(
              <article className='top'>
                <img src={room.image} alt="" />
                <div className='details'>
                  <h2>{room.title}</h2>
                  <p>{room.desc}</p>
                  <div className='amenities'>
                    <h3 className='amenities-h3'>amenities</h3>
                    <ul>
                      <li>High speed wifi</li>
                      <li>Large smart TV</li>
                      <li>Tea/Cofee  facility</li>
                      <li>Private shower & WC</li>
                      <li>Air conditoning</li>
                      <li>in Room Services available</li>
                      <li>King Sized bed</li>
                      <li>Balcony access</li>
                      <li>black out curtains</li>
                      <li>complete room amenities set up Hairdryer, bedroom slippers & toiletries</li>
                    </ul> 
                    <div className='bookings'>
                      <div className="cost"> 
                        <h3>Book now</h3>
                        <span>Tsh {room.price}</span>
                      </div>
                      <a href="mailto:brandhotel4@gmail.com"><MdEmail/> Brandhotel4@gmail.com</a>
                      <a href="tel:+255773467756"><MdPhone/>+255-773-467-756</a>
                    </div>

                  </div>
                </div>
                
              </article>
              )
            })
          }
        </div>
      </div>  
    </section>
  )
}

export default Accomodation