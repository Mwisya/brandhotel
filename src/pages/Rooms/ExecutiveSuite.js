import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'


const ExecutiveSuite = () => {
  const {executivesuiteRoom} = useRoomsContext()

  return (
    <main>
      <RoomLayout room = {executivesuiteRoom}/>
    </main>
  )
}

export default ExecutiveSuite