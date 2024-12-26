import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'


const Delux = () => {
  const {deluxRoom} = useRoomsContext()
  return (
    <main>
      <RoomLayout room = {deluxRoom}/>
    </main>
  )
}

export default Delux