import React from 'react'
import { Helmet } from 'react-helmet'
import { useReactHelmetContext } from '../contextApi/ReactHelmetContext'
import {About, Display, Map } from '../components'
import facility3 from '../assets/gallery/facility3.jpg'

const AboutUs = () => {
  const title = 'About us'
    const {about } = useReactHelmetContext();
  
  return (
    <main>
       <Helmet>
          <title>{about.title}</title>
          <meta name={about.description} content={about.content} />
          <meta  name={about.keywords} keywords={about.keywords}/>
        </Helmet>
      <Display title={title} image={facility3}/>
      <About/>
      <Map/>
    </main>
  )
}

export default AboutUs