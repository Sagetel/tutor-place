import React from 'react'
import "./style.scss"
function MyTitle({ text }) {
  return (
    <h1 className='title' dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export default MyTitle