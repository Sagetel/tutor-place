import React from 'react'
import './style.scss'
function MyButton({ children }) {
  return (
    <button className='button'>
      {children}
      <div className='button__decore' />
    </button>
  )
}

export default MyButton