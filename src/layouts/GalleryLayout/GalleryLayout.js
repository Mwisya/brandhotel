import React, {useState} from 'react'
import './galleryLayout.css'
import { MdClose } from 'react-icons/md'


const GalleryLayout = ({gallery}) => {
  const[openModal, setOpenModal]= useState(false)
  const[file, setFile]= useState(0)
  const open = () => {setOpenModal(true)}
  const close = () => {setOpenModal(false)}

  return (
    <section className='gallery'>
      <div className='gallery-content'>
        {
          gallery.map((image, index)=>{
            return(
            <div className='image-container' onClick={()=> setFile(image)}  key={index}>
              <img src={image} alt="" onClick={open}/>   
            </div>
            
            ) 
          })
        }
      </div>
      {
      openModal &&
      <div className='gallery-modal' >
        <i className='close-modal' onClick={close}><MdClose/></i>

        <div className='gallery-modal-content'>
          <div className='gallery-modal-image'>
            <img src={file}  alt="" /> 
          </div>
          <div className='gallery-images-wrapper'>
            {
              gallery.map((img,index)=>{
                return(
                  <div key={index} onClick={()=>{ setFile( img) }}>
                    <img src={img} alt=""/>
                  </div>
                )
              })
            }
          </div>
         
        </div>
      </div>
      }
    </section>
  )
}

export default GalleryLayout