import React from 'react'
import './About.scss'
import '../../components/normalize/Normalize.scss'
import {about} from  '../../assets/index.js'

const About = () => {
  return (
    <div className="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__title">О компании<span> LEANGROUP</span></div>
                <div className="about__content">
                <img src={about} alt="" />
                <p>Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб. Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции. С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About