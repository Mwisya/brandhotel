import React from 'react'
import { Helmet } from 'react-helmet'
import { useReactHelmetContext } from '../../contextApi/ReactHelmetContext'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'

const Suite = () => {
  const {suite} = useRoomsContext()
  const {suiteroom } = useReactHelmetContext();
  
  return (
    <main>
      <Helmet>
        <title>{suiteroom.title}</title>
        <meta name={suiteroom.description} content={suiteroom.content} />
        <meta  name={suiteroom.keywordsname} keywords={suiteroom.keywords}/>
      </Helmet>
      <RoomLayout room = {suite}/>
    </main>
  )
}

export default Suite