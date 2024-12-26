import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './gallery.css'
import { images } from '../../data/data'
import { MdClose } from 'react-icons/md'

const Gallery = () => {
  const [file, setFile] = useState(null)

  const data  = images.slice(0, 5)
  return (
    <section className='gallery'>
      <div className='gallery-wrapper'>
        <h1>Explore Gallery</h1>
        <ul className='gallery_items'>
          {
            data.map((file, index)=>{
              return(
                <li key={index} onClick={()=> setFile(file)}><img src={file.url} alt="" /></li>
              )
            })
          }
        
          <li className='link'>
            <Link className='to_gallery' to={'/gallery'}>View gallery</Link>
          </li>
        </ul>

        { file ? 
      <div className='modal'>
        <MdClose className='close' onClick={()=> setFile(null)}/>
        <div className='modal-image'>
            <img src={file?.url} alt="" />
        </div>
      </div> : null }

      </div>  
    </section>
  )
}

export default Gallery