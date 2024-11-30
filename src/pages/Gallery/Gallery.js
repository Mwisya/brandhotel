import React, { useState } from 'react'
import './Gallery.css'
import { Display } from '../../components'
import { hall } from '../../data/data'
import { images } from '../../data/data'
import { MdClose } from 'react-icons/md'

const Gallery = () => {
  const [file, setFile] = useState(null)
  const title = "Gallery"

  return (
    <main className='main-gallery'>
      <Display title={title} image={hall.image}/>
      
      <div className='gallery-wrapper'>
        <ul className='gallery-ul'>
           {images.map((file, index) => {
            return(
              <li key={index} onClick={()=> setFile(file)}><img src={file.url} loading='lazy' alt="" /></li>
            )})}
        </ul>
      </div>

      { file ? 
      <div className='modal'>
          <MdClose className='close' onClick={()=> setFile(null)}/>
          <div className='modal-image'>
             <img src={file?.url} alt="" />
          </div>
      </div> : null }
    </main>
  )
}

export default Gallery