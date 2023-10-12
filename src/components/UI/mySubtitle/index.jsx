import React from 'react'
import "./style.scss"
function MySubtitle({ text }) {
  return (
    <h2 className='subtitle' dangerouslySetInnerHTML={{ __html: text }} />
  )
}

export default MySubtitle