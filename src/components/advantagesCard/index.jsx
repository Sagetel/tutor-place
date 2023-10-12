import React from 'react'
import './style.scss'
function AdvantagesCard({ text, image }) {
  return (
    <div className='card'>
      <div className="card__content">
        <img src={`./images/advantages/${image}`} alt={image} className='card__image' />
        <article className='card__text'>{text}</article>
      </div>
    </div>
  )
}

export default AdvantagesCard