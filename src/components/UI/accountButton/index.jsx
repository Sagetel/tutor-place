import React from 'react'
import './style.scss'

function AccountButton({ children }) {
  return (
    <button className='button--account'>
      {children}
    </button>
  )
}

export default AccountButton