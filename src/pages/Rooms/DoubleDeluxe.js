import React from 'react'
import RoomLayout from '../../layouts/RoomLayout/RoomLayout'
import { useReactHelmetContext } from '../../contextApi/ReactHelmetContext'
import { Helmet } from 'react-helmet'
import { useRoomsContext } from '../../contextApi/roomsContext'

const DoubleDeluxe = () => {
  const {double_deluxe} = useRoomsContext()
  const {doubledeluxe } = useReactHelmetContext();

  return (
    <main>
      <Helmet>
        <title>{doubledeluxe.title}</title>
        <meta name={doubledeluxe.description} content={doubledeluxe.content} />
        <meta  name={doubledeluxe.keywordsname} keywords={doubledeluxe.keywords}/>
      </Helmet>
      <RoomLayout room = {double_deluxe}/>
    </main>
  )
}

export default DoubleDeluxe