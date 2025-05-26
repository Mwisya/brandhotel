import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useReactHelmetContext } from '../../contextApi/ReactHelmetContext'
import { Helmet } from 'react-helmet'
import { useRoomsContext } from '../../contextApi/roomsContext'

const TwinRoom = () => {
  const {twinRoom} = useRoomsContext();
  const {twinroom } = useReactHelmetContext();

  return (
    <main>
      <Helmet>
        <title>{twinroom.title}</title>
        <meta name={twinroom.description} content={twinroom.content} />
        <meta  name={twinroom.keywordsname} keywords={twinroom.keywords}/>
      </Helmet>
      <RoomLayout room = {twinRoom}/>
    </main>
  )
}

export default TwinRoom