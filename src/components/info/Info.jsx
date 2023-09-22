import React from 'react'
import './Info.scss'
import '../../components/normalize/Normalize.scss'
import {infoName, infoPhone} from '../../assets/index.js'

const Info = () => {
  return (
    <div className="info">
        <div className="container">
            <div className="info__wrapper">
                <h2>Получить подробную <span>информацию</span></h2>
                <p>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
                <div className="info__form">
                    <div className="info__registration">
                        <div className="info__input">
                        <label htmlFor="name"><img src={infoName} alt="" /></label>
                        <input type="text" name='name' placeholder='Ваше имя'/>
                        </div>

                        <div className="info__input">
                        <label htmlFor="tel"><img src={infoPhone} alt="" /></label>
                        <input type="tel" placeholder='+375 (29) 0000000' />
                        </div>
                    </div>
                    <textarea name="" id="info-area" placeholder='Комментарий'></textarea>
                </div>
                <button>Получить информацию</button>
            </div>
        </div>
    </div>
  )
}

export default Info