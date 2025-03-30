import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { Helmet } from 'react-helmet'
import { useReactHelmetContext } from '../../contextApi/ReactHelmetContext'
import { useRoomsContext } from '../../contextApi/roomsContext'


const Deluxe = () => {
  const {deluxe} = useRoomsContext();
  const {deluxeroom} = useReactHelmetContext();
  
  return (
    <main>
      <Helmet>
        <title>{deluxeroom.title}</title>
        <meta name={deluxeroom.description} content={deluxeroom.content} />
        <meta  name={deluxeroom.keywordsname} keywords={deluxeroom.keywords}/>
      </Helmet>
      <RoomLayout room = {deluxe}/>
    </main>
  )
}

export default Deluxe