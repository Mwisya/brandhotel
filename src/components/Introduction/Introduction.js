import React from 'react'
import './introduction.css'

const Introduction = ({overview}) => {
  return (
    <section className='intro'>
      <div className='intro-wrapper'>
        <h1 className='intro-heading'>{overview.heading}</h1>
        <p className='intro-content'>{overview.content}</p>
      </div>
    </section>
  )
}

export default Introduction