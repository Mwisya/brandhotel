import React from 'react'
import {Experiences, Gallery, Introduction, NewsLetter, OurServices, Rooms, SlideShow} from '../../components'

const Home = () => {
  const overview = {
    heading:'simply the best',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat animi sed deleniti quibusdam facere pariatur molestiae eveniet quam, hic totam et sint magni veniam atque accusamus, laborum alias ex libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quidem perspiciatis eveniet mollitia quis dolorem cum quae rerum eos odio. Consectetur, ipsa. Sint quidem perspiciatis eveniet mollitia quis dolorem cum quae rerum eos odio. Consectetur, ipsa. Rem impedit exercitationem minus molestias eum quae, mollitia ratione quidem. Ducimus quam soluta atque optio obcaecati neque officia voluptatibus alias, enim, molestias minima. Non accusantium officia necessitatibus id!'
  }
  return (
    <main>
      <SlideShow/>
      <Introduction overview={overview}/>
      <Rooms/>
      <OurServices/>
      <Experiences/>
      <Gallery/>
      <NewsLetter/>
    </main>
  )
}

export default Home