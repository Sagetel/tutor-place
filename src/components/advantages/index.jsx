import React from 'react'
import './style.scss'
import AdvantagesCard from '../advantagesCard'
import HeadTitle from './../headTitle/index';
function Advantages() {
  const cards = [
    { text: 'Откроешь свой первый криптокошелек и научишься с ним работать', image: '1smile.png' },
    { text: 'Поймёшь, как выбирать правильные дропы', image: '2smile.png' },
    { text: 'Построишь план по быстрому приумножению заработанных средств', image: '3smile.png' },
    { text: 'Узнаешь кто такие холдеры и флипперы', image: '4smile.png' },
  ]
  return (
    <section className='advantages'>
      <div className='advantages__title'>
        <HeadTitle text={'Что даст тебе обучение?'} />
      </div>
      <div className="advantages__cards">
        <img className="advantages__image advantages__image-elips1" src="./images/advantages/elips1.svg" alt="elips1" />
        {cards.map((item, index) =>
          <AdvantagesCard key={index} text={item.text} image={item.image} />
        )}
      </div>
      <img className="advantages__image advantages__image-elips2" src="./images/advantages/elips2.svg" alt="elips2" />
      <img className="advantages__image advantages__image-elips3" src="./images/advantages/elips3.svg" alt="elips3" />
      <img className="advantages__image advantages__image-elipsbg" src="./images/advantages/elipsbg.svg" alt="elipsbg" />
      <img className="advantages__image advantages__image-elipsbtbg" src="./images/advantages/elipsbg.svg" alt="elipsbg" />
    </section>
  )
}

export default Advantages