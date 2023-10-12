import React from 'react'
import './style.scss'
import HeadTitle from './../headTitle/index';
import MyButton from './../UI/myButton/index';
function ModalAccount({ setIsOpenPopUp }) {
  const prevent = (event) => [
    event.stopPropagation()
  ]
  return (
    <section className='modal' onClick={() => { setIsOpenPopUp(false) }}>
      <div className="modal__content" onClick={(event) => { prevent(event) }}>
        <div className="modal__container">
          <div className='modal__title'>
            <HeadTitle text={"Начни прямо сейчас!"} />
          </div>
          <div className='modal__exit' onClick={() => { setIsOpenPopUp(false) }}>  <img src="./images/modalClose.svg" alt="logo" /></div>
          <p className='modal__text'>
            Получи все нужные навыки для заработка на NFT всего за 28 дней!
          </p>
          <form action="" className='modal__form'>
            <input type="email" className='modal__input' placeholder='Ваш email' />
            <div className='modal__btn'>
              <MyButton>
                Оплатить
              </MyButton>
            </div>
          </form>
        </div>
        <div className="modal__decore"></div>
      </div>
    </section>
  )
}

export default ModalAccount