import React from 'react'
import { Helmet } from 'react-helmet'
import { useReactHelmetContext } from '../../contextApi/ReactHelmetContext'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useRoomsContext } from '../../contextApi/roomsContext'


const ExecutiveSuite = () => {
  const {executive_suite} = useRoomsContext()
  const {executivesuite } = useReactHelmetContext();

  return (
    <main>
      <Helmet>
        <title>{executivesuite.title}</title>
        <meta name={executivesuite.description} content={executivesuite.content} />
        <meta  name={executivesuite.keywordsname} keywords={executivesuite.keywords}/>
      </Helmet>
      <RoomLayout room = {executive_suite}/>
    </main>
  )
}

export default ExecutiveSuite