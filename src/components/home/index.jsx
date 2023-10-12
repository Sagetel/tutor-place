import React from 'react'
import Header from '../header';
import Main from '../main/index';
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default Home