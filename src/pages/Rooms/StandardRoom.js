import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'


const StandardRoom = () => {
  const {standardRoom} = useRoomsContext()

  return (
    <main><RoomLayout room = {standardRoom}/></main>
  )
}

export default StandardRoom