import React from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'
import { images } from '../../data/data'


const Gallery = () => {
  const data  = images.slice(0, 5)
  return (
    <section className='gallery'>
      <div className='gallery-wrapper'>
      <h1>Explore Gallery</h1>

      <ul className='gallery_items'>
        {
          data.map((i, index)=>{
            return(
              <li key={index}><img src={i.url} alt="" /></li>
            )
          })
        }
       
        <li className='link'>
          <Link className='to_gallery' to={'/gallery'}>View gallery</Link>
        </li>
      </ul>
      </div>

      
    </section>
  )
}

export default Gallery