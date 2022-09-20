import React from 'react'
import Main from '../Main'
import requests from '../Requests'
import Rows from '../Rows'

const Home = () => {
  return (
    <div>
      <Main />
      <Rows title='Up Coming' fetchURL={requests.requestUpcoming} />
      <Rows title='Popular' fetchURL={requests.requestPopular} />
      <Rows title='Trending' fetchURL={requests.requestTrending} />
      <Rows title='Top Rated' fetchURL={requests.requestTopRated} />
      <Rows title='Horrow' fetchURL={requests.requestHorror} />
    </div>
  )

}

export default Home
