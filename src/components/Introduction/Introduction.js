import React from 'react'
import './introduction.css'

const Introduction = ({overview}) => {
  return (
    <section className='intro'>
      <div className='intro-wrapper'>
        <p className='intro-content'>{overview}</p>
      </div>
    </section>
  )
}

export default Introduction