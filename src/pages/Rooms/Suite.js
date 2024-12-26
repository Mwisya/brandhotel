import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const Suite = () => {
  const {suiteRoom} = useRoomsContext()

  return (
    <main>
      <RoomLayout room = {suiteRoom}/>
    </main>
  )
}

export default Suite