import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const DoubleDelux = () => {
  const {doubleDeluxRoom} = useRoomsContext()

  return (
    <main>
      <RoomLayout room = {doubleDeluxRoom}/>
    </main>
  )
}

export default DoubleDelux