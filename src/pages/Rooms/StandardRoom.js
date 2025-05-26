import React from 'react'
import { Helmet } from 'react-helmet'
import { useReactHelmetContext } from '../../contextApi/ReactHelmetContext'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'


const StandardRoom = () => {
  const {standardRoom} = useRoomsContext()
  const {standardroom } = useReactHelmetContext();

  return (
    <main>
      <Helmet>
          <title>{standardroom.title}</title>
          <meta name={standardroom.description} content={standardroom.content} />
          <meta  name={standardroom.keywordsname} keywords={standardroom.keywords}/>
      </Helmet>
        <RoomLayout room = {standardRoom}/>
      </main>
  )
}

export default StandardRoom