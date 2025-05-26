import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import {useReactHelmetContext} from '../../contextApi/ReactHelmetContext'
import { Helmet } from 'react-helmet'
import { useRoomsContext } from '../../contextApi/roomsContext'

const JuniorSuite = () => {
  const {junior_suite} = useRoomsContext();
  const {juniorsuite } = useReactHelmetContext();
  
  return (
    <main>
      <Helmet>
        <title>{juniorsuite.title}</title>
        <meta name={juniorsuite.description} content={juniorsuite.content} />
        <meta name={juniorsuite.keywordsname} keywords={juniorsuite.keywords}/>
      </Helmet>
      <RoomLayout room = {junior_suite}/>
    </main>
  )
}

export default JuniorSuite