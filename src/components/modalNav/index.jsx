import React from 'react'
import AccountButton from '../UI/accountButton';
import './style.scss'
function ModalNav({ accountModalHandler, isOpenAdaptiveNav, adaptiveModalHandler }) {

  const setPropagation = (event) => [
    event.stopPropagation()
  ]
  return (
    <nav className='navigation' onClick={() => { adaptiveModalHandler(false) }}>
      <div className="navigation__content" onClick={(event) => { setPropagation(event) }}>
        <a className="navigation__logo" href="./">
          <img src="./images/logo.svg" alt="logo" />
        </a>
        <div className="navigation__exit" onClick={() => { adaptiveModalHandler(false) }}>
          <img src="./images/modalClose.svg" alt="logo" />
        </div>
        <div className="navigation__links">
          <li className="navigation__link">
            Главная
          </li>
          <li className="navigation__link">
            Что даст обучение
          </li>
          <li className="navigation__link" onClick={() => { accountModalHandler(true) }}>
            <AccountButton>Личный кабинет</AccountButton>
          </li>
        </div>
      </div>
    </nav>
  )
}

export default ModalNav