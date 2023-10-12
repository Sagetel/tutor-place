import React from 'react'
import './style.scss'
import MyTitle from './../UI/myTitle/index';
import MyButton from './../UI/myButton/index';
import MainDecore from './../mainDecore/index';
import MySubtitle from '../UI/mySubtitle';
import Advantages from './../advantages/index';
function Main() {
  return (
    <main className='main'>
      <section className='main__section'>
        <div className='main__title'>
          <MyTitle text={`Не упусти возможность войти в <span>прибыльную нишу</span>`} />
        </div>
        <MainDecore />
        <div className="main__subtitle">
          <MySubtitle text={`Получи все нужные навыки для заработка на NFT всего за 28 дней!`} />
        </div>
        <div className="main__button">
          <MyButton >Начать зарабатывать на NFT</MyButton>
        </div>
      </section>
      <Advantages />
    </main>
  )
}

export default Main