import React from 'react'
import './accomodation.css'
import { MdEmail, MdPhone } from 'react-icons/md'
import { room } from '../../data/data'

const Accomodation = () => {
  return (
    <section className='accomodation-container'>
      <div className='accomodation'>
        <p className='info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, assumenda! Velit quasi, asperiores molestias est a saepe ipsa facilis ratione magni vitae corporis cupiditate alias? In repellendus ea quibusdamvitae corporis cupiditate alias? In repellendus ea quibusdam ut?
        </p>
        <h1>our rooms</h1>
        <div className='grid'>
          <article className='top'>
            <img src={room.image} alt="" />
            <div className='details'>
              <h2>Standard single</h2>
              <p> This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisue guest.
              Couple up with great view of the city is an ideal room for your next visit. 
              </p>
              <div className='amenities'>
                <h3 className='amenities-h3'>amenities</h3>
                <ul>
                  <li>High speed wifi</li>
                  <li>Large smart TV</li>
                  <li>Tea/Cofee  facility</li>
                  <li>Private shower & WC</li>
                  <li>Air conditoning</li>
                  <li>in Room Services available</li>
                  <li>Balcony access</li>
                  <li>black out curtains</li>
                  <li>complete room amenities set up including Hairdryer, bedroom slippers and toiletries</li>
                </ul> 
                <div className='booking'>
                  <h2>Book Now</h2>
                  <p className="cost">Price<span>Tsh 80, 000</span></p>
                  <a href="mailto:brandhotel4@gmail.com"><MdEmail/> Brandhotel4@gmail.com</a>
                  <a href="tel:+255773467756"><MdPhone/>+255-773-467-756</a>
                </div>

              </div>
            </div>
            
          </article>
          <article className='top'>
            <img src={room.image} alt="" />
            <div className='details'>
              <h2>Delux</h2>
              <p> This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisue guest.
              Couple up with great view of the city is an ideal room for your next visit. 
              </p>
              <div>
                <h3 className='amenities'>amenities</h3>
                <ul>
                  <li>High speed wifi</li>
                  <li>Large smart TV</li>
                  <li>Tea/Cofee  facility</li>
                  <li>Private shower & WC</li>
                  <li>Air conditoning</li>
                  <li>in Room Services available</li>
                  <li>Balcony access</li>
                  <li>black out curtains</li>
                  <li>complete room amenities set up including Hairdryer, bedroom slippers and toiletries</li>
                </ul> 
                <div className='booking'>
                  <h2>Book Now</h2>
                  <p className="cost">Price<span>Tsh 80, 000</span></p>
                  <a href="mailto:brandhotel4@gmail.com"><MdEmail/> Brandhotel4@gmail.com</a>
                  <a href="tel:+255773467756"><MdPhone/>+255-773-467-756</a>
                </div>

              </div>
            </div>
          </article>
          <article className='top'>
            <img src={room.image} alt="" />
            <div className='details'>
              <h2>Double delux rooms</h2>
              <p> This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisue guest.
              Couple up with great view of the city is an ideal room for your next visit. 
              </p>
              <div>
                <h3 className='amenities'>amenities</h3>
                <ul>
                  <li>High speed wifi</li>
                  <li>Large smart TV</li>
                  <li>Tea/Cofee  facility</li>
                  <li>Private shower & WC</li>
                  <li>Air conditoning</li>
                  <li>in Room Services available</li>
                  <li>Balcony access</li>
                  <li>black out curtains</li>
                  <li>complete room amenities set up including Hairdryer, bedroom slippers and toiletries</li>
                </ul> 
                <div className='booking'>
                  <h2>Book Now</h2>
                  <p className="cost">Price<span>Tsh 80, 000</span></p>
                  <a href="mailto:brandhotel4@gmail.com"><MdEmail/> Brandhotel4@gmail.com</a>
                  <a href="tel:+255773467756"><MdPhone/>+255-773-467-756</a>
                </div>

              </div>
            </div>
          </article>
          <article className='top'>
            <img src={room.image}  alt="" />
            <div className='details'>
              <h2>Suite</h2>
              <p> This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisue guest.
              Couple up with great view of the city is an ideal room for your next visit. 
              </p>
              <div>
                <h3 className='amenities'>amenities</h3>
                <ul>
                  <li>High speed wifi</li>
                  <li>Large smart TV</li>
                  <li>Tea/Cofee  facility</li>
                  <li>Private shower & WC</li>
                  <li>Air conditoning</li>
                  <li>in Room Services available</li>
                  <li>Balcony access</li>
                  <li>black out curtains</li>
                  <li>complete room amenities set up including Hairdryer, bedroom slippers and toiletries</li>
                </ul> 
                <div className='booking'>
                  <h2>Book Now</h2>
                  <p className="cost">Price<span>Tsh 80, 000</span></p>
                  <a href="mailto:brandhotel4@gmail.com"><MdEmail/> Brandhotel4@gmail.com</a>
                  <a href="tel:+255773467756"><MdPhone/>+255-773-467-756</a>
                </div>

              </div>
            </div>
          </article>
          <article className='top'>
            <img src={room.image}  alt="" />
            <div className='details'>
              <h2>executive suite</h2>
              <p> This Spacious room easily offers an inviting feel with modern amenities for a relaxing, enjoyable stay for our corporate or leisue guest.
              Couple up with great view of the city is an ideal room for your next visit. 
              </p>
              <div>
                <h3 className='amenities'>amenities</h3>
                <ul>
                  <li>High speed wifi</li>
                  <li>Large smart TV</li>
                  <li>Tea/Cofee  facility</li>
                  <li>Private shower & WC</li>
                  <li>Air conditoning</li>
                  <li>in Room Services available</li>
                  <li>Balcony access</li>
                  <li>black out curtains</li>
                  <li>complete room amenities set up including Hairdryer, bedroom slippers and toiletries</li>
                </ul> 
                <div className='booking'>
                  <h2>Book Now</h2>
                  <p className="cost">Price<span>Tsh 80, 000</span></p>
                  <a href="mailto:brandhotel4@gmail.com"><MdEmail/> Brandhotel4@gmail.com</a>
                  <a href="tel:+255773467756"><MdPhone/>+255-773-467-756</a>
                </div>

              </div>
            </div>
          </article>
        </div>
      </div>  
    </section>
  )
}

export default Accomodation