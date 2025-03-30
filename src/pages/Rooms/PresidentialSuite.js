import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const PresidentialSuite = () => {
  const {presidential_suite} = useRoomsContext()

  return (
    <main>
      <RoomLayout room = {presidential_suite}/>
    </main>
  )
}

export default PresidentialSuite