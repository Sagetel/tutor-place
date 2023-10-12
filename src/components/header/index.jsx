import React, { useState } from 'react'
import './style.scss'
import AccountButton from '../UI/accountButton';
import ModalAccount from './../modalAccount';
import ModalNav from './../modalNav/index';
function Header() {
  const [isOpenAccountPopUp, setIsOpenAccountPopUp] = useState(false);
  const [isOpenAdaptiveNav, setIsOpenAdaptiveNav] = useState(false);

  return (
    <header className='header'>
      <img className="header__decore" src="./images/circle2.svg" alt="logo" />
      <a className="header__logo" href="./">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <div className="header__modal"></div>
      <div className='header__nav-modal' onClick={() => { setIsOpenAdaptiveNav(true) }}>
        <img src="./images/modalOpen.svg" alt="" />
      </div>
      {isOpenAdaptiveNav && <ModalNav accountModalHandler={setIsOpenAccountPopUp} isOpenAdaptiveNav={isOpenAdaptiveNav} adaptiveModalHandler={setIsOpenAdaptiveNav} />}
      <nav className='header__nav'>
        <ul className="header__items">
          <li className="header__link">
            Главная
          </li>
          <li href='#advantages' className="header__link">
            Что даст обучение
          </li>
          <li className="header__link" onClick={() => { setIsOpenAccountPopUp(true) }}>
            <AccountButton>Личный кабинет</AccountButton>
          </li>
        </ul>
      </nav>
      {isOpenAccountPopUp &&
        <ModalAccount setIsOpenPopUp={setIsOpenAccountPopUp} />
      }
    </header>
  )
}

export default Header