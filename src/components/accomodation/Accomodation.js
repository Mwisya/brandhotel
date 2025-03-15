import React from 'react'
import './accomodation.css'
import { MdAir, MdCoffeeMaker, MdCurtains,  MdOutlineEmail, MdPhone, MdTv } from 'react-icons/md'
import {accomodation} from '../../data/data'
import { MdOutlineBed, MdOutlineRoomService, MdRoomPreferences } from 'react-icons/md'
import { FaShower, FaWifi } from 'react-icons/fa'

const icons = [
  {icon:<MdRoomPreferences/>,title:'Spacious room'},
  {icon:<MdOutlineBed/>,title:'King sized bed'},
  {icon:<MdTv/>,title:'large smart Tv'},
  {icon:<FaWifi/>,title:'High speed Wi-fi'},
  {icon:<FaShower/>,title:'Private shower & WC'},
  {icon:<MdOutlineRoomService/>,title:'In room service available'},
  {icon:<MdCoffeeMaker/>,title:'Tea / Coffee maker'},
  {icon:<MdCurtains/>,title:'Black out curtains'},
  {icon:<MdAir/>,title:'air conditioning'},
]

const Accomodation = () => {

  return (
    <section className='accomodation-container'>
      <div className='accomodation'>
        {/* <h2>our rooms</h2> */}
        <div className='grid'>
          {
            accomodation.map((room, index)=>{
              return(
              <article key={index}>
                <img src={room.image} alt="" />
                <div className='details'>
                  <h2>{room.title}</h2>
                  <p>{room.desc}</p>
                  <div className='amenities'>
                    <h3 className='amenities-h3'>amenities</h3>
                    <ul>
                      {
                        icons.map((item,index)=>{
                          return(
                            <li key={index} > <i>{item.icon}</i> {item.title}</li>
                          )
                        })
                      }
                    </ul> 
                    <div className='bookings'>
                      <div className="cost"> 
                        <p>Book now</p>
                        <div>Tsh {room.price}</div>
                      </div>
                      <a href="mailto:brandhotel4@gmail.com"><MdOutlineEmail/> Brandhotel4@gmail.com</a>
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