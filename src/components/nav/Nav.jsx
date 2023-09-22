import React from 'react'
import './Nav.scss'
import '../../components/normalize/Normalize.scss'
import {navLogo, dark} from  '../../assets/index.js'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__wrapper">
                <div className="logo"><img src={navLogo} alt="" /></div>
                <div className="nav__links">
                  <a>Продукция</a>
                  <a>Сертификаты</a>
                  <a>Наша команда</a>
                  <a>О нас</a>
                  <a>Новости</a>
                  <a>Вакансии</a>
                  <a>Контакты</a>
                </div>
                <div className="nav__hover">
                  <ul>
                    <li>Ламинатные тубы</li>
                    <li>Экструзионные тубы</li>
                    <li>Другая упаковка</li>
                  </ul>
                </div>
                <button><img src={dark} alt="" width={30} height={30} /></button>
            </div>
        </div>
    </nav>
  )
}

export default Nav