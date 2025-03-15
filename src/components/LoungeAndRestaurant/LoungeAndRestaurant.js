import React from 'react'
import './loungeAndRestaurant.css'

const LoungeAndRestaurant = ({data}) => {
  return (
    <section className='restaurant-lounge'>
      <div className="restaurant-lounge-wrapper">
          <div className="restaurant-lounge-overview">
            <h2>Restaurant & lounge</h2>
            <p>
              Indulge yourself in a rich curlinary experience at our excuisite dinning restaurant, delight in local and international cuisines.
              <br/><br/>
              Enjoy yourself in our state-of-art bar which provide's you with intimate spaces, ideal for relaxation and enjoyment.
            </p>
          </div>

          <div className="restaurant-lounge-image">
            {
              data.map((img, index)=>{
                return(
                  <img key={index} src={img} alt="" />
                )
              })
            }
          </div>
      </div>
    </section>
  )
}

export default LoungeAndRestaurant